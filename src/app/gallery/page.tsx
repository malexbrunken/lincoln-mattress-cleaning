import type { Metadata } from "next";
import { updatedFor } from "@/lib/dates";
import { WebPageJsonLd } from "@/components/JsonLd";
import Image from "next/image";
import Link from "next/link";
import { siteImages, featuredPair } from "@/lib/images";
import { priceText } from "@/lib/prices";
import { site } from "@/lib/site";
import { FirstPrice } from "@/components/FirstPrice";

export const metadata: Metadata = {
  title: "Mattress Cleaning Equipment in Lincoln: Dry Vapor Steam and HEPA",
  description:
    "Our mattress cleaning equipment in Lincoln, NE: dry vapor steam, a HEPA vacuum with UV-C light treatment, and the law tag we read first.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <WebPageJsonLd name="Equipment and method" path="/gallery" dateModified={updatedFor("/gallery")} type="WebPage" />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › Equipment and Method
      </nav>
      <h1 className="text-4xl md:text-5xl font-semibold text-navy mb-4">Mattress Cleaning Equipment and Method</h1>
      <p className="text-lg text-mist mb-10 max-w-3xl">
        What mattress cleaning equipment do we use? A dry vapor steam cleaner and a HEPA mattress vacuum with UV-C light treatment, after
        we read the mattress law tag. The first mattress is <FirstPrice />, any size.
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

      <section className="max-w-3xl mt-14">
        <h2 className="text-2xl font-semibold text-navy mb-4">Mattress cleaning equipment, step one: dry vapor steam at 212°F</h2>
        <p className="mb-5 text-lg leading-relaxed">{`The core of every visit is a commercial dry vapor steam cleaner. It heats water well past the boiling point in a sealed boiler and delivers low-moisture vapor at the tip, so the mattress gets the heat without a soaking. We check the tip at 212°F with a temperature gun on every job, so the heat reaching your mattress is measured, not assumed.`}</p>
        <p className="mb-5 text-lg leading-relaxed">{`Dry vapor is the right tool for a mattress because a mattress is built in layers of foam, latex, fiber and springs. A carpet cleaner or wet extraction machine pushes water into those layers. Dry vapor treats the surface, seams, tufts and edges with heat and leaves the comfort layers alone.`}</p>
      </section>
      <section className="max-w-3xl mt-14">
        <h2 className="text-2xl font-semibold text-navy mb-4">HEPA vacuum with UV-C light treatment</h2>
        <p className="mb-5 text-lg leading-relaxed">{`Heat handles bed mites; lifting what is left is a separate job. After the steam we go over the full surface with a HEPA mattress vacuum. The HEPA filter traps fine dust, dead bed mites, droppings and skin flakes instead of blowing them back into your bedroom air.`}</p>
        <p className="mb-5 text-lg leading-relaxed">{`The same pass carries UV-C light treatment across the sleeping surface. It is part of every visit, on every mattress, at no extra charge.`}</p>
      </section>
      <section className="max-w-3xl mt-14">
        <h2 className="text-2xl font-semibold text-navy mb-4">Enzyme treatment for stains and odor</h2>
        <p className="mb-5 text-lg leading-relaxed">{`For pet urine, child accidents, sweat and everyday stains, we carry enzyme treatment matched to the stain. Enzymes break down the organic material that causes the odor rather than covering it with fragrance. Normal stains, pet odor and ordinary urine accidents are included in the price.`}</p>
      </section>
      <section className="max-w-3xl mt-14">
        <h2 className="text-2xl font-semibold text-navy mb-4">Why we read the law tag first</h2>
        <p className="mb-5 text-lg leading-relaxed">{`Before any equipment touches the bed, we read the law tag and the care label. They tell us what the mattress is made of, and we set steam pass speed and technique for memory foam, latex, hybrid, innerspring, Tempur-Pedic and organic builds. That is how a premium mattress gets the same thorough treatment as a guest-room bed, done the right way for its materials.`}</p>
      </section>
      <section className="max-w-3xl mt-14">
        <h2 className="text-2xl font-semibold text-navy mb-4">What the equipment looks like in your bedroom</h2>
        <p className="mb-5 text-lg leading-relaxed">{`We carry everything in from the van in one trip: the dry vapor steam cleaner, the HEPA vacuum with UV-C light, enzyme treatments and a kit of seam and edge tools. We strip the bed, read the tag, steam the full sleeping surface section by section, then vacuum the same surface with HEPA and UV-C. A queen-size mattress usually takes well under an hour, and we work around the furniture already in the room.`}</p>
        <p className="mb-5 text-lg leading-relaxed">{`The equipment is quiet enough to run while the rest of the house goes about its day, and there are no harsh chemical smells. Kids, pets and anyone working from home can stay put. When we finish, we put the bedroom back the way we found it.`}</p>
      </section>
      <section className="max-w-3xl mt-14">
        <h2 className="text-2xl font-semibold text-navy mb-4">Built for every kind of mattress</h2>
        <p className="mb-5 text-lg leading-relaxed">{`The same equipment handles a crib mattress, a twin bunk bed, a college apartment full, a king in the primary bedroom and a Tempur-Pedic, Purple, Saatva or Avocado. Pass speed and technique change with the materials; the thoroughness does not. Every mattress gets the full treatment, top surface, seams, tufts and edges.`}</p>
      </section>
      <section className="max-w-3xl mt-14">
        <h2 className="text-2xl font-semibold text-navy mb-4">Clean equipment, clean home</h2>
        <p className="mb-5 text-lg leading-relaxed">{`Our technicians wear gloves and shoe booties inside your home. Every hose, attachment and tool is disinfected between jobs, and the vacuum's HEPA filter is maintained on a schedule, so nothing from the last house comes into yours. We bring everything in, treat the bed where it sits and reset the bedroom before we leave.`}</p>
      </section>
      <section className="max-w-3xl mt-14">
        <h2 className="text-2xl font-semibold text-navy mb-4">Keeping the mattress fresh after the visit</h2>
        <p className="mb-5 text-lg leading-relaxed">
          We recommend a professional cleaning twice a year, in spring and fall, with an organic protector on the bed in between. Most Lincoln households put both visits on the calendar at once. The first mattress is <FirstPrice />, any size, and each additional mattress on the same visit is {priceText.additionalRange}.
        </p>
      </section>
      <p className="max-w-3xl mt-6 text-lg">
        See <Link href="/services/mattress-sanitization" className="text-teal-deep underline font-semibold">mattress sanitization</Link>,{" "}
        <Link href="/services/bed-mite-treatment" className="text-teal-deep underline font-semibold">bed mite treatment</Link> and{" "}
        <Link href="/pricing" className="text-teal-deep underline font-semibold">pricing</Link>, or <Link href="/book" className="text-teal-deep underline font-semibold">book a visit</Link>.
      </p>

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