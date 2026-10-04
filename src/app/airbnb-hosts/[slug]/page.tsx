import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHostPage, getHostPages } from "@/lib/strHosts";
import { fmtDate } from "@/lib/academicYear";
import { site } from "@/lib/site";
import { Markdown } from "@/components/Markdown";
import { HostChecklist, HostRules } from "@/components/HostRules";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return getHostPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/airbnb-hosts/[slug]">): Promise<Metadata> {
  const p = getHostPage((await params).slug);
  if (!p) return {};
  return { title: { absolute: p.title }, description: p.description, alternates: { canonical: `/airbnb-hosts/${p.slug}` } };
}

export default async function HostPageRoute({ params }: PageProps<"/airbnb-hosts/[slug]">) {
  const { slug } = await params;
  const p = getHostPage(slug);
  if (!p) notFound();
  const url = `${site.url}/airbnb-hosts/${p.slug}`;
  const others = getHostPages().filter((x) => x.slug !== p.slug);
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
    isPartOf: { "@type": "CollectionPage", "@id": `${site.url}/airbnb-hosts` },
    inLanguage: "en-US",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      {p.faq?.length > 0 && <FaqJsonLd faq={p.faq} />}
      <BreadcrumbJsonLd items={[
        { name: "Home", url: site.url },
        { name: "Lincoln Airbnb hosts", url: `${site.url}/airbnb-hosts` },
        { name: p.h1, url },
      ]} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> ›{" "}
        <Link href="/airbnb-hosts" className="text-teal hover:underline">Lincoln Airbnb hosts</Link>
      </nav>
      <p className="kicker text-teal-deep mb-2">Lincoln host guides</p>
      <h1 className="text-4xl font-semibold text-navy mb-4 leading-tight max-w-4xl">{p.h1}</h1>
      <p className="text-xl text-navy mb-8 max-w-4xl">{p.answer}</p>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="lg:order-last">
          <HostRules rules={p.rules} />
        </div>
        <div>
          <HostChecklist items={p.checklist} />
          <div className="prose-mc text-lg">
            <Markdown md={p.body} />
            {p.faq?.length > 0 && (
              <>
                <h2>Host questions</h2>
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
              {p.updated !== p.published ? `, updated ${fmtDate(p.updated)}` : ""}. Written by {site.name}, operated by {site.parentBrand}.
            </p>
          </div>
          <div className="bg-ice border-2 border-teal rounded-2xl p-7 my-10 text-center">
            <p className="font-bold text-navy text-xl mb-3">Book a turnover cleaning in Lincoln</p>
            <a href={site.phoneHref} className="inline-flex bg-teal text-white font-bold text-lg px-8 py-4 rounded-lg min-h-12 items-center">
              Call {site.phone}
            </a>
            <p className="text-mist mt-3">{site.hours.replace(/–/g, " to ")}</p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-navy mb-4">More Lincoln host guides</h2>
      <ul className="grid gap-3 sm:grid-cols-2 text-lg">
        {others.map((o) => (
          <li key={o.slug}>
            <Link href={`/airbnb-hosts/${o.slug}`} className="text-teal-deep underline font-semibold">{o.h1}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
