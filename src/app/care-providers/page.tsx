import { PRICES, priceText } from "@/lib/prices";
import type { Metadata } from "next";
import { updatedFor } from "@/lib/dates";
import Link from "next/link";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd, FaqJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { FirstPrice } from "@/components/FirstPrice";

const SS = "https://sleepsanitation.com";

export const metadata: Metadata = {
  title: { absolute: "Mattress Sanitation for Lincoln Care Providers | Home Health, Hospice, Assisted Living" },
  description: `In-home mattress sanitation for Lincoln and Lancaster County home health, hospice and home care agencies, care managers and assisted living: ${priceText.first} first mattress, reduced partner rates, a Service Summary every visit.`,
  alternates: { canonical: "/care-providers" },
};

const delivers = [
  "Low-moisture dry vapor steam, with the mattress surface verified at 212°F or higher with a temperature gun",
  "HEPA vacuuming and UV-C light treatment, with bed mite sensor readings",
  "Enzyme treatment on urine",
  "A moisture check before we leave",
  "The mattress protector removed during the visit, and a one-time supply of special detergent sheets left for washing it",
  "A Service Summary every visit, with a copy to the agency with the client's or family's permission",
];

const faq = [
  {
    q: "What does a mattress visit cost for a Lincoln client?",
    a: `The first mattress is ${priceText.first}, any size. Additional mattresses in the same visit are ${priceText.additionalKing} for a king or California king, ${priceText.additionalFullQueen} for a full or queen and ${priceText.additionalKids} for a twin or kids bed. Agencies and facilities that send recurring visits we can group by area get reduced partner rates, quoted on request.`,
  },
  {
    q: "Do you clean hospital bed mattresses?",
    a: "Yes, vinyl and coated hospital bed mattresses, steam-sanitized in place. We don't service powered air, low-air-loss or alternating-pressure mattresses. If the bed is rented, check with the supplier first.",
  },
  {
    q: "Do you move the client?",
    a: "No. An aide or family member handles any transfer. Allow 1–2 hours per mattress.",
  },
  {
    q: "What do you ask at booking?",
    a: "The address and an access contact, the number and sizes of mattresses, whether a hospital bed is rented, and whether oxygen is in use or there are breathing sensitivities or an enzyme allergy.",
  },
  {
    q: "What do you provide before the first visit?",
    a: "A certificate of insurance on request. Technicians are background-checked under our hiring policy, including a national sex offender registry check.",
  },
  {
    q: "Who pays?",
    a: "The family at our published prices, or the agency for agency-arranged visits. We're not a Medicaid provider.",
  },
  {
    q: "What about a mattress after a death at home?",
    a: "Our normal price when there's no hazmat or decomposition. Those jobs are referred to a biohazard remediation company. Severe soiling carries a surcharge, disclosed before any work starts.",
  },
];

const who = [
  { k: "Home health and hospice", v: "Clients on long-term hospital beds, patients coming home, and families after a death at home." },
  { k: "Home care and care managers", v: "Clients aging in place across Lincoln, Waverly, Hickman and nearby towns." },
  { k: "Assisted living and group homes", v: "Twice-a-year visits for every resident bed, plus every turnover, with a Service Summary for each room." },
  { k: "DME suppliers", v: "A referral for clients who own their vinyl or coated hospital bed mattress." },
];

export default function CareProviders() {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/care-providers#service`,
    name: "In-home mattress sanitation for Lincoln care providers",
    serviceType: "Mattress cleaning and sanitation",
    audience: { "@type": "Audience", audienceType: "Home health, hospice and home care agencies, care managers, assisted living and group homes" },
    url: `${site.url}/care-providers`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: site.areas.map((a) => ({ "@type": "City", name: `${a}, NE` })),
    offers: [
      { "@type": "Offer", name: "First mattress, any size", price: String(PRICES.first), priceCurrency: "USD" },
      { "@type": "Offer", name: "Each additional king, same visit", price: String(PRICES.additionalKing), priceCurrency: "USD" },
      { "@type": "Offer", name: "Each additional full or queen, same visit", price: String(PRICES.additionalFullQueen), priceCurrency: "USD" },
      { "@type": "Offer", name: "Each additional twin or kids bed, same visit", price: String(PRICES.additionalKids), priceCurrency: "USD" },
    ],
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <FaqJsonLd faq={faq} />
      <WebPageJsonLd name="Lincoln care providers" path="/care-providers" dateModified={updatedFor("/care-providers")} type="WebPage" />
      <BreadcrumbJsonLd items={[{ name: "Home", url: site.url }, { name: "Care providers", url: `${site.url}/care-providers` }]} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › Care providers
      </nav>
      <p className="kicker text-teal-deep mb-2">For care providers</p>
      <h1 className="text-4xl font-semibold text-navy mb-4 leading-tight max-w-4xl">In-home mattress sanitation for Lincoln care providers</h1>
      <p className="text-xl text-navy mb-4 max-w-4xl">
        Lincoln Mattress Cleaning, operated by {site.parentBrand}, cleans and sanitizes mattresses in clients&apos; homes and in residential
        care across Lincoln and Lancaster County. The first mattress is <FirstPrice />, additional mattresses in the same visit are{" "}
        {priceText.additionalRange}, and agencies that group visits by area get reduced partner rates. Every visit ends with a Service
        Summary. Call or text <a href={site.phoneHref} className="underline">{site.phone}</a>.
      </p>
      <p className="text-lg text-mist mb-10 max-w-4xl">
        We serve homes across Lincoln, from the neighborhoods around Bryan East, Bryan West and CHI Health St. Elizabeth to Waverly,
        Hickman, Seward and Crete. When a client comes home from a hospital or rehab stay, we can have the bed cleaned before they arrive.
      </p>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <section aria-label="Care providers" className="prose-mc text-lg">
          <h2>Who we work with in Lincoln</h2>
          <ul>
            {who.map((w) => (
              <li key={w.k}><strong>{w.k}:</strong> {w.v}</li>
            ))}
          </ul>

          <h2>What a visit delivers</h2>
          <ul>
            {delivers.map((d) => <li key={d}>{d}</li>)}
          </ul>
          <p>
            Allow 1–2 hours per mattress. We clean the mattresses we service: regular mattresses, and vinyl or coated hospital bed
            mattresses. We don&apos;t service powered air, low-air-loss or alternating-pressure mattresses.
          </p>

          <h2>Booking a visit for a client</h2>
          <p>
            Call or text {site.phone}, email {site.email}, or request agency rates on the{" "}
            <a href={`${SS}/agency-partners#request`} rel="noopener">Sleep Sanitation agency partners page</a>. We&apos;ll ask about oxygen,
            breathing sensitivities and enzyme allergy at booking. An aide or family member handles any transfer; we don&apos;t move people.
            For a rented hospital bed, check with the supplier first.
          </p>

          <h2>Rates</h2>
          <p>
            The first mattress is <FirstPrice />. Additional mattresses in the same visit are {priceText.additionalKing} for a king or
            California king, {priceText.additionalFullQueen} for a full or queen and {priceText.additionalKids} for a twin or kids bed.
            Agencies and facilities that send recurring visits we can group by area are route-efficiency partners and get reduced rates,
            quoted for your volume. Severe soiling carries a surcharge, disclosed before any work starts. We recommend cleaning every
            mattress twice a year.
          </p>

          <h2>Questions Lincoln care teams ask</h2>
          {faq.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2>Further reading</h2>
          <ul>
            <li><a href={`${SS}/agency-partners`} rel="noopener">Sleep Sanitation agency partner program</a></li>
            <li><a href={`${SS}/knowledge-center/mattress-sanitation-home-care-hospice`} rel="noopener">Mattress sanitation in home health and hospice care</a></li>
            <li><a href={`${SS}/knowledge-center/mattress-care-aging-in-place`} rel="noopener">Mattress care for aging in place</a></li>
          </ul>
          <h2>Changelog</h2>
          <ul><li>October 27, 2026: page published.</li></ul>
          <p className="text-mist text-base">Written by {site.name}, operated by {site.parentBrand}.</p>
        </section>

        <aside aria-label="For agencies" className="bg-navy text-white rounded-2xl p-6 self-start lg:sticky lg:top-6">
          <p className="kicker text-teal-bright mb-4">For agencies and facilities</p>
          <ul className="space-y-3 text-base">
            <li>Certificate of insurance on request</li>
            <li>Background checks under our hiring policy, including a national sex offender registry check</li>
            <li>A Service Summary every visit</li>
            <li>Reduced partner rates for grouped visits</li>
          </ul>
          <div className="mt-6 space-y-2 text-base">
            <a href={`${SS}/agency/sleep-sanitation-care-providers.pdf`} rel="noopener" className="block text-teal-bright underline">Agency one-pager (PDF)</a>
            <a href={`${SS}/agency/sample-service-summary.pdf`} rel="noopener" className="block text-teal-bright underline">Sample Service Summary (PDF)</a>
          </div>
          <a href={site.phoneHref} className="mt-6 inline-flex bg-teal text-white font-bold px-6 py-3 rounded-lg">Call {site.phone}</a>
          <a href={`${SS}/agency-partners#request`} rel="noopener" className="mt-3 block text-teal-bright underline">Request agency rates</a>
        </aside>
      </div>
    </div>
  );
}
