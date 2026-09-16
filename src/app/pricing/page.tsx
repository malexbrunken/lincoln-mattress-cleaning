import type { Metadata } from "next";
import Link from "next/link";
import { packages, addonDetails, site } from "@/lib/site";
import { QuoteCalc } from "@/components/QuoteCalc";
import { FaqJsonLd } from "@/components/JsonLd";
import { IconMattress } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Mattress Cleaning Prices Lincoln NE | $299 First Mattress",
  description:
    "Published mattress cleaning prices for Lincoln, Nebraska: $299 first mattress any size, $179–$199 each additional, plus underside, urine/blood, pet odor, and CO₂ testing add-ons.",
};

const faq = [
  {
    q: "How much does mattress cleaning cost in Lincoln?",
    a: "The first mattress is $299, any size from twin through king, including the top surface, side edges, dry vapor steam, UV-C post-treatment, and allergen reservoir reduction. Each additional mattress in the same visit is $179 for twin or smaller and $199 for full, queen, or king.",
  },
  {
    q: "Why is the first mattress $299 regardless of size?",
    a: "Because size-based pricing on a mattress service mostly penalizes people who own a king. The work involved in sanitizing a twin and a king is close enough that we prefer one honest rate, and you will not get a surprise upsell on the mattress you called about.",
  },
  {
    q: "Is there a fee to come to my home?",
    a: "No. Travel is included anywhere in our Lincoln service radius — Lincoln and the surrounding 40 miles, including Waverly, Hickman, Seward, Crete, Wahoo, Ashland, and Gretna.",
  },
  {
    q: "Do you require a deposit?",
    a: "No deposit is required. Pricing is confirmed at the time of service, and the estimate calculator on this page is for planning purposes.",
  },
  {
    q: "Do you charge more for a heavily stained mattress?",
    a: "Not for ordinary soil — that is what the base service handles. If your mattress has urine, blood, or pet odor history, those are specific add-ons with published prices, and we will tell you before we arrive which ones your situation actually needs.",
  },
];

export default function PricingPage() {
  return (
    <>
      <FaqJsonLd faq={faq} />

      <section className="bg-navy text-white texture-grain">
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <p className="kicker text-teal-bright mb-4">Transparent pricing</p>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-4xl mb-5">
            One clinical-standard rate.
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            No hidden fees. No size-based upsells on your first mattress. The same published numbers apply on
            every {site.parentBrand} property, so what you read here is what you pay in Lincoln.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_.8fr] items-start">
          <div className="space-y-6">
            {packages.map((p) => (
              <article
                key={p.name}
                className={`ridge bg-white rounded-2xl border p-7 md:p-8 shadow-sm ${
                  p.popular ? "border-teal shadow-xl shadow-teal/10" : "border-line"
                }`}
              >
                <div className="flex flex-wrap justify-between items-start gap-5 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-2 text-teal-deep">
                      <IconMattress />
                      {p.popular && (
                        <span className="kicker text-[10px] bg-teal text-white rounded-full px-3 py-1">
                          Most booked
                        </span>
                      )}
                    </div>
                    <h2 className="text-3xl font-semibold">{p.name}</h2>
                    <p className="text-mist mt-2 max-w-xl">{p.blurb}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-5xl font-semibold text-teal-deep">{p.price}</p>
                    <p className="text-xs text-mist mt-1 max-w-[200px]">{p.priceNote}</p>
                  </div>
                </div>
                <ul className="grid gap-x-6 gap-y-2.5 border-t border-line pt-5 sm:grid-cols-2 text-[15px]">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2"><span className="text-teal font-bold">—</span>{f}</li>
                  ))}
                </ul>
              </article>
            ))}
            <div className="flex flex-wrap gap-3">
              <a href={site.phoneHref} className="inline-flex bg-teal text-white font-bold px-7 py-4 rounded-xl min-h-12 items-center hover:bg-teal-bright transition-colors">
                Call {site.phone} to book
              </a>
              <Link href="/contact" className="inline-flex border-2 border-navy text-navy font-bold px-7 py-4 rounded-xl min-h-12 items-center hover:bg-ice transition-colors">
                Book online
              </Link>
            </div>
          </div>
          <aside className="lg:sticky lg:top-28">
            <QuoteCalc />
            <p className="text-sm text-mist mt-4">
              Service available across Lincoln, Omaha &amp; surrounding communities through our sister sites.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-ice-2 border-y border-line py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="kicker text-teal-deep mb-3">Focused add-ons</p>
          <h2 className="text-3xl font-semibold mb-3">Priced per mattress, added only when you need them</h2>
          <p className="text-mist max-w-3xl mb-8">
            We will tell you which of these your mattress actually needs after we see it — and we will tell you
            when none of them apply.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {addonDetails.map((a) => (
              <div key={a.name} className="bg-white rounded-2xl border border-line p-6">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-sans font-bold text-lg">{a.name}</h3>
                  <span className="font-display text-2xl font-semibold text-teal-deep whitespace-nowrap">{a.price}</span>
                </div>
                <p className="text-mist text-[15px] leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <p className="kicker text-teal-deep mb-3">Good questions</p>
        <h2 className="text-4xl font-semibold mb-8">Before you book</h2>
        <div className="divide-y divide-line border-y border-line">
          {faq.map((f) => (
            <div key={f.q} className="py-6">
              <h3 className="font-sans font-bold text-lg mb-2">{f.q}</h3>
              <p className="text-mist">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="bg-navy text-white rounded-2xl p-8 md:p-10 text-center mt-12 texture-grain">
          <p className="font-display text-3xl font-semibold mb-3">Want the exact number?</p>
          <p className="text-white/70 mb-6">
            Tell us how many mattresses and what you are seeing. Most quotes take under a minute.
          </p>
          <a href={site.phoneHref} className="inline-flex bg-teal hover:bg-teal-bright text-white font-bold px-8 py-4 rounded-xl">
            Call {site.phone}
          </a>
        </div>
      </section>
    </>
  );
}