import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { jobImages, beforeAfterPair } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work | Real Mattress Sanitation Jobs in Lincoln, NE",
  description:
    "Real mattress sanitation jobs around Lincoln, Nebraska — pre-cleaning pet and child urine staining, dry vapor steam in progress, cleaned mattresses, and UV-C surface readings before and after.",
};

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › Our Work
      </nav>
      <h1 className="text-4xl md:text-5xl font-semibold text-navy mb-4">Our Work</h1>
      <p className="text-lg text-mist mb-10 max-w-3xl">
        These are photographs from actual appointments — the kit we bring, the staining we are called about, the
        steam doing the work, and the surface reading on the same machine before and after treatment. Nothing
        here is stock photography.
      </p>

      <div className="grid gap-7 lg:grid-cols-2 mb-14">
        {[beforeAfterPair.before, beforeAfterPair.after].map((img) => (
          <figure key={img.id} className="rounded-2xl overflow-hidden border border-line bg-white">
            <div className="relative aspect-[4/3]">
              <Image src={img.url} alt={img.alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              <span
                className={`absolute top-4 left-4 font-bold text-xs uppercase tracking-[0.18em] px-3 py-1.5 rounded-full ${
                  img.tag === "before" ? "bg-navy text-white" : "bg-teal text-white"
                }`}
              >
                {img.tag}
              </span>
            </div>
            <figcaption className="p-5 text-[15px] text-mist">{img.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {jobImages
          .filter((i) => i.id !== beforeAfterPair.before.id && i.id !== beforeAfterPair.after.id)
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
          <h2 className="text-2xl font-semibold mb-3">Why we show the evidence</h2>
          <p className="text-mist">
            &ldquo;Clean&rdquo; is not a claim, it is a measurement. Our UV-C mattress vacuum carries a surface
            reader, so we can take a reading before treatment and another after — and show you both. On the job
            in this gallery, the same machine that read high on the untreated surface read{" "}
            <strong className="text-navy">0</strong> once the dry vapor steam and UV-C passes were complete.
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