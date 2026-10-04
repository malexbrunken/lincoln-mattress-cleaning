import { site, pricing, plainAnswer } from "@/lib/site";
import { PRICES, PROMO, priceText } from "@/lib/prices";

const BUSINESS_ID = `${site.url}/#business`;
const SANITATION_ID = `${site.url}/#mattress-sanitation`;

/** An Offer in the catalog. Services with no separate price say so in `description`. */
function offer(name: string, description: string, price?: { price?: string; min?: string; max?: string }, serviceId?: string) {
  return {
    "@type": "Offer",
    name,
    description,
    ...(price?.price ? { price: price.price, priceCurrency: "USD" } : {}),
    ...(price?.min
      ? { priceSpecification: { "@type": "PriceSpecification", minPrice: price.min, maxPrice: price.max, priceCurrency: "USD" } }
      : {}),
    itemOffered: serviceId
      ? { "@type": "Service", "@id": serviceId, name: "Mattress sanitation" }
      : { "@type": "Service", name, provider: { "@id": BUSINESS_ID } },
  };
}

/**
 * The one LocalBusiness entity for this site (rendered once, from the root layout).
 * Name, phone and URL must match the citation audit; no street address is published,
 * and there is no review markup or aggregateRating.
 */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: site.name,
    alternateName: `${site.parentBrand} — Lincoln, NE`,
    description: plainAnswer,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    priceRange: "$$",
    parentOrganization: {
      "@type": "LocalBusiness",
      "@id": "https://sleepsanitation.com/#business",
      name: site.parentBrand,
      url: "https://sleepsanitation.com",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lincoln",
      addressRegion: "NE",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Lancaster County, NE" },
      ...site.lancasterCountyTowns.map((name) => ({
        "@type": "City",
        name: `${name}, NE`,
        containedInPlace: { "@type": "AdministrativeArea", name: "Lancaster County, NE" },
      })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    knowsAbout: [
      "mattress cleaning",
      "mattress sanitation",
      "dry vapor steam cleaning",
      "bed mite (house dust mite) treatment",
      "UV-C light treatment",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mattress sanitation services in Lincoln, NE",
      itemListElement: [
        {
          ...offer(
            "Mattress sanitation, first mattress",
            "Any size, twin through California king. Dry vapor steam, UV-C light treatment and HEPA vacuuming, with normal stains, pet odor and ordinary urine accidents included.",
            { price: String(pricing.first.price) },
          ),
          itemOffered: {
            "@type": "Service",
            "@id": SANITATION_ID,
            name: "Mattress sanitation",
            serviceType: "Mattress cleaning and sanitation",
            provider: { "@id": BUSINESS_ID },
            url: `${site.url}/services/mattress-sanitization`,
          },
        },
        offer("Additional full, queen or king mattress", "Same visit as the first mattress.", { price: String(pricing.additional[0].price) }, SANITATION_ID),
        offer("Additional kids bed (twin or full)", "Same visit as the first mattress.", { price: String(pricing.additional[1].price) }, SANITATION_ID),
        offer("Underside/full-surface treatment", "Add-on for the bottom panel and full six-surface coverage.", { min: String(PRICES.underside.min), max: String(PRICES.underside.max) }),
        offer("Pet urine and odor treatment", "Enzyme treatment for urine and organic odor. Ordinary urine accidents and pet odor are included in the mattress price; severe or biohazard contamination is quoted before any work starts."),
        offer("Bed mite (house dust mite) treatment", "Dry vapor steam heat and HEPA vacuuming over the seams, tufts, ridges and edges. Included in the mattress price."),
        offer("UV-C light treatment", "A step in every mattress visit, after the dry vapor steam pass. Included in the mattress price."),
        offer("72-hour bedroom CO₂ testing (optional service, priced by quote)", "Optional service, not part of a mattress visit: a monitor runs in the bedroom for three nights. Booked on its own or added to a mattress visit. Priced by quote. Not a medical test."),
      ],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Offer schema for /pricing only: the regular first-mattress price plus, while it runs,
 * the first-mattress promotion (pricing rule 2026-10-04: the promo appears nowhere else).
 */
export function PricingOffersJsonLd() {
  const service = { "@type": "Service", "@id": SANITATION_ID, name: "Mattress sanitation", provider: { "@id": BUSINESS_ID } };
  const offers: Record<string, unknown>[] = [
    {
      "@type": "Offer",
      name: "Mattress sanitation, first mattress",
      description: "Any size, twin through California king.",
      price: String(PRICES.first),
      priceCurrency: "USD",
      itemOffered: service,
      url: `${site.url}/pricing`,
    },
  ];
  if (PROMO.active) {
    offers.push({
      "@type": "Offer",
      name: `${PROMO.label}: first mattress`,
      description: `Limited-time offer on the first mattress, any size (regular price ${priceText.first}). ${priceText.promoFollowUp}`,
      price: String(PROMO.first),
      priceCurrency: "USD",
      itemOffered: service,
      url: `${site.url}/pricing`,
    });
  }
  offers.push(
    { "@type": "Offer", name: "Each additional full, queen or king mattress", description: "Same visit as the first mattress.", price: String(PRICES.additionalLarge), priceCurrency: "USD", itemOffered: service },
    { "@type": "Offer", name: "Each additional kids bed (twin or full)", description: "Same visit as the first mattress.", price: String(PRICES.additionalKids), priceCurrency: "USD", itemOffered: service },
  );
  const data = { "@context": "https://schema.org", "@graph": offers };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** FAQ JSON-LD */
export function FaqJsonLd({ faq }: { faq: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Service JSON-LD */
export function ServiceJsonLd({ name, description, url }: { name: string; description: string; url: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: { "@id": BUSINESS_ID },
    areaServed: site.areas.map((a) => ({ "@type": "City", name: `${a}, NE` })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Person entity used as the editorial author across the guide library. */
export function AuthorJsonLd({ name }: { name: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url: `${site.url}/about`,
    worksFor: { "@id": BUSINESS_ID },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** Service-area entity connecting editorial pages to the local market. */
export function ServiceAreaJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mattress Sanitation in the Lincoln, Nebraska Area",
    serviceType: "Mattress cleaning and sanitization",
    provider: { "@id": BUSINESS_ID },
    areaServed: site.areas.map((name) => ({ "@type": "City", name: `${name}, NE` })),
    url: `${site.url}/service-areas`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** Article JSON-LD for evergreen educational content. */
export function ArticleJsonLd({
  title,
  description,
  url,
  date,
  author,
}: { title: string; description: string; url: string; date: string; author: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Person", name: author, url: `${site.url}/about` },
    publisher: { "@id": BUSINESS_ID },
    isPartOf: { "@type": "Blog", "@id": `${site.url}/guides` },
    inLanguage: "en-US",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** Breadcrumb JSON-LD */
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}