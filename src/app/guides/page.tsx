import type { Metadata } from "next";
import { updatedFor } from "@/lib/dates";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { priceText } from "@/lib/prices";

export const metadata: Metadata = {
  title: "Mattress Care Guides | Lincoln, NE",
  alternates: { canonical: "/guides" },
  description:
    "Mattress care guides for Lincoln households: how often to clean, bed mites, pet urine odor, steam versus extraction, students, used beds and costs.",
};

export default function GuidesPage() {
  const posts = getPosts();
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <WebPageJsonLd name="Mattress care guides" path="/guides" dateModified={updatedFor("/guides")} type="CollectionPage" />
      <BreadcrumbJsonLd items={[{ name: "Home", url: site.url }, { name: "Knowledge Center", url: `${site.url}/knowledge-center` }, { name: "Guides", url: `${site.url}/guides` }]} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › <Link href="/knowledge-center" className="text-teal hover:underline">Knowledge Center</Link> › Guides
      </nav>
      <h1 className="text-4xl md:text-5xl font-semibold text-navy mb-4">Mattress Care Guides</h1>
      <p className="text-lg text-mist mb-10">
        How often should a mattress be cleaned? Once a year for most Lincoln households, and every six months with pets
        or allergy-sensitive sleepers. These guides cover that schedule, bed mites, urine odor, steam versus extraction,
        used mattresses, student apartments and cost: {priceText.first} for the first mattress, any size.
      </p>
      <h2 className="text-3xl font-semibold text-navy mb-6">Which guide answers your question?</h2>
      <div className="space-y-6">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-2xl border-2 border-line p-6 bg-white">
            <p className="text-sm font-bold text-teal uppercase tracking-wide mb-1">
              {p.category} · {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}
            </p>
            <h3 className="text-2xl font-semibold text-navy mb-2">
              <Link href={`/guides/${p.slug}`} className="hover:text-teal-deep transition-colors">{p.title}</Link>
            </h3>
            <p className="text-lg text-mist mb-3">{p.excerpt}</p>
            <Link href={`/guides/${p.slug}`} className="text-teal-deep font-semibold underline">Read the guide →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}