import type { Metadata } from "next";
import Link from "next/link";
import { priceText } from "@/lib/prices";
import { updatedFor } from "@/lib/dates";
import { getNeighborhoodPages, LINCOLN_ACS } from "@/lib/neighborhoods";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd, FaqJsonLd, WebPageJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Lincoln Neighborhoods: Housing and Mattress Care" },
  description:
    "Near South, Everett, Havelock, Haymarket and downtown, Country Club and the Highlands: Census housing data, history and what changes for your mattress.",
  alternates: { canonical: "/neighborhoods" },
};

const faq = [
  { q: "Does the price change by Lincoln neighborhood?", a: `No. The first mattress is ${priceText.first}, any size, anywhere in Lincoln. Each additional full, queen or king in the same visit is ${priceText.additionalLarge} and each additional kids bed (twin or full) is ${priceText.additionalKids}.` },
  { q: "Which Lincoln neighborhood has the oldest homes?", a: "Of the six here, Country Club: 91% of homes in its census tract were built before 1960. Everett and Near South each have a tract where 57 to 58% of homes predate 1940, against 12% citywide." },
  { q: "Which neighborhoods are mostly apartments?", a: "Downtown, where 90% of homes are in buildings of ten or more units, and the parts of Near South and Everett nearest downtown, where most homes are studios or one-bedrooms." },
  { q: "Do you clean mattresses in apartment and condo buildings?", a: "Yes. We bring the equipment to the unit and clean the mattress where it is. Tell us about entrances, elevators and parking when you book." },
  { q: "Why isn't my neighborhood listed?", a: "We only publish a neighborhood page when its housing and history give it something genuinely different to say. We serve all of Lincoln and Lancaster County either way; call or text (402) 512-5658." },
];

export default function NeighborhoodsHub() {
  const pages = getNeighborhoodPages();
  const hub = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/neighborhoods`,
    name: "Lincoln neighborhoods",
    url: `${site.url}/neighborhoods`,
    hasPart: pages.map((p) => ({ "@type": "Article", headline: p.h1, url: `${site.url}/neighborhoods/${p.slug}` })),
  };
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <WebPageJsonLd name="Lincoln neighborhoods" path="/neighborhoods" dateModified={updatedFor("/neighborhoods")} type="WebPage" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hub) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", url: site.url }, { name: "Knowledge Center", url: `${site.url}/knowledge-center` }, { name: "Lincoln neighborhoods", url: `${site.url}/neighborhoods` }]} />
      <FaqJsonLd faq={faq} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › <Link href="/knowledge-center" className="text-teal hover:underline">Knowledge Center</Link> › Lincoln neighborhoods
      </nav>
      <p className="kicker text-teal-deep mb-2">Census housing data, National Register history</p>
      <h1 className="text-4xl font-semibold text-navy mb-6 leading-tight max-w-4xl">Lincoln neighborhoods: what the housing means for your mattress</h1>
      <p className="text-xl text-navy mb-10 max-w-3xl bg-ice rounded-2xl p-6">
        Lincoln&apos;s neighborhoods hold very different bedrooms. Country Club is 96% detached houses, mostly built before 1960; downtown is 90%
        apartment and condo buildings; the Highlands was mostly built in the 1990s. The method and the price stay the same everywhere,{" "}
        {priceText.first} for the first mattress, any size, but the number of beds, the building and the room&apos;s summer humidity change the
        visit. Call or text <a href={site.phoneHref} className="underline">{site.phone}</a>.
      </p>

      <h2 className="text-2xl font-semibold text-navy mb-3">How do the six neighborhoods compare?</h2>
      <p className="text-mist text-base mb-4">U.S. Census Bureau, ACS 2020–2024 5-year estimates for the census tracts that cover each neighborhood (two tracts where a neighborhood splits). Tract lines don&apos;t match neighborhood lines exactly.</p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-left border border-line bg-white text-base">
          <thead className="bg-ice">
            <tr><th className="p-3">Neighborhood</th><th className="p-3">Median year built</th><th className="p-3">Built before 1940</th><th className="p-3">Detached houses</th><th className="p-3">Bedrooms</th></tr>
          </thead>
          <tbody>
            {pages.map((p) => (
              <tr key={p.slug} className="border-t border-line">
                <th scope="row" className="p-3"><Link href={`/neighborhoods/${p.slug}`} className="text-teal-deep underline font-semibold">{p.name.replace(/^the /, "The ")}</Link></th>
                <td className="p-3">{p.summary.built}</td><td className="p-3">{p.summary.pre1940}</td><td className="p-3">{p.summary.detached}</td><td className="p-3">{p.summary.bedrooms}</td>
              </tr>
            ))}
            <tr className="border-t-2 border-navy">
              <th scope="row" className="p-3">Lincoln (city)</th>
              <td className="p-3">{LINCOLN_ACS.built}</td><td className="p-3">{LINCOLN_ACS.pre1940}</td><td className="p-3">{LINCOLN_ACS.detached}</td><td className="p-3">{LINCOLN_ACS.bedrooms}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-navy mb-5">Which neighborhood guide fits your home?</h2>
      <ul className="grid gap-4 mb-12">
        {pages.map((p) => (
          <li key={p.slug} className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="block kicker text-teal-deep">{p.label}</span>{" "}
            <Link href={`/neighborhoods/${p.slug}`} className="text-navy font-semibold text-lg underline decoration-teal">{p.h1}</Link>{" "}
            <span className="block text-mist mt-1 text-base">{p.description}</span>
          </li>
        ))}
      </ul>

      <section aria-label="Questions" className="mb-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-navy mb-5">What do Lincoln households ask about neighborhoods?</h2>
        <div className="space-y-5 text-lg">
          {faq.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold text-navy">{f.q}</h3>
              <p className="text-mist">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="prose-mc text-lg max-w-4xl">
        <h2>What does every visit include?</h2>
        <p>
          A material inspection, low-moisture dry vapor steam on the surface, seams and tufts, HEPA vacuuming and UV-C light treatment, and two
          checks: a moisture check after the job and the built-in bed mite sensor on our UV-C vacuum. Underside treatment is {priceText.underside} per
          mattress, and a severe or biohazard case carries a surcharge we quote before starting. 72-hour bedroom CO₂ testing is a separate optional
          service, priced by quote, and it isn&apos;t a medical test. See <Link href="/pricing">Lincoln pricing</Link> for every rate. Why the method
          works is explained in the <a href="https://sleepsanitation.com/knowledge-center" rel="noopener">Sleep Sanitation Knowledge Center</a>.
        </p>
        <h2>Where do students and hosts start?</h2>
        <p>
          Students and parents should start with <Link href="/academic-year">the Lincoln academic year</Link>; hosts with{" "}
          <Link href="/airbnb-hosts">the Airbnb hosts hub</Link>.
        </p>
        <h2>Sources</h2>
        <ul>
          <li><a href="https://data.census.gov/table/ACSDT5Y2024.B25034?g=160XX00US3128000" rel="noopener">U.S. Census Bureau: ACS 2020–2024 5-year, B25034, B25024 and B25041, Lincoln city and tracts</a>, checked October 5, 2026</li>
          <li><a href="https://gis.lincoln.ne.gov/public/rest/services/Planning/DevRevZoningandRegulations/MapServer/50" rel="noopener">City of Lincoln GIS: Neighborhood associations layer</a>, checked October 5, 2026</li>
          <li><a href="https://www.lincoln.ne.gov/City/Departments/PDS/Planning/Long-Range-Planning/Historic-Preservation/Historic-Designations" rel="noopener">City of Lincoln: Historic Designations</a>, checked October 5, 2026</li>
          <li><a href="https://npgallery.nps.gov/" rel="noopener">National Park Service: National Register nominations (NPGallery)</a>, checked October 5, 2026</li>
        </ul>
        <h2>Changelog</h2>
        <ul><li>October 5, 2026: hub and six neighborhood guides published.</li></ul>
        <p className="text-mist text-base">Written by {site.name}, operated by {site.parentBrand}.</p>
      </div>

      <div className="bg-ice border-2 border-teal rounded-2xl p-7 my-10 text-center">
        <p className="font-bold text-navy text-xl mb-3">Book a Lincoln visit</p>
        <a href={site.phoneHref} className="inline-flex bg-teal text-white font-bold text-lg px-8 py-4 rounded-lg min-h-12 items-center">Call {site.phone}</a>
        <p className="text-mist mt-3">{site.hours.replace(/–/g, " to ")}. {site.hoursNote}</p>
        <p className="mt-1"><Link href="/book" className="text-teal-deep font-semibold underline">Text or email instead</Link></p>
      </div>
    </div>
  );
}
