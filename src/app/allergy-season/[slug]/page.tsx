import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllergyPage, getAllergyPages } from "@/lib/allergySeason";
import { fmtDate } from "@/lib/academicYear";
import { site } from "@/lib/site";
import { Markdown } from "@/components/Markdown";
import { BreadcrumbJsonLd, FaqJsonLd, founder } from "@/components/JsonLd";

export function generateStaticParams() {
  return getAllergyPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/allergy-season/[slug]">): Promise<Metadata> {
  const p = getAllergyPage((await params).slug);
  if (!p) return {};
  return { title: { absolute: p.title }, description: p.description, alternates: { canonical: `/allergy-season/${p.slug}` } };
}

export default async function AllergyGuide({ params }: PageProps<"/allergy-season/[slug]">) {
  const { slug } = await params;
  const p = getAllergyPage(slug);
  if (!p) notFound();
  const url = `${site.url}/allergy-season/${p.slug}`;
  const others = getAllergyPages().filter((x) => x.slug !== p.slug);
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
    isPartOf: { "@type": "CollectionPage", "@id": `${site.url}/allergy-season` },
    inLanguage: "en-US",
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      {p.faq?.length > 0 && <FaqJsonLd faq={p.faq} />}
      <BreadcrumbJsonLd items={[
        { name: "Home", url: site.url },
        { name: "Lincoln allergy season", url: `${site.url}/allergy-season` },
        { name: p.h1, url },
      ]} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> ›{" "}
        <Link href="/allergy-season" className="text-teal hover:underline">Lincoln allergy season</Link>
      </nav>
      <p className="kicker text-teal-deep mb-2">{p.label}</p>
      <h1 className="text-4xl font-semibold text-navy mb-6 leading-tight max-w-4xl">{p.h1}</h1>

      <ul className="grid gap-4 sm:grid-cols-3 mb-8" aria-label="Key figures">
        {p.tiles.map((t) => (
          <li key={t.label} className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="block text-3xl font-bold text-teal-deep">{t.value}</span>{" "}
            <span className="block text-mist text-sm mt-1">{t.label}</span>
          </li>
        ))}
      </ul>

      <p className="text-xl text-navy mb-10 max-w-3xl bg-ice rounded-2xl p-6">{p.answer}</p>

      <div className="prose-mc text-lg max-w-3xl">
        <Markdown md={p.body} />
      </div>

      {p.steps?.length > 0 && (
        <section aria-label="Steps" className="my-12">
          <h2 className="text-2xl font-semibold text-navy mb-5">What steps help a Lincoln bedroom?</h2>
          <ol className="grid gap-4 sm:grid-cols-2">
            {p.steps.map((s, i) => (
              <li key={s.title} className="border-2 border-teal/40 rounded-2xl p-5 flex gap-4">
                <span className="shrink-0 w-10 h-10 rounded-full bg-navy text-white font-bold grid place-items-center">{i + 1}</span>
                <span>
                  <strong className="block text-navy">{s.title}</strong>{" "}
                  <span className="text-base text-mist">{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {p.faq?.length > 0 && (
        <section aria-label="Questions" className="my-12">
          <h2 className="text-2xl font-semibold text-navy mb-5">What do Lincoln households ask?</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {p.faq.map((f) => (
              <div key={f.q} className="bg-paper border border-line rounded-2xl p-5">
                <h3 className="font-semibold text-navy text-lg mb-2">{f.q}</h3>
                <p className="text-base">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="prose-mc text-lg max-w-3xl">
        <h2>Source notes</h2>
        <ol>
          {p.sources.map((s) => (
            <li key={s.url + s.name}>
              <a href={s.url} rel="noopener">{s.name}</a>, checked {fmtDate(s.checked)}
            </li>
          ))}
        </ol>
        <h2>Changelog</h2>
        <ul>
          {p.changelog.map((c) => (
            <li key={c.date + c.note}>{fmtDate(c.date)}: {c.note}</li>
          ))}
        </ul>
        <p className="text-mist text-base">
          Published {fmtDate(p.published)}
          {p.updated !== p.published ? `, updated ${fmtDate(p.updated)}` : ""}. Written by {site.name}, operated by {site.parentBrand}. General information, not medical advice.
        </p>
      </div>

      <div className="border-l-8 border-teal bg-white rounded-r-2xl p-6 my-10 max-w-3xl">
        <p className="font-bold text-navy text-xl mb-2">Prices and what a Lincoln visit includes</p>
        <p className="mb-4"><Link href="/allergy-season#visit" className="text-teal-deep underline font-semibold">See the allergy season hub</Link> or call {site.phone}, {site.hours.replace(/–/g, " to ")}.</p>
      </div>

      <h2 className="text-2xl font-semibold text-navy mb-4">Which other allergy season guides help?</h2>
      <ul className="grid gap-3 sm:grid-cols-2 text-lg">
        {others.map((o) => (
          <li key={o.slug}>
            <Link href={`/allergy-season/${o.slug}`} className="text-teal-deep underline font-semibold">{o.h1}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
