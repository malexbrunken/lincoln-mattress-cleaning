import type { Metadata } from "next";
import { updatedFor } from "@/lib/dates";
import Image from "next/image";
import Link from "next/link";
import { site, packages, comparison, plainAnswer } from "@/lib/site";
import { services } from "@/lib/services";
import { towns } from "@/lib/towns";
import { heroImage, featuredPair, imageById } from "@/lib/images";
import { QuoteCalc } from "@/components/QuoteCalc";
import { IncludedTable } from "@/components/Pricing";
import { priceText } from "@/lib/prices";
import { FaqJsonLd, WebPageJsonLd } from "@/components/JsonLd";
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

const homeTitle = "Mattress Cleaning & Sanitation in Lincoln, NE";
const homeDescription = `Mattress sanitation in Lincoln, NE by Sleep Sanitation: dry vapor steam, UV-C light and HEPA vacuuming. ${priceText.first} first mattress, any size.`;

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  openGraph: { title: homeTitle, description: homeDescription, url: site.url },
};

const standards = [
  {
    icon: IconDropletSlash,
    title: "Low-moisture by design",
    text: "Dry vapor steam, and our Vapor Clean machines are rated by their maker at 5 to 6% moisture content. No soaked foam core.",
  },
  {
    icon: IconMattress,
    title: "Built for beds, not floors",
    text: "Mattresses are our only business, and every visit is a dedicated mattress appointment.",
  },
  {
    icon: IconUVC,
    title: "Gloves, booties, clean gear",
    text: "Technicians wear gloves and shoe booties, and every piece of equipment is disinfected between jobs.",
  },
];

const process = [
  ["01", "Inspect", "We read the law tag, assess fabric condition and construction, and look at the bedroom environment before anything is applied."],
  ["02", "Prepare", "Gloves and shoe booties on, with equipment disinfected between jobs."],
  ["03", "Sanitize", "Dry vapor steam in overlapping passes across the sleep surface, with calibrated temperature for your mattress type."],
  ["04", "Detail", "Seams, quilting channels, piping, and the side edges, each with its own passes."],
  ["05", "Reset", "UV-C light treatment, tools broken down in order, and the room left as we found it."],
];

const homeFaq = [
  {
    q: "What is mattress sanitation, and how is it different from carpet cleaning?",
    a: "Mattress sanitation is a cleaning visit built around the mattress itself. We use dry vapor steam, which carries heat with very little water, then HEPA vacuuming and UV-C light treatment across the top surface, seams and edges, with enzyme treatment on urine spots. Carpet cleaning is set up for carpets and rugs. Mattresses are our only business.",
  },
  {
    q: "How much does mattress cleaning cost in Lincoln?",
    a: `The first mattress is ${priceText.first}, any size, with normal stains, pet odor and ordinary urine accidents included. Each additional full, queen or king mattress is ${priceText.additionalLarge}, and each additional kids bed (twin/full) is ${priceText.additionalKids}. Severe or biohazard contamination carries a custom surcharge, quoted before any work starts.`,
  },
  {
    q: "What areas do you serve?",
    a: "Lincoln and Lancaster County, including Waverly, Hickman, Bennet, Firth, Malcolm and Raymond, plus Eagle, Palmyra, Seward, Crete, Wahoo and Ashland. Call and we will confirm your address before you book.",
  },
  {
    q: "How long does it take?",
    a: "It depends on how many mattresses you have and their condition, and we confirm your appointment time when you book. Afterwards, leave the bed unmade until the mattress is dry to the touch. We do a moisture check after the job before we leave.",
  },
  {
    q: "Do you use chemicals or leave anything behind?",
    a: "No chemical residue. The mattress process is dry vapor steam, HEPA vacuuming and UV-C light treatment, so nothing is left in the foam for you to sleep against. Enzyme treatment is used only on urine spots, and we tell you before we apply it.",
  },
  {
    q: "What checks come with every visit? Is CO₂ testing included?",
    a: "Every visit includes two checks: a moisture check after the job and the built-in bed mite sensor on our UV-C vacuum. 72-hour bedroom CO₂ testing is not included: it is a separate optional service, booked on its own or added to a visit, priced by quote, and it is not a medical test.",
  },
  {
    q: "Should I hire a carpet cleaner or a mattress specialist for my mattress?",
    a: "A carpet cleaner for carpet and rugs, a mattress specialist for the bed. A carpet company's mattress add-on is typically done with the same hot-water extraction used on floors, and wet-extraction carpet cleaners can void some mattress warranties. Lincoln Mattress Cleaning is mattress-only; our guide to hiring a mattress specialist or a carpet cleaner in Lincoln has the side-by-side.",
  },
  {
    q: "Is this pest control?",
    a: "No. If you have an active bed bug infestation, you need a licensed pest-control professional and we will tell you that on the phone. What we do is treat the mattress surface and kill bed mites (house dust mites) with steam heat and lift the debris with HEPA vacuuming. Bed bugs are a separate problem for pest control.",
  },
];

export default function HomePage() {
  const featured = services.slice(0, 6);

  return (
    <>
      <WebPageJsonLd name="Lincoln Mattress Cleaning" path="" dateModified={updatedFor("")} type="WebPage" />
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
              Mattress cleaning &amp; sanitation in Lincoln, NE.
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-9">{plainAnswer}</p>
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
              FIRST MATTRESS {priceText.first} · ANY SIZE · STAINS, PET ODOR &amp; ORDINARY URINE INCLUDED · MON–FRI 9AM–6PM
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
                <h3 className="font-sans text-base font-bold tracking-wide mb-0.5">{title}</h3>
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
            What should you ask before booking a mattress cleaning?
          </h2>
          <p className="text-xl text-mist leading-relaxed mb-6">
            Ask what equipment touches the mattress, how much water goes into it, and what is left in the foam
            afterwards. Those answers decide how a mattress comes through a cleaning.
          </p>
          <p className="text-xl text-mist leading-relaxed mb-8">
            We treat your bed as the recovery surface it is: heat without the water, a process built around
            mattresses, and gloves, shoe booties and disinfected equipment on every job.
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
              src={imageById("steam-fog").url}
              alt={imageById("steam-fog").alt}
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
              How does dry vapor steam compare with wet extraction?
            </h2>
            <p className="text-xl text-white/70">
              We are not the cheapest mattress service in Lincoln. Here is how the two methods differ, so you can
              ask the right questions of any provider.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/15">
            <table className="w-full text-left text-[15px] min-w-[640px]">
              <thead className="bg-white/5">
                <tr>
                  <th className="p-4 font-semibold text-white/60 text-xs uppercase tracking-[0.14em]"> </th>
                  <th className="p-4 font-semibold text-white/70 text-xs uppercase tracking-[0.14em]">
                    Wet extraction
                  </th>
                  <th className="p-4 font-semibold text-teal-bright text-xs uppercase tracking-[0.14em]">
                    Our dry vapor steam
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

      {/* Mattress photos (decorative) */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl mb-12">
          <p className="kicker text-teal-deep mb-4">Stains, odor and foam</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">
            What does the service treat?
          </h2>
          <p className="text-xl text-mist">
            Normal stains, pet odor and ordinary urine accidents are included in the {priceText.first} first-mattress
            price, on foam, hybrid and innerspring builds.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2 mb-10">
          {featuredPair.map((img) => (
            <figure key={img.id} className="rounded-2xl overflow-hidden border border-line bg-white">
              <div className="relative aspect-[4/3]">
                <Image src={img.url} alt={img.alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <figcaption className="p-5 text-[15px] text-mist">{img.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="grid gap-7 md:grid-cols-[1fr_.8fr] items-center bg-ice rounded-3xl border border-line p-7 md:p-9">
          <div>
            <IconGauge className="w-8 h-8 text-teal-deep mb-3" />
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">Clean gear, every job.</h3>
            <p className="text-mist">
              Technicians wear gloves and shoe booties in your home, and the steam system, vacuum and tools are
              disinfected between jobs. The last step on the mattress is UV-C light treatment, included in the
              published price.
            </p>
          </div>
          <figure className="rounded-2xl overflow-hidden border border-line bg-white">
            <div className="relative aspect-[4/3]">
              <Image
                src={imageById("kit").url}
                alt={imageById("kit").alt}
                fill
                sizes="(max-width:768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="p-4 text-sm text-mist">{imageById("kit").caption}</figcaption>
          </figure>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ice-2 border-y border-line py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <p className="kicker text-teal-deep mb-4">The protocol</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">
              What happens during a visit?
            </h2>
            <p className="text-xl text-mist">
              The appointment is precise, not rushed.
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
            Why only mattresses?
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
              How much does it cost?
            </h2>
            <p className="text-xl text-mist">
              One published rate, because the surface you sleep on deserves better than guesswork.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.35fr_.8fr] items-start">
            <div className="grid gap-5">
              <h3 className="text-2xl md:text-3xl font-semibold">What&apos;s included</h3>
              <IncludedTable />
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
                      {p.priceLabel && <p className="text-xs font-bold uppercase tracking-[0.12em] text-mist">{p.priceLabel}</p>}
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
                See the full price list →
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
            Why clean a mattress in Nebraska every year?
          </h2>
          <p className="text-lg text-mist leading-relaxed mb-8">
            A bedroom sealed against a Nebraska January stays warm and humid every night, and bed mites
            (house dust mites) do well in warm, humid bedding. By spring, that mattress has spent months in a
            closed room. This is general information, not medical advice.
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
            src={imageById("serta-tag").url}
            alt={imageById("serta-tag").alt}
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
            <h2 className="text-3xl md:text-4xl font-semibold">Where do we work around Lincoln?</h2>
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
        <h2 className="text-4xl font-semibold mb-8">What do people ask before they book?</h2>
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
            Ready to book a mattress cleaning?
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
          <Link
            href="/book"
            className="inline-flex ml-0 sm:ml-3 mt-3 sm:mt-0 border border-white/60 hover:bg-white hover:text-navy text-white font-bold text-lg px-8 py-4 rounded-xl min-h-12 items-center transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}