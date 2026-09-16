import { site } from "@/lib/site";

/** LocalBusiness JSON-LD (shared across pages) */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: `${site.parentBrand} — Lincoln, NE`,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    parentOrganization: {
      "@type": "Organization",
      name: site.parentBrand,
      url: "https://sleepsanitation.com",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lincoln",
      addressRegion: "NE",
      addressCountry: "US",
    },
    areaServed: site.areas.map((a) => ({
      "@type": "City",
      name: `${a}, NE`,
    })),
    openingHours: "Mo-Su 08:00-18:00",
    knowsAbout: [
      "mattress cleaning",
      "mattress sanitization",
      "dry vapor steam cleaning",
      "dust mite allergen reduction",
      "UV-C surface treatment",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
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
    provider: { "@id": `${site.url}/#business` },
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
    worksFor: { "@id": `${site.url}/#business` },
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
    provider: { "@id": `${site.url}/#business` },
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
    publisher: { "@id": `${site.url}/#business` },
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