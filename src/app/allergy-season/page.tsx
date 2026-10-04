import { priceText } from "@/lib/prices";
import type { Metadata } from "next";
import { updatedFor } from "@/lib/dates";
import Link from "next/link";
import { getAllergyPages } from "@/lib/allergySeason";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Lincoln Allergy Season: Pollen, Humidity and the Bed" },
  description:
    "Nebraska Wesleyan's pollen count, LLCHD's and Extension's humidity ranges, Lincoln Airport's wind and freeze normals, and five guides for Lincoln bedrooms.",
  alternates: { canonical: "/allergy-season" },
};

const tiles = [
  { value: "0", label: "Tree pollen, NWU, October 2, 2026 (absent)" },
  { value: "1.6", label: "Weed pollen at NWU, grains per cubic meter (low)" },
  { value: "1.0", label: "Grass pollen at NWU, grains per cubic meter (low)" },
];

const who = [
  { src: "Nebraska Wesleyan University", what: "Tree, weed and grass pollen caught on the NWU campus, in grains per cubic meter", when: "February to mid-October", not: "Indoor air or bedding" },
  { src: "LLCHD Air Quality Program", what: "Lincoln's local AQI, from ozone, carbon monoxide and fine particle monitors LLCHD operates", when: "Daily", not: "Pollen or mold, which LLCHD doesn't regulate" },
  { src: "Nebraska Extension, G2069", what: "Indoor trigger guidance on UNL's extension site, including 30 to 45 percent humidity for dust mites", when: "Published 2011", not: "Live counts" },
  { src: "NOAA normals, Lincoln Airport", what: "Average dew point (17°F in January, 65°F in July), wind and freeze dates", when: "1991 to 2020 normals", not: "Pollen" },
];

export default function AllergySeasonHub() {
  const pages = getAllergyPages();
  const hub = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/allergy-season`,
    name: "Allergy season in Lincoln",
    url: `${site.url}/allergy-season`,
    hasPart: pages.map((p) => ({ "@type": "Article", headline: p.h1, url: `${site.url}/allergy-season/${p.slug}` })),
  };
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <WebPageJsonLd name="Lincoln allergy season" path="/allergy-season" dateModified={updatedFor("/allergy-season")} type="WebPage" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hub) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", url: site.url }, { name: "Lincoln allergy season", url: `${site.url}/allergy-season` }]} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › Lincoln allergy season
      </nav>
      <p className="kicker text-teal-deep mb-2">NWU pollen, LLCHD air, Lincoln Airport normals</p>
      <h1 className="text-4xl font-semibold text-navy mb-6 leading-tight max-w-4xl">
        Allergy season in Lincoln: Nebraska Wesleyan&apos;s count, LLCHD&apos;s advice and the bed
      </h1>

      <ul className="grid gap-4 sm:grid-cols-3 mb-3" aria-label="Nebraska Wesleyan's October 2, 2026 count">
        {tiles.map((t) => (
          <li key={t.label} className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="block text-3xl font-bold text-teal-deep">{t.value}</span>{" "}
            <span className="block text-mist text-sm mt-1">{t.label}</span>
          </li>
        ))}
      </ul>
      <p className="text-mist text-sm mb-8">
        From Nebraska Wesleyan University&apos;s count for October 2, 2026, made by Dr. Kate Weskamp. AAIA, which provides NWU&apos;s sampler,
        asks that counts not be copied without written permission, so we quote these three and link to the rest.
      </p>

      <p className="text-xl text-navy mb-10 max-w-3xl bg-ice rounded-2xl p-6">
        Lincoln&apos;s pollen is counted at Nebraska Wesleyan, not by the city: the Lincoln-Lancaster County Health Department says it
        doesn&apos;t run seasonal pollen counts and links to NWU instead. LLCHD and Nebraska Extension both publish indoor advice, and
        their humidity ranges differ by five points. These five guides put those Lincoln sources next to NOAA&apos;s Lincoln Airport
        normals and say where a mattress cleaning fits, and where it doesn&apos;t.
      </p>

      <div className="prose-mc text-lg max-w-4xl">
        <h2>Who measures what in Lincoln?</h2>
        <div className="overflow-x-auto mb-8">
          <table>
            <thead><tr><th>Source</th><th>What it measures or says</th><th>How often</th><th>What it doesn&apos;t cover</th></tr></thead>
            <tbody>
              {who.map((w) => (
                <tr key={w.src}><td>{w.src}</td><td>{w.what}</td><td>{w.when}</td><td>{w.not}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <section aria-label="Two humidity ranges" className="grid gap-4 sm:grid-cols-2 mb-12 max-w-4xl">
        <div className="border-2 border-teal/40 rounded-2xl p-6">
          <p className="kicker text-teal-deep mb-1">LLCHD</p>
          <p className="text-3xl font-bold text-navy">30 to 50%</p>
          <p className="text-base text-mist mt-2">The relative humidity LLCHD generally recommends for Lincoln homes; it says house dust mites grow in damp, warm environments.</p>
        </div>
        <div className="border-2 border-teal/40 rounded-2xl p-6">
          <p className="kicker text-teal-deep mb-1">Nebraska Extension G2069</p>
          <p className="text-3xl font-bold text-navy">30 to 45%</p>
          <p className="text-base text-mist mt-2">Extension&apos;s range for dust mite control. By our calculation, Lincoln Airport&apos;s average July air brought to 70°F indoors would sit near 84 percent before any air conditioning.</p>
        </div>
      </section>

      <h2 className="text-2xl font-semibold text-navy mb-5">Which guide answers your question?</h2>
      <ol className="grid gap-4 mb-12">
        {pages.map((p, i) => (
          <li key={p.slug} className="flex gap-4 bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="shrink-0 w-10 h-10 rounded-full bg-navy text-white font-bold grid place-items-center">{i + 1}</span>
            <span>
              <span className="block kicker text-teal-deep">{p.label}</span>{" "}
              <Link href={`/allergy-season/${p.slug}`} className="text-navy font-semibold text-lg underline decoration-teal">{p.h1}</Link>{" "}
              <span className="block text-mist mt-1 text-base">{p.description}</span>
            </span>
          </li>
        ))}
      </ol>

      <section id="visit" aria-label="Booking a Lincoln visit" className="border-l-8 border-teal bg-white rounded-r-2xl p-7 mb-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-navy mb-4">When should you book a visit in allergy season?</h2>
        <p className="text-lg mb-4">
          Pollen season doesn&apos;t change the bill: the first mattress is {priceText.first},
          each additional full, queen or king is {priceText.additionalLarge} and each additional kids bed {priceText.additionalKids}, with normal stains, pet odor and ordinary urine
          accidents included and a surcharge only for a severe or biohazard case, which you&apos;ll hear before any work starts.
        </p>
        <p className="text-lg mb-4">
          Appointments are weekdays from 9am to 6pm. Gloves, shoe booties and equipment disinfected between jobs are standard, and so is
          a written inspection form for every mattress covering its material, special care notes and any urine or odor observations.
          Every visit includes two checks, and only two: a moisture check after the job and the dust mite (bed mite) sensor
          on our UV-C vacuum. 72-hour bedroom CO₂ testing is a separate optional service, booked on its own or added to a visit and priced by quote; it isn&apos;t a medical test. Read the care label and warranty terms first, or call {site.phone}.
        </p>
        <p className="text-base text-mist">
          A mattress cleaning isn&apos;t an allergy or asthma treatment, and we don&apos;t claim it is; these pages are general
          information, not medical advice.
        </p>
      </section>

      <div className="prose-mc text-lg max-w-4xl">
        <p>
          The research behind heat, bed mites (house dust mites) and allergens is gathered once for every city in Sleep Sanitation&apos;s{" "}
          <a href="https://sleepsanitation.com/knowledge-center/mattress-dust-mites-allergens" rel="noopener">dust mites and allergens hub</a>.
        </p>
        <h2>What we don&apos;t know</h2>
        <ul>
          <li>The date NWU will post its first 2027 count, since its page says only that counting runs from February.</li>
          <li>The humidity in any one Lincoln bedroom, since NOAA&apos;s dew points describe Lincoln Airport&apos;s outdoor air.</li>
          <li>Whether a north or south wind brings more pollen, since NOAA tracks Lincoln Airport&apos;s wind, NWU tracks the pollen, and neither links the two.</li>
        </ul>
        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.nebrwesleyan.edu/academics/majors-and-minors/biology/pollen-count" rel="noopener">Nebraska Wesleyan University: Pollen Count</a>, checked October 3, 2026</li>
          <li><a href="https://www.lincoln.ne.gov/City/Departments/Health-Department/Environmental/Air" rel="noopener">Lincoln-Lancaster County Health Department: Air Quality</a>, checked October 3, 2026</li>
          <li><a href="https://dwee.nebraska.gov/air/air-compliance/ambient-air-monitoring-program" rel="noopener">Nebraska DWEE: Ambient Air Monitoring Program</a>, checked October 3, 2026</li>
          <li><a href="https://extensionpubs.unl.edu/publication/g2069/2011/html/view" rel="noopener">Nebraska Extension G2069: Indoor Air Quality, Know the Asthma Triggers in the Home</a>, checked October 3, 2026</li>
          <li><a href="https://www.ncei.noaa.gov/data/normals-hourly/1991-2020/access/USW00014939.csv" rel="noopener">NOAA NCEI: Hourly Climate Normals 1991 to 2020, Lincoln Airport</a>, checked October 3, 2026</li>
          <li><a href="https://digitalcommons.unl.edu/museumprogram/19" rel="noopener">Bolick (2001), Something to Sneeze At: Nebraska&apos;s Airborne Pollen</a>, checked October 3, 2026</li>
        </ul>
        <h2>Changelog</h2>
        <ul><li>October 3, 2026: hub and five allergy season guides published.</li></ul>
        <p className="text-mist text-base">Written by {site.name}, operated by {site.parentBrand}.</p>
      </div>
    </div>
  );
}
