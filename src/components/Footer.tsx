import Link from "next/link";
import { site } from "@/lib/site";
import { towns } from "@/lib/towns";
import { services } from "@/lib/services";
import { IconMattress } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-navy text-white/85 mt-20 texture-grain">
      <div className="h-1 bg-gradient-to-r from-teal-deep via-teal-bright to-teal-deep" />
      <div className="max-w-6xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-4 text-base">
        <div>
          <p className="flex items-start gap-2.5 font-display font-semibold text-xl text-white mb-3">
            <span className="text-teal-bright mt-0.5"><IconMattress className="w-7 h-7" /></span>
            Lincoln Mattress Cleaning
          </p>
          <p className="mb-3 leading-relaxed">{site.tagline}</p>
          <a href={site.phoneHref} className="text-teal-bright font-bold text-lg">{site.phone}</a>
          <a href={`mailto:${site.email}`} className="block mt-1 text-white/80 hover:text-teal-bright transition-colors">{site.email}</a>
          <p className="mt-2 text-white/70">{site.hours}</p>
        </div>
        <div>
          <p className="font-display font-semibold text-white mb-3">Services</p>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-teal-bright transition-colors">{s.name}</Link></li>
            ))}
            <li><Link href="/pricing" className="hover:text-teal-bright transition-colors">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display font-semibold text-white mb-3">Service Areas</p>
          <ul className="space-y-2">
            {towns.map((t) => (
              <li key={t.slug}><Link href={`/service-areas/${t.slug}`} className="hover:text-teal-bright transition-colors">Mattress cleaning in {t.name}, NE</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display font-semibold text-white mb-3">Company</p>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-teal-bright transition-colors">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-teal-bright transition-colors">Our Work</Link></li>
            <li><Link href="/guides" className="hover:text-teal-bright transition-colors">Mattress Care Guides</Link></li>
            <li><Link href="/faq" className="hover:text-teal-bright transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-teal-bright transition-colors">Book an Appointment</Link></li>
            <li>
              <a href="https://sleepsanitation.com" className="hover:text-teal-bright transition-colors" rel="noopener">
                {site.parentBrand}.com →
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60 px-4">
        © {new Date().getFullYear()} {site.parentBrand} · Mattress sanitation throughout Lincoln &amp; Lancaster County, NE ·{" "}
        <Link href="/sitemap.xml" className="underline hover:text-teal-bright">Sitemap</Link>
      </div>
    </footer>
  );
}

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-teal text-white text-center py-4 font-bold text-lg shadow-[0_-4px_16px_rgba(0,0,0,0.35)]">
      <a href={site.phoneHref} className="block">Call {site.phone}</a>
    </div>
  );
}