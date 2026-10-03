import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { FaqJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Mattress Cleaning FAQ | Lincoln, NE",
  description:
    "Answers about mattress cleaning in Lincoln, NE: cost, drying time, memory foam and organic mattresses, bed mites, pet accidents, bed bugs, warranty, and what dry vapor steam actually does.",
};

const faqs = [
  {
    q: "How much does mattress cleaning cost in Lincoln?",
    a: "The first mattress is $249 (any size), with normal stains, pet odor and ordinary urine accidents included. Each additional full, queen or king mattress is $199, and each additional kids bed (twin/full) is $149. Underside/full-surface treatment is +$50–$75; severe or biohazard contamination carries a custom surcharge. During our Fall 2026 promotion the first mattress is $199, and any additional cleaning scheduled within 7 days of the first service is also $199.",
  },
  {
    q: "What is dry vapor steam, exactly?",
    a: "Superheated water vapor with very little actual moisture: our Vapor Clean machines are rated by their maker at 5 to 6% moisture content. At the nozzle it is hot enough to do the sanitation work, but it leaves the mattress surface nearly dry and puts essentially nothing into the foam core.",
  },
  {
    q: "How long before I can sleep on the mattress?",
    a: "It depends on the mattress, the room and the humidity, so we do not quote a fixed time. Dry vapor steam puts very little water into the mattress, and Sleep Sanitation's Knowledge Center explains how quickly a treated mattress should dry.",
  },
  {
    q: "Will steam cleaning damage my mattress or void the warranty?",
    a: "Improperly applied heat and moisture can damage a mattress, which is why we read the law tag, identify the construction, and match temperature, nozzle distance, and pass speed to your specific mattress. We treat memory foam, latex, hybrid, organic, and traditional innerspring builds. Your care label and warranty terms govern, so check your warranty before booking.",
  },
  {
    q: "Can you clean an organic or natural mattress, like an Avocado?",
    a: "Yes — and those are among the builds where dry vapor steam matters most, because natural and organic constructions are the least tolerant of a soaked foam core.",
  },
  {
    q: "Does your steam kill bed mites?",
    a: "Yes. Bed mites (house dust mites) die from heat, and published steam tests measured it: Glass and Needham (2004) reported 100 percent mortality of D. farinae in carpet and mattress samples treated with a 96°C steam cleaner, and Colloff (1995) found no live mites in steam-treated, mite-seeded carpet squares over four months. Those were study conditions, not a measurement in your bedroom. Mites can return from the room around the bed, so an encasement and lower bedroom humidity help afterwards. This is general information, not medical advice.",
  },
  {
    q: "My dog peed on the mattress. Is it salvageable?",
    a: "In many cases, yes. Urine wicks into the quilting and seam channels, and the odor returns later because uric acid salts crystallize and reactivate with humidity. Our enzymatic urine treatment, included for ordinary accidents, breaks those compounds down, Where a mattress has years of repeated saturation deep into the core, we will tell you honestly if it is beyond what surface treatment can reach.",
  },
  {
    q: "Do you kill bed bugs?",
    a: "No. We are not pest control and we are not licensed for it. If you have an active infestation, you need a licensed pest-control professional, and we will say that on the phone. What we do is treat the mattress surface and clean it after the infestation itself has been professionally resolved.",
  },
  {
    q: "Do you leave chemicals in the mattress?",
    a: "No. No chemical residue is left in the foam, which is exactly why we use dry vapor steam rather than a detergent wash. There is no fragrance left behind either.",
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
    a: "Lincoln and Lancaster County (Waverly, Hickman, Bennet, Firth, Malcolm, Raymond), plus Eagle, Palmyra, Seward, Crete, Wahoo and Ashland. Call and we will confirm your address before you book.",
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