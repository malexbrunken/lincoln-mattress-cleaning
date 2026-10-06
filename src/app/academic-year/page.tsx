import type { Metadata } from "next";
import { updatedFor } from "@/lib/dates";
import Link from "next/link";
import { getYearPages } from "@/lib/academicYear";
import { site } from "@/lib/site";
import { priceText } from "@/lib/prices";
import { YearTimeline } from "@/components/YearTimeline";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Lincoln Campus Mattress Calendar | Academic Year" },
  description:
    "UNL, Nebraska Wesleyan and Union Adventist move-in dates, Greek house turnovers and when parents should book a mattress cleaning in Lincoln.",
  alternates: { canonical: "/academic-year" },
};

const U = {
  dates: "https://go.unl.edu/dates",
  movein: "https://housing.unl.edu/move-in/",
  breaks: "https://housing.unl.edu/break-information/",
  moveout: "https://moveout.unl.edu/",
};

const year = [
  { when: "January 13, 2027", what: "UNL's housing application opens in MyRED for incoming first-year students who have paid or deferred the enrollment deposit.", source: "UNL Admissions", url: U.dates },
  { when: "April 1, 2027", what: "Priority deadline for the UNL housing application.", source: "UNL Admissions", url: U.dates },
  { when: "May 9, 2026", what: "Residence halls closed at 1 PM, the move-out deadline for the 2025 to 2026 year. Summer break ran to August 23.", source: "UNL Housing", url: U.moveout },
  { when: "July 22, 2026", what: "Move-in dates and times went out to students by Huskers email.", source: "UNL Housing", url: U.movein },
  { when: "August 16 to 19, 2026", what: "Move-In 2026, with curbside check-in at Memorial Stadium.", source: "UNL Housing", url: U.movein },
  { when: "August 24, 2026", what: "Fall semester started.", source: "UNL Housing", url: U.breaks },
  { when: "August 15 to 18, 2027", what: "Projected on-campus move-in for fall 2027; first day of fall courses August 23, 2027.", source: "UNL Admissions", url: U.dates },
];

const faq = [
  {
    q: "Do you clean UNL, NWU or Union Adventist residence hall mattresses?",
    a: "No. Hall beds belong to each school. Our work is in off-campus apartments, houses and Greek chapter facilities that book us.",
  },
  {
    q: "When is UNL move-in for fall 2027?",
    a: "UNL's admissions calendar projects on-campus move-in for August 15 to 18, 2027, with fall courses starting August 23, 2027. Those dates are listed as projected.",
  },
  {
    q: "When should an off-campus mattress be cleaned?",
    a: "When the room is empty, before furniture moves in. Book before your furniture arrives, check the care label and warranty terms first, and leave the bed unmade until it is dry to the touch.",
  },
  {
    q: "Do you serve Nebraska Wesleyan, Union Adventist and SCC students?",
    a: "Yes, for off-campus and at-home beds in Lincoln. See the NWU and Union Adventist move-in guides and the SCC Lincoln Woodhaven Hall guide in this hub.",
  },
];

export default function AcademicYearHub() {
  const pages = getYearPages();
  const hub = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/academic-year`,
    name: "The Lincoln academic year",
    url: `${site.url}/academic-year`,
    hasPart: pages.map((p) => ({ "@type": "Article", headline: p.h1, url: `${site.url}/academic-year/${p.slug}` })),
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <WebPageJsonLd name="The Lincoln academic year" path="/academic-year" dateModified={updatedFor("/academic-year")} type="WebPage" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hub) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", url: site.url }, { name: "Knowledge Center", url: `${site.url}/knowledge-center` }, { name: "The Lincoln academic year", url: `${site.url}/academic-year` }]} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › <Link href="/knowledge-center" className="text-teal hover:underline">Knowledge Center</Link> › The Lincoln academic year
      </nav>
      <p className="kicker text-teal-deep mb-2">Lincoln, by the calendar</p>
      <h1 className="text-4xl font-semibold text-navy mb-4 leading-tight">The Lincoln academic year</h1>
      <p className="text-xl text-navy mb-8">
        When should a Lincoln student&apos;s mattress be cleaned? Before move-in, while the room is empty: in 2026 that
        meant the week before UNL&apos;s August 16 to 19 move-in, NWU&apos;s August 19 move-in or Union Adventist&apos;s
        August 17 Spark Start day. Hall beds stay with each school; we book off-campus apartments, Greek houses and
        campus-area short-term rentals. The first mattress is {priceText.first}, any size.
      </p>

      <YearTimeline items={year} label="The year at a glance" />

      <div className="prose-mc text-lg">
        <h2>Do residence hall beds need cleaning?</h2>
        <p>
          Beds in UNL, Nebraska Wesleyan and Union Adventist residence halls belong to each school. UNL&apos;s move-out
          checklist tells residents to check the mattress&apos;s condition, submit a Fix-It request for any damage and leave
          the original mattress pad behind. So these guides are for students and parents planning around an off-campus
          apartment, a Greek house or a campus-area short-term rental.
        </p>
        <h2>Which guide fits your campus or date?</h2>
        <ol>
          {pages.map((p) => (
            <li key={p.slug}>
              <Link href={`/academic-year/${p.slug}`}>{p.h1}</Link>. {p.description}
            </li>
          ))}
        </ol>
        <h2>What is not covered here?</h2>
        <p>
          How steam works on a mattress and the biology of bed mites read the same in any
          city. That material sits in the{" "}
          <a href="https://sleepsanitation.com/knowledge-center" rel="noopener">Sleep Sanitation Knowledge Center</a>.
          This section sticks to Lincoln campus calendars and move-in timing.
        </p>
        <h2>Questions about the year</h2>
        {faq.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
        <h2>What we don&apos;t know</h2>
        <ul>
          <li>UNL&apos;s 2027 move-out date. University Housing publishes it in the spring.</li>
          <li>Your building&apos;s move-in date. Off-campus dates are not set by UNL.</li>
        </ul>
        <h2>Changelog</h2>
        <ul>
          <li>October 3, 2026: hub and first four guides published.</li>
          <li>October 3, 2026: added hub questions.</li>
          <li>October 4, 2026: rewrote the hub and guides for students and parents around move-in and move-out timing.</li>
          <li>October 5, 2026: added NWU, Union Adventist, Greek house, dorm-vs-apartment, August parent booking and graduation-weekend STR guides.</li>
        </ul>
      </div>
    </div>
  );
}
