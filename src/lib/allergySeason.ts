import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * L4 "Allergy season in Lincoln". Page anatomy differs from L1 (timeline first), L2 (checklist on top plus a
 * navy side rail of quoted rules) and the Omaha allergy hub (month strip, count panel, disclosure FAQ):
 * a row of stat tiles up top, the short answer, the guide body, numbered step cards, a two-column grid of
 * questions, then numbered source notes. Content lives in content/allergy-season.
 */
export type Tile = { value: string; label: string };
export type Step = { title: string; text: string };
export type AllergyPage = {
  slug: string;
  title: string;
  h1: string;
  label: string;
  description: string;
  answer: string;
  order: number;
  published: string;
  updated: string;
  tiles: Tile[];
  steps: Step[];
  faq: { q: string; a: string }[];
  sources: { name: string; url: string; checked: string }[];
  changelog: { date: string; note: string }[];
  body: string;
  draft?: boolean;
};

const dir = path.join(process.cwd(), "content", "allergy-season");

export function getAllergyPages(): AllergyPage[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      return { ...(data as Omit<AllergyPage, "slug" | "body">), slug: f.replace(/\.md$/, ""), body: content } as AllergyPage;
    })
    .filter((p) => !p.draft)
    .sort((a, b) => a.order - b.order);
}

export const getAllergyPage = (slug: string) => getAllergyPages().find((p) => p.slug === slug);
