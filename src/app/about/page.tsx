import { priceText } from "@/lib/prices";
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
        Lincoln Mattress Cleaning is a locally owned and operated division of {site.parentBrand}, a mattress-only provider built around one
        idea: the surface you sleep on deserves a standard that was designed for it.
      </p>

      <h2 className="text-2xl font-semibold text-navy mb-3">Where this came from</h2>
      <p className="mb-5">
        {site.parentBrand} was built as a mattress-only service: one surface, one set of tools, and a process
        designed around the thing you sleep on. Superheated dry vapor does the sanitation work with very little
        moisture, so the foam core stays dry and nothing is left behind. Lincoln Mattress Cleaning brings that
        same process to Lincoln and Lancaster County.
      </p>

      <h2 className="text-2xl font-semibold text-navy mb-3">What makes the service different</h2>
      <ul className="space-y-3 mb-8 text-lg">
        <li>
          <strong>Mattresses only.</strong> We do not clean carpets, upholstery, or vehicles. Every tool,
          product, and technique exists for one surface, which is why the protocol holds up under scrutiny.
        </li>
        <li>
          <strong>Low-moisture dry vapor steam.</strong> Our Vapor Clean machines are rated by their maker at 5
          to 6% moisture content, so the mattress is sanitized without soaking the core.
        </li>
        <li>
          <strong>Hygiene on every job.</strong> Technicians wear gloves and shoe booties, and equipment is
          disinfected between jobs. UV-C light treatment is part of every visit.
        </li>
        <li>
          <strong>Published pricing.</strong> {priceText.first} for the first mattress, any size, with every extra listed openly
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
        contain the bedroom, work the surface in calibrated passes, give the seams and edges their own passes, finish with UV-C light treatment, and leave the room as we found it.
      </p>

      <h2 className="text-2xl font-semibold text-navy mb-3">Where we work</h2>
      <p className="mb-8">
        We cover{" "}
        {["lincoln", "lancaster-county", "seward-and-crete", "wahoo-and-ashland"]
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
        . For Omaha, see{" "}
        <a href="https://omahamattresscleaning.com" className="text-teal-deep underline font-semibold" rel="noopener">
          Omaha Mattress Cleaning
        </a>
        , another {site.parentBrand} division.
      </p>

      <h2 className="text-2xl font-semibold text-navy mb-3">Editorial standards</h2>
      <p className="mb-8">
        The guides on this site are written to be useful whether or not you hire us. Claims about steam,
        moisture, bed mites, and contamination are worded conservatively, pricing on every page matches the
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
        <p className="text-mist text-sm mt-1">{site.hoursNote}</p>
      </div>
    </div>
  );
}