import Image from "next/image";
import Link from "next/link";
import { site, packages, comparison } from "@/lib/site";
import { services } from "@/lib/services";
import { towns } from "@/lib/towns";
import { heroImage, jobImages, beforeAfterPair } from "@/lib/images";
import { QuoteCalc } from "@/components/QuoteCalc";
import { FaqJsonLd } from "@/components/JsonLd";
import {
  IconDropletSlash,
  IconGauge,
  IconMattress,
  IconMapPin,
  IconShield,
  IconSteam,
  IconThermometer,
  IconUVC,
} from "@/components/Icons";

const standards = [
  {
    icon: IconDropletSlash,
    title: "Low-moisture by design",
    text: "Dry vapor steam at roughly 5% moisture, against 40–60% for wet extraction. No soaked foam core, no 48-hour wait.",
  },
  {
    icon: IconMattress,
    title: "Built for beds, not floors",
    text: "Mattresses are our only business. Not an add-on line item on a carpet-cleaning invoice.",
  },
  {
    icon: IconUVC,
    title: "Verified, then shown to you",
    text: "Pre- and post-treatment surface readings on our UV-C vacuum, and we photograph them.",
  },
];

const process = [
  ["01", "Inspect", "We read the law tag, assess fabric condition and construction, and look at the bedroom environment before anything is applied."],
  ["02", "Isolate", "Boot covers on, tools staged cleanly, your floor and bedding protected. The room is contained before treatment begins."],
  ["03", "Sanitize", "Dry vapor steam in overlapping passes across the sleep surface, with calibrated temperature for your mattress type."],
  ["04", "Detail", "Seams, quilting channels, piping, and the side edges — the zones an upholstery wand never actually reaches."],
  ["05", "Reset", "UV-C post-treatment, a verification reading, tools broken down in order, and the room left as we found it."],
];

const homeFaq = [
  {
    q: "How much does mattress cleaning cost in Lincoln?",
    a: "The first mattress is $299, any size. Each additional mattress in the same visit is $179 for twin or smaller and $199 for full, queen, or king. Add-ons — underside sanitation, urine or blood treatment, pet odor treatment, and 72-hour bedroom CO₂ testing — are published on our pricing page.",
  },
  {
    q: "Where in Nebraska do you work?",
    a: "Lincoln and the surrounding 40 miles, including Waverly, Hickman, Bennet, Eagle, Palmyra, Firth, Malcolm, Raymond, Seward, Crete, Wahoo, Ashland, and Gretna. The Omaha metro is covered by our sister site, and we can arrange a Lincoln-route appointment on request.",
  },
  {
    q: "Do you use chemicals or leave anything behind?",
    a: "No chemical residue. The mattress process is dry vapor steam plus UV-C post-treatment. Nothing is left in the foam for you to sleep against, which is why it is safe for kids, pets, and chemical-sensitive households.",
  },
  {
    q: "Is this pest control?",
    a: "No. If you have an active bed bug infestation, you need a licensed pest-control professional and we will tell you that on the phone. What we do is treat the mattress surface and remove the debris and allergen reservoirs that make a mattress uncomfortable to sleep on afterwards.",
  },
];

export default function HomePage() {
  const featured = services.slice(0, 6);

  return (
    <>
      <FaqJsonLd faq={homeFaq} />

      {/* Cinematic hero */}
      <section className="relative min-h-[720px] flex items-end overflow-hidden bg-navy text-white">
        <Image
          src={heroImage.url}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,24,34,.96)_0%,rgba(8,24,34,.80)_44%,rgba(8,24,34,.20)_78%),linear-gradient(0deg,rgba(8,22,32,.78)_0%,transparent_48%)]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 pb-16 pt-24 md:pb-24">
          <div className="max-w-3xl">
            <p className="kicker text-teal-bright mb-5">
              A {site.parentBrand} service · Lincoln, Nebraska
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[.98] text-balance mb-7">
              Mattress cleaning,<br />held to a clinical standard.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-9">
              Lincoln&apos;s mattress-only service. Low-moisture dry vapor steam instead of carpet-cleaning
              extraction — so your mattress is sanitized, not soaked.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={site.phoneHref}
                className="bg-teal hover:bg-teal-bright text-white font-bold px-7 py-4 rounded-xl min-h-12 flex items-center shadow-xl shadow-black/30 transition-colors"
              >
                Call {site.phone}
              </a>
              <Link
                href="/pricing"
                className="border border-white/60 bg-black/15 backdrop-blur-sm hover:bg-white hover:text-navy text-white font-bold px-7 py-4 rounded-xl min-h-12 flex items-center transition-colors"
              >
                See published pricing
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/65 tracking-wide">
              FIRST MATTRESS $299 · ANY SIZE · UV-C POST-TREATMENT INCLUDED · 7 DAYS A WEEK
            </p>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-ice-2 border-b border-line">
        <div className="max-w-6xl mx-auto px-4 py-8 grid gap-7 md:grid-cols-3">
          {standards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 items-start">
              <span className="text-teal-deep mt-1"><Icon className="w-7 h-7" /></span>
              <div>
                <h2 className="font-sans text-base font-bold tracking-wide mb-0.5">{title}</h2>
                <p className="text-sm text-mist leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why standard mattress cleaning falls short */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid gap-12 lg:grid-cols-[.9fr_1.1fr] items-center">
        <div>
          <p className="kicker text-teal-deep mb-4">The upgrade</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Most mattress cleaning was built by carpet cleaners.
          </h2>
          <p className="text-xl text-mist leading-relaxed mb-6">
            In Lincoln, &ldquo;mattress cleaning&rdquo; usually means a carpet extractor with an upholstery
            wand — hot water injected into a surface that stays warm and humid for eight hours a night. The
            foam holds that moisture long after the truck pulls away.
          </p>
          <p className="text-xl text-mist leading-relaxed mb-8">
            We treat your bed as the recovery surface it is: heat without the water, a protocol built around
            mattresses, and verification before we leave.
          </p>
          <Link
            href="/services/dry-vapor-steam-vs-extraction"
            className="inline-flex items-center gap-2 text-teal-deep font-bold border-b-2 border-teal pb-1 hover:text-navy transition-colors"
          >
            See the method comparison <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-navy/20">
            <Image
              src={jobImages[2].url}
              alt={jobImages[2].alt}
              fill
              sizes="(max-width:1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-3 md:-left-8 bg-navy text-white rounded-2xl p-5 shadow-xl max-w-[270px] texture-grain">
            <IconSteam className="w-7 h-7 text-teal-bright mb-2" />
            <p className="font-display text-xl leading-tight">Heat, not water.</p>
            <p className="text-sm text-white/70 mt-1">
              Visible vapor doing the work — while the foam core stays dry.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-navy text-white texture-grain py-20 md:py-28">
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <p className="kicker text-teal-bright mb-4">Side by side</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">
              Standard mattress cleaning vs. our protocol
            </h2>
            <p className="text-xl text-white/70">
              We are not the cheapest mattress service in Lincoln. We are the one that treats the surface you
              sleep on differently — and can show you why.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/15">
            <table className="w-full text-left text-[15px] min-w-[640px]">
              <thead className="bg-white/5">
                <tr>
                  <th className="p-4 font-semibold text-white/60 text-xs uppercase tracking-[0.14em]"> </th>
                  <th className="p-4 font-semibold text-white/70 text-xs uppercase tracking-[0.14em]">
                    Standard provider
                  </th>
                  <th className="p-4 font-semibold text-teal-bright text-xs uppercase tracking-[0.14em]">
                    {site.parentBrand}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.slice(1).map(([label, standard, ours]) => (
                  <tr key={label} className="border-t border-white/10 align-top">
                    <th scope="row" className="p-4 font-sans font-bold text-white/90">{label}</th>
                    <td className="p-4 text-white/65">{standard}</td>
                    <td className="p-4 text-white">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm text-white/55">
            Method descriptions reflect how the two processes work. Exact moisture percentages vary with
            equipment, technique, and mattress construction.
          </p>
        </div>
      </section>

      {/* Before / after with verification */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl mb-12">
          <p className="kicker text-teal-deep mb-4">Real jobs, unedited</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">
            We photograph the evidence, not just the finished mattress.
          </h2>
          <p className="text-xl text-mist">
            Every one of these images is from an actual appointment — including the readings on the machine
            that measures the surface before and after treatment.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2 mb-10">
          {[beforeAfterPair.before, beforeAfterPair.after].map((img) => (
            <figure key={img.id} className="rounded-2xl overflow-hidden border border-line bg-white">
              <div className="relative aspect-[4/3]">
                <Image src={img.url} alt={img.alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                <span
                  className={`absolute top-4 left-4 font-bold text-xs uppercase tracking-[0.18em] px-3 py-1.5 rounded-full ${
                    img.tag === "before" ? "bg-navy text-white" : "bg-teal text-white"
                  }`}
                >
                  {img.tag}
                </span>
              </div>
              <figcaption className="p-5 text-[15px] text-mist">{img.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="grid gap-7 md:grid-cols-[1fr_.8fr] items-center bg-ice rounded-3xl border border-line p-7 md:p-9">
          <div>
            <IconGauge className="w-8 h-8 text-teal-deep mb-3" />
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              A high reading before. Zero after.
            </h3>
            <p className="text-mist">
              Our UV-C mattress vacuum carries a surface reader. On this job it showed a high score on the
              pre-treatment surface; after the dry vapor steam pass and UV-C treatment, the same machine read{" "}
              <strong className="text-navy">0</strong>. You get both readings — before and after — on request, on
              every appointment.
            </p>
          </div>
          <figure className="rounded-2xl overflow-hidden border border-line bg-white">
            <div className="relative aspect-[4/3]">
              <Image
                src={jobImages[5].url}
                alt={jobImages[5].alt}
                fill
                sizes="(max-width:768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="p-4 text-sm text-mist">{jobImages[5].caption}</figcaption>
          </figure>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ice-2 border-y border-line py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <p className="kicker text-teal-deep mb-4">The protocol</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">
              Five phases, in this order, every time.
            </h2>
            <p className="text-xl text-mist">
              The appointment is shorter than a carpet-cleaning route because it is precise, not rushed.
            </p>
          </div>
          <ol className="grid gap-6 md:grid-cols-5">
            {process.map(([n, title, text]) => (
              <li key={n} className="bg-white rounded-2xl border border-line p-6 ridge">
                <span className="font-display text-3xl text-teal leading-none block mb-3">{n}</span>
                <h3 className="font-sans text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-mist leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl mb-12">
          <p className="kicker text-teal-deep mb-4">What we do</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">
            One surface, treated properly.
          </h2>
          <p className="text-xl text-mist">
            Everything below is a mattress service. We do not clean carpets, we do not clean upholstery, and we
            do not clean RVs — this is the whole business.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <article key={s.slug} className="bg-white rounded-2xl border border-line p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 leading-snug">
                <Link href={`/services/${s.slug}`} className="hover:text-teal-deep transition-colors">
                  {s.name}
                </Link>
              </h3>
              <p className="text-mist text-[15px] leading-relaxed mb-5 flex-1">{s.intro}</p>
              <Link href={`/services/${s.slug}`} className="font-bold text-teal-deep hover:text-navy transition-colors text-[15px]">
                Details →
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/services" className="font-bold text-teal-deep hover:text-navy">
            See all {services.length} services →
          </Link>
        </div>
      </section>

      {/* Pricing + calculator */}
      <section className="bg-ice py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <p className="kicker text-teal-deep mb-4">Published pricing</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">
              No hidden fees. No size-based upsells on your first mattress.
            </h2>
            <p className="text-xl text-mist">
              One clinical-standard rate, because the surface you sleep on deserves better than guesswork.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.35fr_.8fr] items-start">
            <div className="grid gap-5">
              {packages.map((p) => (
                <article
                  key={p.name}
                  className={`ridge bg-white rounded-2xl border p-6 md:p-7 shadow-sm ${
                    p.popular ? "border-teal shadow-lg shadow-teal/10" : "border-line"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-teal-deep"><IconMattress /></span>
                        <h3 className="text-2xl md:text-3xl font-semibold">{p.name}</h3>
                        {p.popular && (
                          <span className="kicker text-[10px] bg-teal text-white rounded-full px-3 py-1">
                            Most booked
                          </span>
                        )}
                      </div>
                      <p className="text-mist leading-relaxed">{p.blurb}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-4xl font-semibold text-teal-deep">{p.price}</p>
                      <p className="text-xs text-mist mt-1 max-w-[190px]">{p.priceNote}</p>
                    </div>
                  </div>
                  <ul className="mt-5 pt-5 border-t border-line grid gap-x-5 gap-y-2 sm:grid-cols-2 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2"><span className="text-teal font-bold">—</span>{f}</li>
                    ))}
                  </ul>
                </article>
              ))}
              <Link href="/pricing" className="font-bold text-teal-deep hover:text-navy text-center py-2">
                Compare every add-on and inclusion →
              </Link>
            </div>
            <div className="lg:sticky lg:top-28"><QuoteCalc /></div>
          </div>
        </div>
      </section>

      {/* Winter / seasonal local angle */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-24 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <IconThermometer className="w-8 h-8 text-teal-deep mb-3" />
          <p className="kicker text-teal-deep mb-4">Why Lincoln, specifically</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Nebraska bedrooms are closed rooms eight months a year.
          </h2>
          <p className="text-lg text-mist leading-relaxed mb-5">
            A bedroom sealed against a Nebraska January stays warm and humid every night, which is exactly the
            condition dust-mite populations and odors favor. By the time spring arrives, most people are
            sleeping on a reservoir that has been building since October — and blaming the season for morning
            congestion.
          </p>
          <p className="text-lg text-mist leading-relaxed mb-8">
            Add Lincoln&apos;s student rental turnover, where a mattress passes between tenants with no service
            history at all, and it becomes clear why this market needs a mattress-only provider rather than
            another add-on line item.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides/mattress-cleaning-lincoln-ne-guide" className="bg-navy text-white font-bold px-6 py-3.5 rounded-xl min-h-12 flex items-center hover:bg-navy-2 transition-colors">
              Read the Lincoln mattress guide
            </Link>
            <Link href="/service-areas/lincoln" className="border-2 border-navy text-navy font-bold px-6 py-3.5 rounded-xl min-h-12 flex items-center hover:bg-ice transition-colors">
              Lincoln service details
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-navy/15">
          <Image
            src={jobImages[6].url}
            alt={jobImages[6].alt}
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-ice-2 border-y border-line py-16">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-[1fr_1.4fr] items-center">
          <div>
            <IconMapPin className="w-8 h-8 text-teal-deep mb-3" />
            <p className="kicker text-teal-deep mb-3">Coverage</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Lincoln and 40 miles around it.</h2>
            <p className="text-mist mt-3">{site.serviceRadius}</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {towns.map((t) => (
              <Link
                key={t.slug}
                href={`/service-areas/${t.slug}`}
                className="bg-paper border border-line rounded-full px-4 py-2 text-sm font-semibold hover:border-teal hover:text-teal-deep transition-colors"
              >
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-20 md:py-24">
        <p className="kicker text-teal-deep mb-3">Good questions</p>
        <h2 className="text-4xl font-semibold mb-8">Before you book</h2>
        <div className="divide-y divide-line border-y border-line">
          {homeFaq.map((f) => (
            <div key={f.q} className="py-6">
              <h3 className="font-sans font-bold text-lg mb-2">{f.q}</h3>
              <p className="text-mist">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-navy text-white texture-grain">
        <div className="absolute right-0 inset-y-0 w-1/2 opacity-20 bg-[radial-gradient(circle_at_center,var(--teal)_0%,transparent_68%)]" />
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <IconShield className="w-12 h-12 text-teal-bright mx-auto mb-5" />
          <p className="kicker text-teal-bright mb-4">Same-week appointments</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-5">
            You spend a third of your life there.
          </h2>
          <p className="text-xl text-white/75 mb-8">
            No deposit required. Your exact quote takes under a minute on the phone.
          </p>
          <a
            href={site.phoneHref}
            className="inline-flex bg-teal hover:bg-teal-bright text-white font-bold text-lg px-8 py-4 rounded-xl min-h-12 items-center transition-colors shadow-xl shadow-black/30"
          >
            Call {site.phone}
          </a>
        </div>
      </section>
    </>
  );
}