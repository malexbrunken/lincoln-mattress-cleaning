import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { priceText } from "@/lib/prices";
import { updatedFor } from "@/lib/dates";
import { BOOK_PATH, emailHref, smsHref } from "@/lib/booking";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { IconChat, IconCheck, IconClipboard, IconGauge, IconMail, IconPhone, IconShield, IconSteam } from "@/components/Icons";
import { BookHours, BookOptions, focusRing } from "@/components/BookOptions";

export const metadata: Metadata = {
  title: { absolute: "Book Mattress Sanitation in Lincoln: Call, Text or Email" },
  description: `Book mattress sanitation in Lincoln, NE: call or text ${site.phone} or email ${site.email}. ${priceText.first} first mattress, any size. Mon–Fri 9am–6pm.`,
  alternates: { canonical: BOOK_PATH },
};

const faq = [
  {
    q: "When are you open for bookings?",
    a: `Our hours are ${site.hours}. ${site.hoursNote} Call, text or email, and we'll confirm your time and your price before the visit.`,
  },
  {
    q: "What will my visit cost?",
    a: `The first mattress is ${priceText.first}, any size. Each additional full, queen or king mattress in the same visit is ${priceText.additionalLarge}, and each additional kids bed is ${priceText.additionalKids}. Underside treatment is ${priceText.underside} per mattress. Normal stains, pet odor and ordinary urine accidents are included; severe or biohazard cases carry a surcharge, quoted before we start.`,
  },
  {
    q: "Which towns do you serve?",
    a: `${site.serviceRadius} Not sure about your address? Call, text or email and we'll confirm it.`,
  },
  {
    q: "Is the 72-hour bedroom CO₂ test part of the visit?",
    a: "No. It's a separate optional service, booked on its own or added to a visit and priced by quote. It isn't a medical test.",
  },
];

const steps = [
  { t: "You reach out", d: "Call, text or email with your town, how many mattresses and their sizes, and any urine or odor concerns." },
  { t: "We confirm a time", d: "We pick a weekday slot with you and confirm the price before anything starts." },
  { t: "The visit", d: "We fill in an inspection form, treat each mattress with dry vapor steam, UV-C light and HEPA vacuuming, and run our two checks." },
];

const prep = [
  "Strip the bedding and remove mattress protectors. Wash sheets and pillowcases on a hot cycle.",
  "Clear the nightstands and the floor around the bed. You don't need to move heavy furniture.",
  "Check the mattress care label and warranty terms.",
  "Tell us about any urine, odor or stains when you book.",
  "Afterward, the bed stays unmade until it's dry to the touch, plus the moisture check before we leave.",
];

const trust = [
  { icon: IconSteam, t: "Vapor Clean dry vapor steam", d: "Low-moisture steam instead of wet extraction." },
  { icon: IconGauge, t: "Two checks included", d: "A moisture check after the job and the bed mite sensor on our UV-C vacuum." },
  { icon: IconClipboard, t: "Inspection form", d: "Material, special care notes and any urine or odor observations, for every mattress." },
  { icon: IconShield, t: "Gloves, shoe booties, disinfected equipment", d: "Gloves and shoe booties on every job, and equipment disinfected between jobs." },
];


export default function BookPage() {
  const url = `${site.url}${BOOK_PATH}`;
  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#webpage`,
    name: "Book your mattress sanitation in Lincoln",
    url,
    dateModified: updatedFor(BOOK_PATH),
    inLanguage: "en-US",
    isPartOf: { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name },
    mainEntity: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      telephone: site.phoneE164,
      email: site.email,
      openingHours: site.openingHours,
      parentOrganization: { "@type": "LocalBusiness", "@id": "https://sleepsanitation.com/#business", name: site.parentBrand, url: "https://sleepsanitation.com" },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPage) }} />
      <FaqJsonLd faq={faq} />
      <BreadcrumbJsonLd items={[{ name: "Home", url: site.url }, { name: "Book", url }]} />

      <section className="bg-navy text-white texture-grain">
        <div className="relative max-w-6xl mx-auto px-4 pt-5 pb-10 md:pt-10 md:pb-16">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-3 md:mb-6">
            <Link href="/" className="text-teal-bright hover:text-white underline-offset-2 hover:underline">Home</Link> › Book
          </nav>
          <p className="kicker text-teal-bright mb-3 hidden md:block">Lincoln, NE · Operated by {site.parentBrand}</p>
          <h1 className="text-[2.1rem] leading-[1.08] sm:text-5xl md:text-6xl font-semibold text-balance mb-3 md:mb-5">
            Book your mattress sanitation
          </h1>
          <p className="text-[17px] md:text-xl text-white/85 max-w-3xl leading-relaxed">
            The first mattress is {priceText.first}, any size; each additional full, queen or king is {priceText.additionalLarge} and each
            additional kids bed is {priceText.additionalKids} (<Link href="/pricing" className="text-teal-bright font-semibold underline underline-offset-2 hover:text-white">see pricing</Link>).
            We serve Lincoln and nearby towns, operated by {site.parentBrand}.
          </p>

          <BookOptions className="mt-5 md:mt-9" />
          <BookHours className="mt-5" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16" aria-labelledby="next">
        <h2 id="next" className="text-3xl md:text-4xl font-semibold text-navy mb-7">What happens after you reach out?</h2>
        <ol className="grid gap-4 md:grid-cols-3 md:gap-6">
          {steps.map((s, i) => (
            <li key={s.t} className="ridge bg-white rounded-2xl border border-line p-6 shadow-sm">
              <span className="inline-grid place-items-center w-10 h-10 rounded-full bg-navy text-brass font-bold mb-4" aria-hidden>{i + 1}</span>
              <h3 className="font-sans font-bold text-xl text-navy mb-1.5"><span className="sr-only">Step {i + 1}: </span>{s.t}</h3>
              <p className="text-mist leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ice border-y border-line">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-6">How should you prep for the visit?</h2>
            <ul className="space-y-3.5">
              {prep.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-1 grid place-items-center shrink-0 w-6 h-6 rounded-full bg-teal-deep text-white"><IconCheck className="w-4 h-4" /></span>
                  <span className="text-navy leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-6">What comes with every visit?</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {trust.map((t) => (
                <li key={t.t} className="bg-white rounded-2xl border border-line p-5">
                  <t.icon className="w-7 h-7 text-teal-deep mb-2.5" />
                  <p className="font-bold text-navy leading-snug mb-1">{t.t}</p>
                  <p className="text-mist text-[16px] leading-relaxed">{t.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 md:py-16" aria-labelledby="faq">
        <h2 id="faq" className="text-3xl md:text-4xl font-semibold text-navy mb-7">What do people ask before booking?</h2>
        <div className="divide-y divide-line border-y border-line">
          {faq.map((f) => (
            <div key={f.q} className="py-5">
              <h3 className="font-sans font-bold text-xl text-navy mb-2">{f.q}</h3>
              <p className="text-mist leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-navy text-white texture-grain p-7 md:p-9">
          <p className="relative font-display text-2xl md:text-3xl font-semibold mb-5">Ready when you are.</p>
          <div className="relative flex flex-wrap gap-3">
            <a href={site.phoneHref} className={`inline-flex items-center gap-2 bg-teal-deep hover:bg-teal text-white font-bold px-6 py-3.5 rounded-xl min-h-12 transition-colors ${focusRing}`}>
              <IconPhone className="w-5 h-5" /> Call {site.phone}
            </a>
            <a href={smsHref} className={`inline-flex items-center gap-2 ring-1 ring-inset ring-white/40 hover:bg-white hover:text-navy text-white font-bold px-6 py-3.5 rounded-xl min-h-12 transition-colors ${focusRing}`}>
              <IconChat className="w-5 h-5" /> Text us
            </a>
            <a href={emailHref} className={`inline-flex items-center gap-2 ring-1 ring-inset ring-white/40 hover:bg-white hover:text-navy text-white font-bold px-6 py-3.5 rounded-xl min-h-12 transition-colors ${focusRing}`}>
              <IconMail className="w-5 h-5" /> Email us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
