import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fmtDate, getYearPage, getYearPages } from "@/lib/academicYear";
import { site } from "@/lib/site";
import { Markdown } from "@/components/Markdown";
import { YearTimeline } from "@/components/YearTimeline";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return getYearPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/academic-year/[slug]">): Promise<Metadata> {
  const p = getYearPage((await params).slug);
  if (!p) return {};
  return { title: { absolute: p.title }, description: p.description, alternates: { canonical: `/academic-year/${p.slug}` } };
}

export default async function YearPageRoute({ params }: PageProps<"/academic-year/[slug]">) {
  const { slug } = await params;
  const p = getYearPage(slug);
  if (!p) notFound();
  const url = `${site.url}/academic-year/${p.slug}`;
  const others = getYearPages().filter((x) => x.slug !== p.slug);
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.h1,
    description: p.description,
    url,
    mainEntityOfPage: url,
    datePublished: p.published,
    dateModified: p.updated,
    author: { "@type": "Organization", name: site.name, url: `${site.url}/about` },
    publisher: { "@id": `${site.url}/#business` },
    isPartOf: { "@type": "CollectionPage", "@id": `${site.url}/academic-year` },
    inLanguage: "en-US",
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      {p.faq?.length > 0 && <FaqJsonLd faq={p.faq} />}
      <BreadcrumbJsonLd items={[
        { name: "Home", url: site.url },
        { name: "The Lincoln academic year", url: `${site.url}/academic-year` },
        { name: p.h1, url },
      ]} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> ›{" "}
        <Link href="/academic-year" className="text-teal hover:underline">The Lincoln academic year</Link>
      </nav>
      <p className="kicker text-teal-deep mb-2">The Lincoln academic year</p>
      <h1 className="text-4xl font-semibold text-navy mb-4 leading-tight">{p.h1}</h1>
      <p className="text-xl text-navy mb-8">{p.answer}</p>

      <YearTimeline items={p.timeline} />

      <div className="prose-mc text-lg">
        <Markdown md={p.body} />

        {p.faq?.length > 0 && (
          <>
            <h2>Questions from Lincoln renters and parents</h2>
            {p.faq.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </>
        )}

        <h2>Sources</h2>
        <ul>
          {p.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} rel="noopener">{s.name}</a>, checked {fmtDate(s.checked)}
            </li>
          ))}
        </ul>

        <h2>Changelog</h2>
        <ul>
          {p.changelog.map((c) => (
            <li key={c.date + c.note}>{fmtDate(c.date)}: {c.note}</li>
          ))}
        </ul>
        <p className="text-mist text-base">
          Published {fmtDate(p.published)}
          {p.updated !== p.published ? `, updated ${fmtDate(p.updated)}` : ""}. Written by {site.name}, a locally owned and
          operated division of {site.parentBrand}.
        </p>
      </div>

      <div className="bg-ice border-2 border-teal rounded-2xl p-7 my-10 text-center">
        <p className="font-bold text-navy text-xl mb-3">Book a Lincoln appointment</p>
        <a href={site.phoneHref} className="inline-flex bg-teal text-white font-bold text-lg px-8 py-4 rounded-lg min-h-12 items-center">
          Call {site.phone}
        </a>
        <p className="text-mist mt-3">{site.hours.replace(/–/g, " to ")}</p>
      </div>

      <h2 className="text-2xl font-semibold text-navy mb-4">Elsewhere in the academic year</h2>
      <ul className="space-y-2 text-lg">
        {others.map((o) => (
          <li key={o.slug}>
            <Link href={`/academic-year/${o.slug}`} className="text-teal-deep underline font-semibold">{o.h1}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
