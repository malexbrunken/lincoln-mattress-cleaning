import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNeighborhoodPage, getNeighborhoodPages } from "@/lib/neighborhoods";
import { fmtDate } from "@/lib/academicYear";
import { priceText } from "@/lib/prices";
import { site } from "@/lib/site";
import { Markdown } from "@/components/Markdown";
import { BreadcrumbJsonLd, FaqJsonLd, founder } from "@/components/JsonLd";

export function generateStaticParams() {
  return getNeighborhoodPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/neighborhoods/[slug]">): Promise<Metadata> {
  const p = getNeighborhoodPage((await params).slug);
  if (!p) return {};
  return { title: { absolute: p.title }, description: p.description, alternates: { canonical: `/neighborhoods/${p.slug}` } };
}

export default async function NeighborhoodGuide({ params }: PageProps<"/neighborhoods/[slug]">) {
  const { slug } = await params;
  const p = getNeighborhoodPage(slug);
  if (!p) notFound();
  const url = `${site.url}/neighborhoods/${p.slug}`;
  const others = getNeighborhoodPages().filter((x) => x.slug !== p.slug);
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.h1,
    description: p.description,
    url,
    mainEntityOfPage: url,
    datePublished: p.published,
    dateModified: p.updated,
    author: { "@id": founder["@id"], "@type": "Person", name: founder.name, url: founder.url, sameAs: founder.sameAs },
    publisher: { "@id": `${site.url}/#business` },
    isPartOf: { "@type": "CollectionPage", "@id": `${site.url}/neighborhoods` },
    about: { "@type": "Place", name: `${p.name}, Lincoln, Nebraska` },
    inLanguage: "en-US",
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      {p.faq?.length > 0 && <FaqJsonLd faq={p.faq} />}
      <BreadcrumbJsonLd items={[
        { name: "Home", url: site.url },
        { name: "Lincoln neighborhoods", url: `${site.url}/neighborhoods` },
        { name: p.h1, url },
      ]} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> ›{" "}
        <Link href="/knowledge-center" className="text-teal hover:underline">Knowledge Center</Link> ›{" "}
        <Link href="/neighborhoods" className="text-teal hover:underline">Lincoln neighborhoods</Link>
      </nav>
      <p className="kicker text-teal-deep mb-2">{p.label}</p>
      <h1 className="text-4xl font-semibold text-navy mb-6 leading-tight max-w-4xl">{p.h1}</h1>
      <p className="text-xl text-navy mb-10 max-w-3xl bg-ice rounded-2xl p-6">{p.answer}</p>

      <section aria-label="Housing profile" className="mb-10 max-w-4xl">
        <h2 className="text-2xl font-semibold text-navy mb-2">What housing does {p.name} have?</h2>
        <p className="text-mist text-base mb-4">U.S. Census Bureau, American Community Survey 2020–2024 5-year estimates for census tract {p.tracts}, beside Lincoln as a whole. Tract lines don&apos;t match neighborhood lines exactly.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-line rounded-2xl bg-white text-base">
            <thead className="bg-ice"><tr><th className="p-3">Measure</th><th className="p-3">{p.name}</th><th className="p-3">Lincoln</th></tr></thead>
            <tbody>
              {p.stats.map((s) => (
                <tr key={s.label} className="border-t border-line"><th scope="row" className="p-3 font-semibold text-navy">{s.label}</th><td className="p-3">{s.here}</td><td className="p-3 text-mist">{s.lincoln}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-label="Local history" className="mb-10 max-w-4xl border-l-8 border-teal bg-white rounded-r-2xl p-6">
        <h2 className="text-2xl font-semibold text-navy mb-3">What does the record say about {p.name}?</h2>
        <dl className="space-y-3 text-base">
          {p.facts.map((f) => (
            <div key={f.label}>
              <dt className="font-semibold text-navy">{f.label}</dt>
              <dd>{f.value} <a href={f.url} rel="noopener" className="text-teal-deep underline">({f.source})</a></dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="prose-mc text-lg max-w-3xl">
        <Markdown md={p.body} />
        <h2>What does a visit cost in {p.name}?</h2>
        <p>
          The same as anywhere in Lincoln: the first mattress is {priceText.first}, any size, with normal stains, pet odor and ordinary urine
          accidents included. Each additional full, queen or king in the same visit is {priceText.additionalLarge}, each additional kids bed
          (twin or full) is {priceText.additionalKids}, and underside treatment is {priceText.underside} per mattress. A severe or biohazard
          case carries a surcharge we quote before starting. Every visit includes UV-C light treatment, HEPA vacuuming and two checks: a
          moisture check after the job and the built-in bed mite sensor on our UV-C vacuum. 72-hour bedroom CO₂ testing is a separate
          optional service, priced by quote, and it isn&apos;t a medical test. See <Link href="/pricing">Lincoln pricing</Link> for every rate.
        </p>
      </div>

      {p.faq?.length > 0 && (
        <section aria-label="Questions" className="my-12 max-w-4xl">
          <h2 className="text-2xl font-semibold text-navy mb-5">What do {p.name} households ask?</h2>
          <div className="space-y-5">
            {p.faq.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold text-navy text-lg mb-1">{f.q}</h3>
                <p className="text-base">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="prose-mc text-lg max-w-3xl">
        <h2>Sources</h2>
        <ul>
          {p.sources.map((s) => (
            <li key={s.url + s.name}>
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
          {p.updated !== p.published ? `, updated ${fmtDate(p.updated)}` : ""}. Written by {site.name}, operated by {site.parentBrand}.
        </p>
      </div>

      <div className="bg-ice border-2 border-teal rounded-2xl p-7 my-10 text-center">
        <p className="font-bold text-navy text-xl mb-3">Book a visit in {p.name}</p>
        <a href={site.phoneHref} className="inline-flex bg-teal text-white font-bold text-lg px-8 py-4 rounded-lg min-h-12 items-center">
          Call {site.phone}
        </a>
        <p className="text-mist mt-3">{site.hours.replace(/–/g, " to ")}. {site.hoursNote}</p>
        <p className="mt-1"><Link href="/book" className="text-teal-deep font-semibold underline">Text or email instead</Link></p>
      </div>

      <h2 className="text-2xl font-semibold text-navy mb-4">Which other Lincoln neighborhoods have guides?</h2>
      <ul className="grid gap-3 sm:grid-cols-2 text-lg">
        {others.map((o) => (
          <li key={o.slug}>
            <Link href={`/neighborhoods/${o.slug}`} className="text-teal-deep underline font-semibold">{o.h1}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
