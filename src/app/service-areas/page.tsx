import type { Metadata } from "next";
import Link from "next/link";
import { towns } from "@/lib/towns";
import { site } from "@/lib/site";
import { ServiceAreaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Service Areas | Mattress Cleaning Around Lincoln, NE",
  description:
    "Mattress cleaning and sanitization across Lincoln and the surrounding 40 miles: Waverly, Hickman, Bennet, Eagle, Palmyra, Firth, Malcolm, Raymond, Seward, Crete, Wahoo, Ashland, and Gretna.",
};

export default function ServiceAreasPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ServiceAreaJsonLd />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › Service Areas
      </nav>
      <h1 className="text-4xl md:text-5xl font-semibold text-navy mb-4">Where We Work</h1>
      <p className="text-lg text-mist mb-4 max-w-3xl">
        We are a mobile service — we bring the steam system, the UV-C vacuum, and the containment setup to your
        bedroom. {site.serviceRadius}
      </p>
      <p className="text-lg text-mist mb-10 max-w-3xl">
        Select your town for local details, or call and we will confirm your address is inside the radius before
        you book anything.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {towns.map((t) => (
          <Link
            key={t.slug}
            href={`/service-areas/${t.slug}`}
            className="rounded-xl border-2 border-line p-6 hover:border-teal transition-colors bg-white"
          >
            <p className="font-bold text-navy text-lg">{t.name}, NE</p>
            <p className="text-mist text-sm">{t.county}</p>
          </Link>
        ))}
      </div>
      <div className="bg-ice border border-line rounded-2xl p-7 mt-10">
        <h2 className="text-2xl font-semibold mb-3">Not on the list?</h2>
        <p className="text-mist mb-5">
          If you are within roughly 40 miles of Lincoln, call and ask. Small-town and acreage appointments are
          scheduled on routes that already run through Lancaster, Seward, Saline, Saunders, Cass, and Otoe
          counties.
        </p>
        <a href={site.phoneHref} className="inline-flex bg-teal text-white font-bold px-6 py-3.5 rounded-xl min-h-12 items-center">
          Call {site.phone}
        </a>
      </div>
    </div>
  );
}