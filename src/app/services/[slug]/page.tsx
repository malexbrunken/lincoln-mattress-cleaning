import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, serviceBySlug } from "@/lib/services";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const s = serviceBySlug((await params).slug);
  if (!s) return {};
  return { title: s.title, description: s.description };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: site.url },
        { name: "Services", url: `${site.url}/services` },
        { name: s.name, url: `${site.url}/services/${s.slug}` },
      ]} />
      <ServiceJsonLd
        name={`${s.name} — Lincoln, NE`}
        description={s.description}
        url={`${site.url}/services/${s.slug}`}
      />
      {s.faq.length > 0 && <FaqJsonLd faq={s.faq} />}

      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> ›{" "}
        <Link href="/services" className="text-teal hover:underline">Services</Link> › {s.name}
      </nav>

      <h1 className="text-4xl md:text-5xl font-semibold text-navy mb-5 leading-tight">{s.h1}</h1>
      <p className="text-xl text-mist mb-8">{s.intro}</p>

      <div className="flex flex-wrap gap-3 mb-10">
        <a href={site.phoneHref} className="inline-flex bg-teal text-white font-bold text-lg px-7 py-4 rounded-lg min-h-12 items-center hover:bg-teal-bright transition-colors">
          Call {site.phone}
        </a>
        <Link href="/pricing" className="inline-flex border-2 border-navy text-navy font-bold text-lg px-7 py-4 rounded-lg min-h-12 items-center hover:bg-ice transition-colors">
          See pricing
        </Link>
      </div>

      <h2 className="text-2xl font-semibold text-navy mb-4">What&apos;s included</h2>
      <ul className="space-y-2.5 mb-10 rounded-2xl bg-ice border border-line p-6">
        {s.includes.map((i) => (
          <li key={i} className="flex gap-3 text-lg"><span className="text-teal font-bold">✓</span> {i}</li>
        ))}
      </ul>

      {s.detail.map((p, i) => (
        <p key={i} className="mb-5 text-lg leading-relaxed">{p}</p>
      ))}

      {s.faq.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-navy mt-10 mb-4">Questions we hear a lot</h2>
          <div className="divide-y divide-line border-y border-line mb-10">
            {s.faq.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-sans font-bold text-lg text-navy mb-1.5">{f.q}</h3>
                <p className="text-mist">{f.a}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <h2 className="text-2xl font-semibold text-navy mt-12 mb-4">Related services</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {others.map((o) => (
          <Link key={o.slug} href={`/services/${o.slug}`} className="rounded-xl border-2 border-line p-5 hover:border-teal transition-colors">
            <p className="font-bold text-navy">{o.name}</p>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-lg">
        Serving Lincoln and the surrounding 40 miles — see your town on our{" "}
        <Link href="/service-areas" className="text-teal-deep underline font-semibold">service-area pages</Link>, or read the{" "}
        <Link href="/guides/mattress-cleaning-lincoln-ne-guide" className="text-teal-deep underline font-semibold">
          full Lincoln mattress cleaning guide
        </Link>.
      </p>
    </div>
  );
}