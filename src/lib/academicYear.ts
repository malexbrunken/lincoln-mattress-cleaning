import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fillPrices } from "@/lib/prices";

/**
 * L1 "The Lincoln academic year". Lincoln pages are organized by calendar, so every page leads with a
 * timeline ("when in the year this matters") and then a how-to. Content lives in content/academic-year.
 */
export type TimelineItem = { when: string; what: string; source: string; url: string };
export type YearPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  answer: string;
  order: number;
  published: string;
  updated: string;
  timeline: TimelineItem[];
  faq: { q: string; a: string }[];
  sources: { name: string; url: string; checked: string }[];
  changelog: { date: string; note: string }[];
  body: string;
  draft?: boolean;
};

const dir = path.join(process.cwd(), "content", "academic-year");

export function getYearPages(): YearPage[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fillPrices(fs.readFileSync(path.join(dir, f), "utf8")));
      return { ...(data as Omit<YearPage, "slug" | "body">), slug: f.replace(/\.md$/, ""), body: content } as YearPage;
    })
    .filter((p) => !p.draft)
    .sort((a, b) => a.order - b.order);
}

export const getYearPage = (slug: string) => getYearPages().find((p) => p.slug === slug);

/** Format an ISO date (YYYY-MM-DD) without timezone drift. */
export const fmtDate = (d: string) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
