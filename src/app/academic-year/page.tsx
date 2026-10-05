import type { Metadata } from "next";
import { updatedFor } from "@/lib/dates";
import Link from "next/link";
import { getYearPages } from "@/lib/academicYear";
import { site } from "@/lib/site";
import { priceText } from "@/lib/prices";
import { YearTimeline } from "@/components/YearTimeline";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "UNL Academic Year Mattress Calendar | Lincoln Mattress" },
  description:
    "UNL move-in and move-out dates, from the January housing application to May, and when students and parents should plan a mattress cleaning.",
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
    q: "Do you clean UNL residence hall mattresses?",
    a: "No. Hall beds belong to University Housing, which handles damage through Fix-It requests at move-out. Our work is in off-campus apartments and houses.",
  },
  {
    q: "When is UNL move-in for fall 2027?",
    a: "UNL's admissions calendar projects on-campus move-in for August 15 to 18, 2027, with fall courses starting August 23, 2027. Those dates are listed as projected.",
  },
  {
    q: "When should an off-campus mattress be cleaned?",
    a: "When the room is empty, before furniture moves in. If you move in during May or August, book before your furniture arrives, and check the care label and warranty terms first. The bed stays unmade until it is dry to the touch.",
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
        When should a student&apos;s mattress be cleaned? Before move-in, while the room is empty: in 2026 that was the
        week before UNL&apos;s August 16 to 19 move-in. These guides follow the UNL calendar for students and parents, from
        August move-in to May move-out. Lincoln Mattress Cleaning charges {priceText.first} for the first mattress, any size.
      </p>

      <YearTimeline items={year} label="The year at a glance" />

      <div className="prose-mc text-lg">
        <h2>Do residence hall beds need cleaning?</h2>
        <p>
          Beds in UNL residence halls belong to University Housing. Its move-out checklist tells residents to check the
          mattress&apos;s condition, submit a Fix-It request for any damage and leave the original mattress pad behind. So these
          guides are for students and parents planning around an off-campus apartment or house.
        </p>
        <h2>Which guide fits your date?</h2>
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
          This section sticks to the UNL calendar and Lincoln timing.
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
        </ul>
      </div>
    </div>
  );
}
