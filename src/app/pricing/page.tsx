import type { Metadata } from "next";
import { updatedFor } from "@/lib/dates";
import Link from "next/link";
import { packages, addonDetails, site } from "@/lib/site";
import { QuoteCalc } from "@/components/QuoteCalc";
import { PromoBanner, IncludedTable } from "@/components/Pricing";
import { FaqJsonLd, PricingOffersJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { PROMO, priceText } from "@/lib/prices";
import { IconMattress } from "@/components/Icons";

export const metadata: Metadata = {
  title: { absolute: `Lincoln Mattress Cleaning Prices: ${priceText.first} First Mattress` },
  description: `Mattress cleaning in Lincoln, NE is ${priceText.first} for the first mattress, any size, and ${priceText.additionalRange} each additional. Stains, pet odor and ordinary urine included.`,
  alternates: { canonical: "/pricing" },
};

const faq = [
  {
    q: "How much does mattress cleaning cost in Lincoln?",
    a: `The first mattress is ${priceText.first}, any size from twin through California king, including dry-vapor sanitation, UV-C light treatment and HEPA vacuuming, normal stain treatment, pet odor treatment and ordinary urine accident treatment. Each additional full, queen or king mattress is ${priceText.additionalLarge}, and each additional kids bed (twin/full) is ${priceText.additionalKids}.${PROMO.active ? ` During our ${PROMO.label} the first mattress is ${priceText.promoFirst}, and any additional cleaning scheduled within ${PROMO.rebookDays} days of the first service is also $${PROMO.rebookPrice}.` : ""}`,
  },
  {
    q: `Why is the first mattress ${priceText.first} regardless of size?`,
    a: "Because size-based pricing on a mattress service mostly penalizes people who own a king. The work involved in sanitizing a twin and a king is close enough that we prefer one honest rate, and you will not get a surprise upsell on the mattress you called about.",
  },
  {
    q: "Is there a fee to come to my home?",
    a: "No. Travel is included anywhere in our Lincoln service radius — Lincoln, Lancaster County, Seward, Crete, Wahoo and Ashland.",
  },
  {
    q: "Do you require a deposit?",
    a: "No deposit is required. Pricing is confirmed at the time of service, and the estimate calculator on this page is for planning purposes.",
  },
  {
    q: "Do you charge more for a heavily stained mattress?",
    a: "No. Normal stains, pet odor and ordinary urine accidents are included in the base price. Only severe or biohazard contamination carries a custom surcharge, and we quote it after we see the mattress, before any work starts.",
  },
];

export default function PricingPage() {
  return (
    <>
      <WebPageJsonLd name="Mattress cleaning prices in Lincoln, NE" path="/pricing" dateModified={updatedFor("/pricing")} type="WebPage" />
      <FaqJsonLd faq={faq} />
      <PricingOffersJsonLd />

      <section className="bg-navy text-white texture-grain">
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <p className="kicker text-teal-bright mb-4">Transparent pricing</p>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-4xl mb-5">
            How much does mattress cleaning cost in Lincoln?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-6">
            {priceText.first} for the first mattress, any size, with normal stains, pet odor and ordinary urine
            accidents included. Each additional full, queen or king mattress is {priceText.additionalLarge}, and each
            additional kids bed (twin/full) is {priceText.additionalKids}. No travel fee and no deposit.
          </p>
          <PromoBanner className="max-w-2xl mb-6" />
          <p className="text-lg text-white/70 max-w-2xl">
            No size-based upsells on your first mattress. The same published numbers apply on every{" "}
            {site.parentBrand} property, so what you read here is what you pay in Lincoln.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_.8fr] items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">What&apos;s included in the {priceText.first}?</h2>
            <IncludedTable promo />
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
                    {p.priceLabel && <p className="text-xs font-bold uppercase tracking-[0.12em] text-mist">{p.priceLabel}</p>}
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
            <QuoteCalc promo />
            <p className="text-sm text-mist mt-4">
              Service available across Lincoln, Lancaster County and nearby towns.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-ice-2 border-y border-line py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="kicker text-teal-deep mb-3">Beyond the base price</p>
          <h2 className="text-3xl font-semibold mb-3">What costs extra?</h2>
          <p className="text-mist max-w-3xl mb-8">
            Stains, pet odor and ordinary urine accidents are included. These two are the only extras, and we
            will tell you after we see the mattress whether either applies.
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
        <h2 className="text-4xl font-semibold mb-8">What else should you know before you book?</h2>
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