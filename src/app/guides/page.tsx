import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Mattress Care Guides | Lincoln, NE",
  description:
    "Practical mattress care guides for Lincoln and Nebraska households: how often to clean a mattress, dust mites, pet urine odor, steam versus extraction, student rentals, and mattress cleaning costs.",
};

export default function GuidesPage() {
  const posts = getPosts();
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › Guides
      </nav>
      <h1 className="text-4xl md:text-5xl font-semibold text-navy mb-4">Mattress Care Guides</h1>
      <p className="text-lg text-mist mb-10">
        Written for Nebraska households — what actually works in a climate with eight months of closed-up
        bedrooms, and what does not deserve your money.
      </p>
      <div className="space-y-6">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-2xl border-2 border-line p-6 bg-white">
            <p className="text-sm font-bold text-teal uppercase tracking-wide mb-1">
              {p.category} · {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
            <h2 className="text-2xl font-semibold text-navy mb-2">
              <Link href={`/guides/${p.slug}`} className="hover:text-teal-deep transition-colors">{p.title}</Link>
            </h2>
            <p className="text-lg text-mist mb-3">{p.excerpt}</p>
            <Link href={`/guides/${p.slug}`} className="text-teal-deep font-semibold underline">Read the guide →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}