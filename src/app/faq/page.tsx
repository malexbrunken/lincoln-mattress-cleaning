import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { FaqJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Mattress Cleaning FAQ | Lincoln, NE",
  description:
    "Answers about mattress cleaning in Lincoln, NE: cost, drying time, memory foam and organic mattresses, dust mites, pet accidents, bed bugs, warranty, and what dry vapor steam actually does.",
};

const faqs = [
  {
    q: "How much does mattress cleaning cost in Lincoln?",
    a: "The first mattress is $299 (any size). Each additional mattress in the same visit is $179 for twin or smaller and $199 for full, queen, or king. Add-ons are published on our pricing page: underside sanitation +$70, urine or blood treatment +$105, pet odor treatment +$50, and 72-hour bedroom CO₂ testing $199.",
  },
  {
    q: "What is dry vapor steam, exactly?",
    a: "Superheated water vapor with very little actual moisture — roughly 5% water content, compared to the 40–60% typical of hot-water extraction. At the nozzle it is hot enough to do the sanitation work, but it leaves the mattress surface nearly dry and puts essentially nothing into the foam core.",
  },
  {
    q: "How long before I can sleep on the mattress?",
    a: "Typically about 30–60 minutes in a ventilated bedroom. There is no wet core to dry and no chemical residue to off-gas.",
  },
  {
    q: "Will steam cleaning damage my mattress or void the warranty?",
    a: "Improperly applied heat and moisture can damage a mattress, which is why we read the law tag, identify the construction, and match temperature, nozzle distance, and pass speed to your specific mattress. We treat memory foam, latex, hybrid, organic, and traditional innerspring builds. Our process is designed to be warranty-safe precisely because it is low-moisture.",
  },
  {
    q: "Can you clean an organic or natural mattress, like an Avocado?",
    a: "Yes — and those are among the builds where dry vapor steam matters most, because natural and organic constructions are the least tolerant of a soaked foam core. One of the jobs in our gallery is an Avocado mattress with its foam topper.",
  },
  {
    q: "How long does the dust mite reduction last?",
    a: "In a typical Lincoln home with standard HVAC filtration and hygiene, we describe the benefit as lasting roughly 12–18 months. Reinfestation depends on humidity, bedding hygiene, pets, and whether an allergen-proof encasement is used. We recommend annual treatment as maintenance and semi-annual for households with significant allergy sensitivity or pets.",
  },
  {
    q: "My dog peed on the mattress. Is it salvageable?",
    a: "Often yes. Urine wicks into the quilting and seam channels, and the odor returns later because uric acid salts crystallize and reactivate with humidity. Our enzymatic urine treatment (+$105) breaks those compounds down, and we verify with ATP testing rather than trusting our noses. Where a mattress has years of repeated saturation deep into the core, we will tell you honestly if it is beyond what surface treatment can reach.",
  },
  {
    q: "Do you kill bed bugs?",
    a: "No. We are not pest control and we are not licensed for it. If you have an active infestation, you need a licensed pest-control professional, and we will say that on the phone. What we do is treat the mattress surface and remove the cast debris and allergen reservoirs after the infestation itself has been professionally resolved — which is what makes the mattress comfortable to sleep on again.",
  },
  {
    q: "Is the process safe for kids, pets, and chemical-sensitive households?",
    a: "Yes. No chemical residue is left in the foam, which is exactly why we use dry vapor steam rather than a detergent wash. There is no fragrance left behind either.",
  },
  {
    q: "Do I need to do anything before you arrive?",
    a: "Strip the bedding and clear the nightstands. We bring everything else, including the containment setup. Sheets, pillowcases, and washable covers are best run through your own laundry on a hot cycle — that is more effective than anything we could do on site.",
  },
  {
    q: "Do you service apartment turnovers and student rentals?",
    a: "Yes, and it is a large share of our Lincoln work. Multi-mattress pricing makes a block of units practical, we schedule between lease periods, and we document what was treated per mattress.",
  },
  {
    q: "What areas do you serve?",
    a: "Lincoln and the surrounding 40 miles — Waverly, Hickman, Bennet, Eagle, Palmyra, Firth, Malcolm, Raymond, Seward, Crete, Wahoo, Ashland, and Gretna. Call and we will confirm your address before you book.",
  },
];

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <FaqJsonLd faq={faqs} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › FAQ
      </nav>
      <h1 className="text-4xl md:text-5xl font-semibold text-navy mb-5">Frequently Asked Questions</h1>
      <p className="text-lg text-mist mb-8">
        Straight answers about mattress cleaning in Lincoln — including the ones where the answer is no.
      </p>
      <div className="divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <div key={f.q} className="py-6">
            <h2 className="font-sans text-xl font-bold text-navy mb-2">{f.q}</h2>
            <p className="text-mist text-lg">{f.a}</p>
          </div>
        ))}
      </div>
      <div className="bg-ice border border-line rounded-2xl p-7 mt-10 text-center">
        <p className="font-bold text-navy text-lg mb-3">Still have a question?</p>
        <a href={site.phoneHref} className="inline-flex bg-teal text-white font-bold px-7 py-3.5 rounded-lg min-h-12 items-center">
          Call {site.phone}
        </a>{" "}
        <Link href="/contact" className="inline-flex border-2 border-navy text-navy font-bold px-7 py-3.5 rounded-lg min-h-12 items-center">
          Send a message
        </Link>
      </div>
    </div>
  );
}