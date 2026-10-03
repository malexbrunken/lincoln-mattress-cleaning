import type { Metadata } from "next";
import Link from "next/link";
import { getYearPages } from "@/lib/academicYear";
import { site } from "@/lib/site";
import { YearTimeline } from "@/components/YearTimeline";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "The Lincoln Academic Year: A Mattress Calendar for UNL Renters" },
  description:
    "UNL's housing and move dates, from the January application to May move-out, and what each means for a mattress in an off-campus Lincoln apartment.",
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
    a: "When the apartment is empty, before furniture moves in, so the mattress can dry with the room clear. If you move in during May or August, book before your furniture arrives, and check the care label and warranty terms first.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hub) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <BreadcrumbJsonLd items={[{ name: "Home", url: site.url }, { name: "The Lincoln academic year", url: `${site.url}/academic-year` }]} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> › The Lincoln academic year
      </nav>
      <p className="kicker text-teal-deep mb-2">Lincoln, by the calendar</p>
      <h1 className="text-4xl font-semibold text-navy mb-4 leading-tight">The Lincoln academic year</h1>
      <p className="text-xl text-navy mb-8">
        UNL&apos;s calendar sets an August move-in, a May move-out and a summer break in between. These
        guides take one date at a time and say what it means for a mattress in an off-campus apartment or house.
      </p>

      <YearTimeline items={year} label="The year at a glance" />

      <div className="prose-mc text-lg">
        <h2>Residence halls vs off campus</h2>
        <p>
          Beds in UNL residence halls belong to University Housing. Its move-out checklist tells residents to check the
          mattress&apos;s condition, submit a Fix-It request for any damage and leave the original mattress pad behind. So these
          guides are for students and families renting off campus, where the mattress is yours or your landlord&apos;s.
        </p>
        <h2>The guides</h2>
        <ol>
          {pages.map((p) => (
            <li key={p.slug}>
              <Link href={`/academic-year/${p.slug}`}>{p.h1}</Link>. {p.description}
            </li>
          ))}
        </ol>
        <h2>Not covered on these pages</h2>
        <p>
          How steam works on a mattress, how long foam takes to dry, and the biology of bed mites read the same in any
          city. That material sits in the{" "}
          <a href="https://sleepsanitation.com/knowledge-center" rel="noopener">Sleep Sanitation Knowledge Center</a>.
          This section sticks to the UNL calendar and Lincoln rules.
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
          <li>Your lease dates. Off-campus leases are set by each landlord, not by UNL.</li>
        </ul>
        <h2>Changelog</h2>
        <ul>
          <li>October 3, 2026: hub and first four guides published.</li>
          <li>October 3, 2026: added hub questions; tightened wording on rental timing.</li>
        </ul>
      </div>
    </div>
  );
}
