import type { Metadata } from "next";
import { updatedFor } from "@/lib/dates";
import { WebPageJsonLd } from "@/components/JsonLd";
import Image from "next/image";
import Link from "next/link";
import { siteImages, featuredPair } from "@/lib/images";
import { priceText } from "@/lib/prices";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mattress Cleaning Equipment and Method",
  description:
    "The equipment behind mattress sanitation in Lincoln, NE: dry vapor steam, a HEPA vacuum with UV-C light treatment, and the law tag we read first.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <WebPageJsonLd name="Equipment and method" path="/gallery" dateModified={updatedFor("/gallery")} type="WebPage" />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › Equipment and Method
      </nav>
      <h1 className="text-4xl md:text-5xl font-semibold text-navy mb-4">Equipment and Method</h1>
      <p className="text-lg text-mist mb-10 max-w-3xl">
        What equipment do we use? A dry vapor steam cleaner and a HEPA mattress vacuum with UV-C light treatment, after
        we read the mattress law tag. The first mattress is {priceText.first}, any size.
      </p>

      <div className="grid gap-7 lg:grid-cols-2 mb-14">
        {featuredPair.map((img) => (
          <figure key={img.id} className="rounded-2xl overflow-hidden border border-line bg-white">
            <div className="relative aspect-[4/3]">
              <Image src={img.url} alt={img.alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <figcaption className="p-5 text-[15px] text-mist">{img.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {siteImages
          .filter((i) => !featuredPair.some((f) => f.id === i.id))
          .map((img) => (
            <figure key={img.id} className="rounded-2xl overflow-hidden border border-line bg-white flex flex-col">
              <div className="relative aspect-[4/3]">
                <Image src={img.url} alt={img.alt} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover" />
              </div>
              <figcaption className="p-5 text-[15px] text-mist flex-1">{img.caption}</figcaption>
            </figure>
          ))}
      </div>

      <div className="bg-ice border border-line rounded-2xl p-7 md:p-9 mt-14 grid gap-6 md:grid-cols-[1.2fr_.8fr] items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-3">What does every visit include?</h2>
          <p className="text-mist">
            Dry vapor steam, HEPA vacuuming and UV-C light treatment on every mattress. Technicians wear gloves
            and shoe booties in your home, and every piece of equipment is disinfected between jobs.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={site.phoneHref} className="inline-flex bg-teal text-white font-bold px-6 py-3.5 rounded-xl min-h-12 items-center hover:bg-teal-bright transition-colors">
            Call {site.phone}
          </a>
          <Link href="/services/mattress-sanitization" className="inline-flex border-2 border-navy text-navy font-bold px-6 py-3.5 rounded-xl min-h-12 items-center hover:bg-white transition-colors">
            How the service works
          </Link>
        </div>
      </div>
    </div>
  );
}