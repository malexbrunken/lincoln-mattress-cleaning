import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { towns, townBySlug } from "@/lib/towns";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return towns.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/service-areas/[slug]">): Promise<Metadata> {
  const t = townBySlug((await params).slug);
  if (!t) return {};
  return {
    title: `Mattress Cleaning ${t.name}, NE | Dry Vapor Steam Sanitation`,
    description: `Mattress cleaning and sanitization in ${t.name}, Nebraska. Low-moisture dry vapor steam instead of wet extraction, UV-C post-treatment, $299 first mattress. In-home service.`,
  };
}

export default async function TownPage({ params }: PageProps<"/service-areas/[slug]">) {
  const { slug } = await params;
  const t = townBySlug(slug);
  if (!t) notFound();
  const nearby = t.nearby
    .map((s) => townBySlug(s))
    .filter((x): x is NonNullable<typeof x> => !!x && x.slug !== slug);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: site.url },
        { name: "Service Areas", url: `${site.url}/service-areas` },
        { name: t.name, url: `${site.url}/service-areas/${t.slug}` },
      ]} />
      <nav aria-label="Breadcrumb" className="text-mist mb-4 text-sm">
        <Link href="/" className="text-teal hover:underline">Home</Link> ›{" "}
        <Link href="/service-areas" className="text-teal hover:underline">Service Areas</Link> › {t.name}
      </nav>

      <h1 className="text-4xl md:text-5xl font-semibold text-navy mb-5 leading-tight">{t.headline}</h1>
      <p className="text-xl text-mist mb-8">{t.intro}</p>

      <div className="flex flex-wrap gap-3 mb-10">
        <a href={site.phoneHref} className="inline-flex bg-teal text-white font-bold text-lg px-7 py-4 rounded-lg min-h-12 items-center hover:bg-teal-bright transition-colors">
          Call {site.phone} — {t.name} scheduling
        </a>
        <Link href="/pricing" className="inline-flex border-2 border-navy text-navy font-bold text-lg px-7 py-4 rounded-lg min-h-12 items-center hover:bg-ice transition-colors">
          Pricing
        </Link>
      </div>

      {t.local.map((p, i) => (
        <p key={i} className="mb-5 text-lg leading-relaxed">{p}</p>
      ))}

      <h2 className="text-2xl font-semibold text-navy mb-4">Where we work around {t.name}</h2>
      <ul className="space-y-2 mb-10 rounded-2xl bg-ice border border-line p-6">
        {t.anchors.map((a) => (
          <li key={a} className="flex gap-3"><span className="text-teal font-bold">•</span> {a}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-navy mb-4">Our mattress services</h2>
      <ul className="space-y-2 mb-10 text-lg">
        <li>
          🛏️{" "}
          <Link href="/services/mattress-sanitization" className="text-teal-deep underline font-semibold">
            Mattress sanitization
          </Link>{" "}
          — $299 first mattress, any size
        </li>
        <li>
          💧{" "}
          <Link href="/services/dry-vapor-steam-vs-extraction" className="text-teal-deep underline font-semibold">
            Dry vapor steam vs. wet extraction
          </Link>{" "}
          — what actually differs
        </li>
        <li>
          🌬️{" "}
          <Link href="/services/dust-mite-treatment" className="text-teal-deep underline font-semibold">
            Dust mite &amp; allergen reservoir reduction
          </Link>
        </li>
        <li>
          🐾{" "}
          <Link href="/services/pet-urine-odor-treatment" className="text-teal-deep underline font-semibold">
            Pet urine &amp; odor treatment
          </Link>{" "}
          — enzymatic, ATP verified
        </li>
        <li>
          🔆{" "}
          <Link href="/services/uv-c-post-treatment" className="text-teal-deep underline font-semibold">
            UV-C post-treatment
          </Link>{" "}
          — included in every visit
        </li>
        <li>
          📈{" "}
          <Link href="/services/co2-bedroom-testing" className="text-teal-deep underline font-semibold">
            72-hour bedroom CO₂ testing
          </Link>{" "}
          — $199
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-navy mb-4">Also serving nearby</h2>
      <p className="mb-10 text-lg">
        {nearby.map((n, i) => (
          <span key={n.slug}>
            <Link href={`/service-areas/${n.slug}`} className="text-teal-deep underline font-semibold">
              Mattress cleaning in {n.name}
            </Link>
            {i < nearby.length - 1 ? " · " : ""}
          </span>
        ))}
      </p>

      <div className="bg-navy text-white rounded-2xl p-7 md:p-9 texture-grain">
        <h2 className="font-display text-2xl font-semibold mb-3">
          Ready to book a {t.name} appointment?
        </h2>
        <p className="text-white/75 mb-6">
          No deposit required. Tell us how many mattresses and what you are seeing, and we will confirm the price
          before we schedule.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={site.phoneHref} className="inline-flex bg-teal hover:bg-teal-bright text-white font-bold px-7 py-4 rounded-xl min-h-12 items-center">
            Call {site.phone}
          </a>
          <Link href="/contact" className="inline-flex border border-white/50 hover:bg-white hover:text-navy text-white font-bold px-7 py-4 rounded-xl min-h-12 items-center transition-colors">
            Book online
          </Link>
        </div>
      </div>
    </div>
  );
}