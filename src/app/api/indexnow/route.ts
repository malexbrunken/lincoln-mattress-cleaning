/**
 * IndexNow daily submitter, run by a Vercel Cron (see vercel.json).
 *
 * Builds the sitemap entries in-process (falling back to the live sitemap.xml) and POSTs every URL whose
 * lastmod is within the last 48 hours to api.indexnow.org, which shares them with Bing, Yandex, Seznam,
 * Naver and the other IndexNow engines. `?all=1` submits every URL.
 *
 * Auth: if CRON_SECRET is set, requires `Authorization: Bearer <CRON_SECRET>` (Vercel Cron sends it).
 * Without CRON_SECRET, only requests that look like Vercel Cron (x-vercel-cron header or the
 * vercel-cron/1.0 user agent) are accepted. Everything else gets 401.
 *
 * It never returns 500: IndexNow and network errors are logged and reported in a 200 JSON body,
 * so Vercel has nothing to retry.
 */
import sitemap from "@/app/sitemap";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

/** Public by design; must match public/<key>.txt. */
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "50cd9a8a8a01cc10c27b0609e74f6adb";
const HOST = site.domain; // lincolnmattresscleaning.com
const ENDPOINT = "https://api.indexnow.org/indexnow";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const WINDOW_MS = 48 * 60 * 60 * 1000;
const BATCH = 10000;
/**
 * One-time bootstrap: daily runs before this instant submit every URL, so the first runs after the
 * integration ships announce the whole site. After it, only URLs changed in the last 48 hours go out.
 */
const SUBMIT_ALL_BEFORE = Date.parse("2026-10-17T00:00:00Z");

type Entry = { url: string; lastModified?: string | Date };

function authorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (secret) return req.headers.get("authorization") === `Bearer ${secret}`;
  const ua = req.headers.get("user-agent") ?? "";
  return req.headers.has("x-vercel-cron") || ua.startsWith("vercel-cron/");
}

async function liveSitemap(): Promise<Entry[]> {
  const res = await fetch(`${site.url}/sitemap.xml`, { cache: "no-store" });
  if (!res.ok) throw new Error(`sitemap.xml -> ${res.status}`);
  const xml = await res.text();
  const out: Entry[] = [];
  for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = m[1].match(/<loc>([\s\S]*?)<\/loc>/)?.[1]?.trim();
    const lastmod = m[1].match(/<lastmod>([\s\S]*?)<\/lastmod>/)?.[1]?.trim();
    if (loc) out.push({ url: loc.replace(/&amp;/g, "&"), lastModified: lastmod });
  }
  return out;
}

async function entries(): Promise<{ list: Entry[]; source: string }> {
  try {
    const list = sitemap() as Entry[];
    if (list.length > 0) return { list, source: "in-process" };
  } catch (e) {
    console.error("IndexNow: in-process sitemap failed, falling back to live sitemap.xml", e);
  }
  return { list: await liveSitemap(), source: "live sitemap.xml" };
}

function lastmodMs(v: Entry["lastModified"]): number | null {
  if (!v) return null;
  const t = v instanceof Date ? v.getTime() : Date.parse(String(v));
  return Number.isNaN(t) ? null : t;
}

export async function GET(req: Request) {
  if (!authorized(req)) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const now = Date.now();
  const all = new URL(req.url).searchParams.get("all") === "1" || now < SUBMIT_ALL_BEFORE;

  try {
    const { list, source } = await entries();
    const onHost = list.filter((e) => {
      try {
        return new URL(e.url).host === HOST;
      } catch {
        return false;
      }
    });
    const urls = [
      ...new Set(
        onHost
          .filter((e) => {
            if (all) return true;
            const t = lastmodMs(e.lastModified);
            return t !== null && now - t <= WINDOW_MS;
          })
          .map((e) => e.url),
      ),
    ];

    if (urls.length === 0) {
      console.log(`IndexNow: no URLs with lastmod in the last 48h (of ${onHost.length}, source ${source}).`);
      return Response.json({ ok: true, mode: "recent", source, total: onHost.length, submitted: 0 });
    }

    const results: { batch: number; count: number; status: number; ok: boolean; body?: string }[] = [];
    for (let i = 0; i < urls.length; i += BATCH) {
      const urlList = urls.slice(i, i + BATCH);
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "content-type": "application/json; charset=utf-8" },
          body: JSON.stringify({ host: HOST, key: INDEXNOW_KEY, keyLocation: KEY_LOCATION, urlList }),
          cache: "no-store",
        });
        const ok = res.status === 200 || res.status === 202;
        const body = ok ? undefined : (await res.text().catch(() => "")).slice(0, 300);
        if (!ok) console.error(`IndexNow: batch ${i / BATCH + 1} -> ${res.status} ${body ?? ""}`);
        results.push({ batch: i / BATCH + 1, count: urlList.length, status: res.status, ok, body });
      } catch (e) {
        console.error(`IndexNow: batch ${i / BATCH + 1} request failed`, e);
        results.push({ batch: i / BATCH + 1, count: urlList.length, status: 0, ok: false, body: String(e) });
      }
    }

    const ok = results.every((r) => r.ok);
    console.log(
      `IndexNow: ${all ? "all" : "recent"} mode, submitted ${urls.length} of ${onHost.length} (source ${source}); ` +
        results.map((r) => `${r.count}->${r.status}`).join(", "),
    );
    return Response.json({ ok, mode: all ? "all" : "recent", source, total: onHost.length, submitted: urls.length, results });
  } catch (e) {
    console.error("IndexNow: run failed", e);
    return Response.json({ ok: false, error: String(e) }, { status: 200 });
  }
}
