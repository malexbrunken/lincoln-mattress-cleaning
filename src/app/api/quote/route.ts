import { NextResponse } from "next/server";

// Quote requests: locally we log to the server console; in production set
// QUOTE_WEBHOOK_URL (Discord/Slack/Forms/Zapier endpoint) and we POST there.
export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data || !data.name || !data.phone) {
    return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
  }

  const payload = {
    ...data,
    submittedAt: new Date().toISOString(),
    source: "lincolnmattresscleaning.com quote form",
  };

  const webhook = process.env.QUOTE_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("quote webhook failed", err);
    }
  } else {
    console.log("QUOTE_REQUEST", JSON.stringify(payload));
  }

  return NextResponse.json({ ok: true });
}