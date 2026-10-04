import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fillPrices } from "@/lib/prices";

export type Post = {
  slug: string;
  title: string;
  /** Optional shorter <title> when the H1 is too long for the 60-character limit. */
  seoTitle?: string;
  date: string;
  updated?: string;
  excerpt: string;
  category: string;
  author: string;
  content: string;
  faq: { q: string; a: string }[];
  draft?: boolean;
};

const postsDir = path.join(process.cwd(), "content", "posts");

export function getPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  const posts = files.map((f) => {
    const slug = f.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(postsDir, f), "utf8");
    const { data, content } = matter(fillPrices(raw));
    return {
      slug,
      title: data.title ?? slug,
      seoTitle: data.seoTitle,
      date: data.date ? new Date(data.date).toISOString() : "",
      updated: data.updated ? new Date(data.updated).toISOString() : undefined,
      excerpt: data.excerpt ?? "",
      category: data.category ?? "Mattress Care",
      author: data.author ?? "Matthew Brunken",
      content,
      faq: Array.isArray(data.faq) ? data.faq : [],
      draft: !!data.draft,
    } as Post;
  });
  return posts
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}