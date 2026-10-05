import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { kcUpdated } from "@/lib/kc";
import { getPosts } from "@/lib/posts";
import { getYearPages } from "@/lib/academicYear";
import { getHostPages } from "@/lib/strHosts";
import { getAllergyPages } from "@/lib/allergySeason";
import { services } from "@/lib/services";
import { priceText } from "@/lib/prices";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Lincoln Mattress Knowledge Center | Guides and Hubs" },
  alternates: { canonical: "/knowledge-center" },
  description:
    "Every Lincoln mattress guide in one place: care, the academic year, Airbnb hosting, allergy season and how our service works. Operated by Sleep Sanitation.",
};

type Hub = { q: string; path: string; name: string; blurb: string; pages: { href: string; title: string }[] };

/** Built from the content loaders, so a new guide or service page shows up automatically. */
function getHubs(): Hub[] {
  return [
    {
      q: "Which mattress care guides should Lincoln households read?",
      path: "/guides",
      name: "Mattress care guides",
      blurb: "How often to clean, bed mites, pet urine odor, steam versus extraction, used beds and what it costs in Lincoln.",
      pages: getPosts().map((p) => ({ href: `/guides/${p.slug}`, title: p.title })),
    },
    {
      q: "What should students and parents plan for each semester?",
      path: "/academic-year",
      name: "The Lincoln academic year",
      blurb: "UNL, Nebraska Wesleyan and Union Adventist move-in, Greek houses, parent booking and May graduation turnarounds.",
      pages: getYearPages().map((p) => ({ href: `/academic-year/${p.slug}`, title: p.h1 })),
    },
    {
      q: "How do Lincoln Airbnb hosts plan mattress care?",
      path: "/airbnb-hosts",
      name: "Lincoln Airbnb hosts",
      blurb: "Game weekends, lodging taxes, city rules and scheduling mattress care between guests.",
      pages: getHostPages().map((p) => ({ href: `/airbnb-hosts/${p.slug}`, title: p.h1 })),
    },
    {
      q: "When is allergy season in Lincoln?",
      path: "/allergy-season",
      name: "Lincoln allergy season",
      blurb: "Lincoln's pollen calendar, indoor air advice for the bedroom and how bed mites differ from outdoor pollen.",
      pages: getAllergyPages().map((p) => ({ href: `/allergy-season/${p.slug}`, title: p.h1 })),
    },
    {
      q: "How does our service work?",
      path: "/services",
      name: "How our service works",
      blurb: "What each service is, what the visit includes and how dry vapor steam differs from wet extraction.",
      pages: services.map((s) => ({ href: `/services/${s.slug}`, title: s.h1 })),
    },
  ];
}

export default function KnowledgeCenterPage() {
  const hubs = getHubs();
  const url = `${site.url}/knowledge-center`;
  const items = hubs.flatMap((h) => [{ name: h.name, href: h.path }, ...h.pages.map((p) => ({ name: p.title, href: p.href }))]);
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    name: "Lincoln Mattress Knowledge Center",
    url,
    dateModified: kcUpdated(),
    isPartOf: { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name },
    publisher: { "@id": "https://sleepsanitation.com/#business" },
    inLanguage: "en-US",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: `${site.url}${it.href}` })),
    },
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", url: site.url }, { name: "Knowledge Center", url }]} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › Knowledge Center
      </nav>
      <h1 className="text-4xl md:text-5xl font-semibold text-navy mb-4">Lincoln Mattress Knowledge Center</h1>
      <p className="text-lg text-mist mb-10">
        This Knowledge Center gathers every Lincoln guide we publish: mattress care, the academic year, Airbnb hosting,
        allergy season and how our service works. Lincoln Mattress Cleaning is operated by Sleep Sanitation. The first
        mattress is {priceText.first}, any size; see{" "}
        <Link href="/pricing" className="text-teal-deep font-semibold underline">our pricing page</Link> for every rate. Call or
        text <a href={site.phoneHref} className="text-teal-deep font-semibold underline">{site.phone}</a>.
      </p>
      <div className="space-y-10">
        {hubs.map((h) => (
          <section key={h.path} className="border-t-2 border-line pt-6">
            <h2 className="text-3xl font-semibold text-navy mb-2">{h.q}</h2>
            <p className="text-lg text-mist mb-3">
              <Link href={h.path} className="text-teal-deep font-semibold underline">{h.name}</Link>: {h.blurb}
            </p>
            <ul className="list-disc pl-6 space-y-1 text-lg">
              {h.pages.map((p) => (
                <li key={p.href}><Link href={p.href} className="text-teal-deep underline">{p.title}</Link></li>
              ))}
            </ul>
          </section>
        ))}
        <section className="border-t-2 border-line pt-6">
          <h2 className="text-3xl font-semibold text-navy mb-2">Where are the general mattress guides?</h2>
          <p className="text-lg text-mist">
            Cleaning methods, mattress materials, moisture and bed mites aren&apos;t specific to Lincoln, so they live in the
            parent company&apos;s library, the{" "}
            <a href="https://sleepsanitation.com/knowledge-center" className="text-teal-deep font-semibold underline">Sleep Sanitation Knowledge Center</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
