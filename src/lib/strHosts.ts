import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * L2 "Lincoln Airbnb and short-term rental hosts". Page anatomy differs from L1's timeline-first pages:
 * a host checklist up top, a side rail of quoted rules (each with its source), then the guide body.
 * Content lives in content/airbnb-hosts.
 */
export type HostRule = { quote: string; source: string; url: string };
export type HostPage = {
  slug: string;
  title: string;
  h1: string;
  label: string;
  description: string;
  answer: string;
  order: number;
  published: string;
  updated: string;
  checklist: string[];
  rules: HostRule[];
  faq: { q: string; a: string }[];
  sources: { name: string; url: string; checked: string }[];
  changelog: { date: string; note: string }[];
  body: string;
  draft?: boolean;
};

const dir = path.join(process.cwd(), "content", "airbnb-hosts");

export function getHostPages(): HostPage[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      return { ...(data as Omit<HostPage, "slug" | "body">), slug: f.replace(/\.md$/, ""), body: content } as HostPage;
    })
    .filter((p) => !p.draft)
    .sort((a, b) => a.order - b.order);
}

export const getHostPage = (slug: string) => getHostPages().find((p) => p.slug === slug);
