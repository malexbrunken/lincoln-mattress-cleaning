import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fillPrices } from "@/lib/prices";

/**
 * L5 "Lincoln neighborhoods". Each page is built around one neighborhood's housing stock, not a
 * city-swap template: a Census housing profile for the tract(s) that cover it (with Lincoln's
 * citywide figures beside it), a local-history facts list from the National Register, the City or
 * the neighborhood association, the guide body, questions, then sources. Content lives in
 * content/neighborhoods.
 */
export type Stat = { label: string; here: string; lincoln: string };
export type Fact = { label: string; value: string; source: string; url: string };
export type NeighborhoodPage = {
  slug: string;
  title: string;
  h1: string;
  name: string;
  label: string;
  description: string;
  answer: string;
  order: number;
  published: string;
  updated: string;
  tracts: string;
  /** Short values for the hub's comparison table. */
  summary: { built: string; pre1940: string; detached: string; bedrooms: string };
  stats: Stat[];
  facts: Fact[];
  faq: { q: string; a: string }[];
  sources: { name: string; url: string; checked: string }[];
  changelog: { date: string; note: string }[];
  body: string;
  draft?: boolean;
};

const dir = path.join(process.cwd(), "content", "neighborhoods");

export function getNeighborhoodPages(): NeighborhoodPage[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fillPrices(fs.readFileSync(path.join(dir, f), "utf8")));
      return { ...(data as Omit<NeighborhoodPage, "slug" | "body">), slug: f.replace(/\.md$/, ""), body: content } as NeighborhoodPage;
    })
    .filter((p) => !p.draft)
    .sort((a, b) => a.order - b.order);
}

export const getNeighborhoodPage = (slug: string) => getNeighborhoodPages().find((p) => p.slug === slug);

/** Lincoln city, ACS 2020–2024 5-year: the comparison row on every page and on the hub. */
export const LINCOLN_ACS = {
  built: "1982",
  pre1940: "12%",
  detached: "55%",
  bedrooms: "54% have 3+",
  units: "128,449",
};
