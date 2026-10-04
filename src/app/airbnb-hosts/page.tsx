import { priceText } from "@/lib/prices";
import type { Metadata } from "next";
import { updatedFor } from "@/lib/dates";
import Link from "next/link";
import { getHostPages } from "@/lib/strHosts";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Lincoln Airbnb Hosts: Mattress Turnovers and Rules" },
  description:
    "For Lincoln short-term rental hosts: the city license and 4% tax, Airbnb's cleaning rules, Husker game weekends, turnover timing and guest accidents.",
  alternates: { canonical: "/airbnb-hosts" },
};

const glance = [
  { k: "City license", v: "$250 per unit, renewed annually, from Building and Safety", url: "https://www.lincoln.ne.gov/City/Departments/PDS/Building-Safety/Residential-Rental-and-Property-Maintenance/Short-Term-Rentals" },
  { k: "Guest cap", v: "Two per sleeping area, up to 12", url: "https://www.lincoln.ne.gov/City/Departments/PDS/Building-Safety/Residential-Rental-and-Property-Maintenance/Short-Term-Rentals" },
  { k: "City tax", v: "4% short-term rental occupation tax, due by the 25th; Airbnb doesn't collect it", url: "https://www.lincoln.ne.gov/files/sharedassets/public/v/2/finance/city-clerk/faqs-short-term-rental-occupation-tax-rev-05.23.pdf" },
  { k: "Lancaster County lodging tax", v: "4%, plus the 1% state lodging tax", url: "https://revenue.nebraska.gov/government/nebraska-and-county-lodging-tax" },
  { k: "Airbnb's cleanliness rule", v: "Clean and free of health hazards (mold, pests) before check-in; clean between every stay", url: "https://www.airbnb.com/help/article/2895" },
  { k: "Guest complaint window", v: "72 hours from discovery", url: "https://www.airbnb.com/help/article/2868" },
  { k: "Host damage request", v: "Within 14 days of the guest's checkout", url: "https://www.airbnb.com/help/article/279" },
];

const games = [
  { date: "October 10", opp: "Indiana", time: "11:00 AM CDT" },
  { date: "October 31", opp: "Washington", time: "TBA" },
  { date: "November 21", opp: "Ohio State", time: "TBA" },
];

export default function AirbnbHostsHub() {
  const pages = getHostPages();
  const hub = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/airbnb-hosts`,
    name: "Lincoln Airbnb and short-term rental hosts",
    url: `${site.url}/airbnb-hosts`,
    hasPart: pages.map((p) => ({ "@type": "Article", headline: p.h1, url: `${site.url}/airbnb-hosts/${p.slug}` })),
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <WebPageJsonLd name="Lincoln Airbnb hosts" path="/airbnb-hosts" dateModified={updatedFor("/airbnb-hosts")} type="WebPage" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hub) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", url: site.url }, { name: "Lincoln Airbnb hosts", url: `${site.url}/airbnb-hosts` }]} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › Lincoln Airbnb hosts
      </nav>
      <p className="kicker text-teal-deep mb-2">The host desk</p>
      <h1 className="text-4xl font-semibold text-navy mb-4 leading-tight max-w-4xl">Lincoln Airbnb and short-term rental hosts</h1>
      <p className="text-xl text-navy mb-10 max-w-4xl">
        A Lincoln listing answers to two rulebooks: the city&apos;s license and tax rules, and Airbnb&apos;s ground rules for hosts.
        Add seven Husker home weekends in 2026 and a weekday-only cleaning schedule, and the mattress becomes a timing problem.
        These five guides quote the city&apos;s and Airbnb&apos;s rules, cite where each came from, and say where our cleaning fits.
      </p>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <section aria-label="Guides">
          <ul className="grid gap-4 sm:grid-cols-2">
            {pages.map((p) => (
              <li key={p.slug} className="bg-white border border-line rounded-2xl p-5 shadow-sm">
                <Link href={`/airbnb-hosts/${p.slug}`} className="text-navy font-semibold text-lg underline decoration-teal">{p.label}</Link>
                <p className="text-mist mt-2 text-base">{p.description}</p>
              </li>
            ))}
          </ul>

          <div className="prose-mc text-lg mt-10">
            <h2>Which Husker home games are still ahead in 2026?</h2>
            <div className="overflow-x-auto mb-6">
              <table>
                <thead><tr><th>Saturday</th><th>Opponent at Memorial Stadium</th><th>Kickoff</th></tr></thead>
                <tbody>
                  {games.map((g) => (
                    <tr key={g.date}><td>{g.date}</td><td>{g.opp}</td><td>{g.time}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Homecoming against Maryland was October 3, 2026, at 3:00 PM CDT. The schedule is from huskers.com as checked October 3, 2026;
              check it again before you price a weekend. Our <Link href="/airbnb-hosts/husker-game-weekends">game weekend guide</Link> shows
              how to use the three-week gaps after October 10 and October 31.
            </p>
            <h2>What stays the same at every Lincoln listing?</h2>
            <p>
              A game weekend, a tax question or a guest accident doesn&apos;t change the visit. A host pays {priceText.first} for the first
              mattress; each additional full, queen or king is {priceText.additionalLarge} and each additional kids bed {priceText.additionalKids},
              with a surcharge only for a severe or biohazard case, and we work Monday to Friday, 9am to 6pm, answering calls and texts on weekends. We record every mattress on an inspection form (material, special care
              notes, urine or odor observations) and run the two checks in every visit: moisture after the job and the dust mite (bed mite)
              sensor on our UV-C vacuum. 72-hour bedroom CO₂ testing is a separate optional service, priced by quote; it isn&apos;t a medical test. Crews wear gloves and shoe booties and disinfect equipment between jobs. Check each mattress&apos;s care label and warranty terms before booking. This page is general information, not medical advice.
            </p>
            <p>
              Hosts who want the science behind a turnover, from steam temperature to bed mites (house dust mites), can read the{" "}
              <a href="https://sleepsanitation.com/knowledge-center" rel="noopener">Sleep Sanitation Knowledge Center</a>; these Lincoln
              guides stick to the city, Airbnb and the Husker calendar.
            </p>
            <h2>What we don&apos;t know</h2>
            <ul>
              <li>What will replace Host Compliance. The City Treasurer says new short-term rental software is coming soon.</li>
              <li>Kickoff times for October 31 and November 21.</li>
            </ul>
            <h2>Sources</h2>
            <ul>
              <li><a href="https://www.lincoln.ne.gov/City/Departments/PDS/Building-Safety/Residential-Rental-and-Property-Maintenance/Short-Term-Rentals" rel="noopener">City of Lincoln Building and Safety: Short Term Rentals</a>, checked October 3, 2026</li>
              <li><a href="https://www.lincoln.ne.gov/City/Departments/Finance/City-Treasurer/Occupation-Taxes" rel="noopener">City of Lincoln Treasurer: Occupation Taxes</a>, checked October 3, 2026</li>
              <li><a href="https://revenue.nebraska.gov/government/nebraska-and-county-lodging-tax" rel="noopener">Nebraska Department of Revenue: Nebraska and County Lodging Tax</a>, checked October 3, 2026</li>
              <li><a href="https://huskers.com/sports/football/schedule" rel="noopener">Nebraska Huskers: 2026 Football Schedule</a>, checked October 3, 2026</li>
              <li><a href="https://www.airbnb.com/help/article/2895" rel="noopener">Airbnb: Ground rules for home hosts</a>, checked October 3, 2026</li>
              <li><a href="https://www.airbnb.com/help/article/279" rel="noopener">Airbnb: Host damage protection</a>, checked October 3, 2026</li>
            </ul>
            <h2>Changelog</h2>
            <ul><li>October 3, 2026: hub and five host guides published.</li></ul>
            <p className="text-mist text-base">Written by {site.name}, operated by {site.parentBrand}.</p>
          </div>
        </section>

        <aside aria-label="Lincoln hosting at a glance" className="bg-navy text-white rounded-2xl p-6 self-start lg:sticky lg:top-6">
          <p className="kicker text-teal-bright mb-4">Lincoln hosting at a glance</p>
          <dl className="space-y-4">
            {glance.map((g) => (
              <div key={g.k}>
                <dt className="text-sm uppercase tracking-wide text-white/70">{g.k}</dt>
                <dd className="text-base">{g.v} <a href={g.url} rel="noopener" className="text-teal-bright underline">source</a></dd>
              </div>
            ))}
          </dl>
          <p className="text-sm text-white/70 mt-4">Checked October 3, 2026.</p>
          <a href={site.phoneHref} className="mt-6 inline-flex bg-teal text-white font-bold px-6 py-3 rounded-lg">Call {site.phone}</a>
        </aside>
      </div>
    </div>
  );
}
