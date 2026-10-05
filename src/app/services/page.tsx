import { priceText } from "@/lib/prices";
import type { Metadata } from "next";
import { updatedFor } from "@/lib/dates";
import { WebPageJsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mattress Cleaning Services in Lincoln, NE",
  description:
    "Mattress services in Lincoln, NE: dry vapor steam sanitization, bed mite treatment, urine and odor treatment, UV-C light treatment, optional CO₂ testing.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <WebPageJsonLd name="Mattress services in Lincoln" path="/services" dateModified={updatedFor("/services")} type="CollectionPage" />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › <Link href="/knowledge-center" className="text-teal hover:underline">Knowledge Center</Link> › Services
      </nav>
      <h1 className="text-4xl md:text-5xl font-semibold text-navy mb-4">What mattress services do we offer in Lincoln?</h1>
      <p className="text-lg text-mist max-w-3xl mb-10">
        One mattress visit, {priceText.first} for the first mattress, any size: dry vapor steam, HEPA vacuuming, UV-C
        light treatment, bed mite treatment, and urine and odor treatment for ordinary accidents. Every visit includes
        two checks, the bed mite sensor on our UV-C vacuum and a moisture check after the job. 72-hour bedroom CO₂
        testing is optional, priced by quote.
      </p>
      <h2 className="text-3xl font-semibold text-navy mb-6">What does each service cover?</h2>
      <div className="grid gap-7 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.slug} className="rounded-2xl border-2 border-line bg-white p-7 ridge">
            <h3 className="text-2xl font-semibold text-navy mb-3">{s.name}</h3>
            <p className="mb-4 text-mist">{s.intro}</p>
            <ul className="space-y-1.5 text-[15px] text-mist mb-5">
              {s.includes.slice(0, 4).map((i) => (
                <li key={i} className="flex gap-2"><span className="text-teal font-bold">✓</span> {i}</li>
              ))}
              {s.includes.length > 4 && <li className="text-mist italic">…and more</li>}
            </ul>
            <div className="flex gap-3">
              <Link
                href={`/services/${s.slug}`}
                className="bg-navy text-white font-bold px-5 py-3 rounded-lg min-h-12 flex items-center hover:bg-navy-2 transition-colors"
              >
                Details
              </Link>
              <a
                href={site.phoneHref}
                className="border-2 border-navy text-navy font-bold px-5 py-3 rounded-lg min-h-12 flex items-center hover:bg-ice transition-colors"
              >
                Call
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-ice border border-line rounded-2xl p-7 mt-10">
        <h2 className="text-2xl font-semibold mb-3">Not sure which service you need?</h2>
        <p className="text-mist mb-5">
          Call and describe what you are seeing — staining, odor, a musty smell, or a mattress
          with a history you inherited. We will tell you which service fits, and we will tell you plainly when
          the honest answer is that the mattress should be replaced instead.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={site.phoneHref} className="bg-teal text-white font-bold px-6 py-3.5 rounded-xl min-h-12 flex items-center">
            Call {site.phone}
          </a>
          <Link href="/pricing" className="border-2 border-navy text-navy font-bold px-6 py-3.5 rounded-xl min-h-12 flex items-center">
            See pricing
          </Link>
        </div>
      </div>
    </div>
  );
}