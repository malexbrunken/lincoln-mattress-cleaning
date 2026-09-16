import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { townBySlug } from "@/lib/towns";

export const metadata: Metadata = {
  title: "About Us | Lincoln Mattress Cleaning, a Sleep Sanitation Service",
  description:
    "Lincoln Mattress Cleaning is the Lincoln, Nebraska service of Sleep Sanitation — a mattress-only provider using low-moisture dry vapor steam, a mattress-specific protocol, and published pricing.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › About
      </nav>
      <h1 className="text-4xl md:text-5xl font-semibold text-navy mb-5">About Lincoln Mattress Cleaning</h1>
      <p className="text-xl mb-6">
        We are the Lincoln, Nebraska service of {site.parentBrand} — a mattress-only provider built around one
        idea: the surface you sleep on deserves a standard that was designed for it, not borrowed from carpet
        cleaning.
      </p>

      <h2 className="text-2xl font-semibold text-navy mb-3">Where this came from</h2>
      <p className="mb-5">
        {site.parentBrand} started because mattress cleaning in this market was almost entirely an add-on. A
        carpet cleaner finishes the floors, walks upstairs with an upholstery wand, runs a hot-water extraction
        pass over the bed, and leaves. The mattress stays damp for a day or two, detergent residue stays in the
        foam, and nothing about the process was designed around the thing you breathe against for eight hours a
        night.
      </p>
      <p className="mb-5">
        The alternative is not complicated. Superheated dry vapor does the sanitation work with almost no
        moisture, so the foam core stays dry and nothing is left behind. Hospitals and food-service operations
        have used that principle for years. It simply had not been brought to mattresses as a dedicated service
        in Nebraska — so that is what we built.
      </p>

      <h2 className="text-2xl font-semibold text-navy mb-3">What makes the service different</h2>
      <ul className="space-y-3 mb-8 text-lg">
        <li>
          <strong>Mattresses only.</strong> We do not clean carpets, upholstery, or vehicles. Every tool,
          product, and technique exists for one surface, which is why the protocol holds up under scrutiny.
        </li>
        <li>
          <strong>Low-moisture dry vapor steam.</strong> Roughly 5% moisture content against the 40–60% typical
          of wet extraction — sanitized without soaking the core.
        </li>
        <li>
          <strong>Verified work.</strong> UV-C post-treatment and pre/post surface readings on our mattress
          vacuum. We photograph the readings and show them to you.
        </li>
        <li>
          <strong>Published pricing.</strong> $299 for the first mattress, any size, with add-ons listed openly
          on our <Link href="/pricing" className="text-teal-deep underline font-semibold">pricing page</Link>.
        </li>
        <li>
          <strong>Honest boundaries.</strong> We do not claim to treat allergies or asthma, and we are not pest
          control. When a mattress should be replaced rather than treated, we say so before you pay.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-navy mb-3">The protocol, in order</h2>
      <p className="mb-5">
        Inspect, isolate, sanitize, detail, reset. We read the law tag before anything touches the mattress,
        contain the bedroom, work the surface in calibrated passes, give the seams and edges the attention an
        upholstery wand never does, finish with UV-C, and leave the room as we found it.
      </p>

      <h2 className="text-2xl font-semibold text-navy mb-3">Where we work</h2>
      <p className="mb-8">
        Lincoln and the surrounding 40 miles — including{" "}
        {["lincoln", "waverly", "hickman", "seward", "crete", "wahoo", "ashland", "gretna"]
          .map((s) => townBySlug(s))
          .filter((t): t is NonNullable<typeof t> => !!t)
          .map((t, i, arr) => (
            <span key={t.slug}>
              <Link href={`/service-areas/${t.slug}`} className="text-teal-deep underline font-semibold">
                {t.name}
              </Link>
              {i < arr.length - 2 ? ", " : i === arr.length - 2 ? ", and " : ""}
            </span>
          ))}
        . The Omaha metro is served by our sister property,{" "}
        <a href="https://omahamattresscleaning.com" className="text-teal-deep underline font-semibold" rel="noopener">
          Omaha Mattress Cleaning
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold text-navy mb-3">Editorial standards</h2>
      <p className="mb-8">
        The guides on this site are written to be useful whether or not you hire us. Claims about steam,
        moisture, dust mites, and contamination are worded conservatively, pricing on every page matches the
        published price list, and we do not publish reviews or results we cannot substantiate. Where a question
        has a genuine &ldquo;this is not our job&rdquo; answer — bed bug eradication, allergy treatment,
        diagnosing a mattress that should simply be replaced — we say that instead of selling you an
        appointment.
      </p>

      <div className="bg-ice border border-line rounded-2xl p-8 text-center">
        <p className="text-xl font-bold text-navy mb-4">Questions? We&apos;re happy to talk.</p>
        <a href={site.phoneHref} className="inline-flex bg-teal text-white font-bold text-lg px-8 py-4 rounded-lg min-h-12 items-center">
          Call {site.phone}
        </a>
        <p className="text-mist mt-4">{site.hours} · {site.email}</p>
      </div>
    </div>
  );
}