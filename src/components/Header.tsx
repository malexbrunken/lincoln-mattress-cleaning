import Link from "next/link";
import { site } from "@/lib/site";
import { IconMattress } from "./Icons";

export function Header() {
  return (
    <header className="bg-navy text-white sticky top-0 z-40 shadow-lg shadow-black/20 texture-grain">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-4 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 min-w-0 group">
          <span className="text-teal-bright transition-transform group-hover:-rotate-6">
            <IconMattress className="w-8 h-8" />
          </span>
          <span className="leading-tight">
            <span className="font-display font-semibold text-lg sm:text-xl tracking-tight block">
              Lincoln <span className="text-teal-bright">Mattress Cleaning</span>
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/55">
              A {site.parentBrand} service
            </span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6 text-[15px] font-medium">
          <Link href="/services" className="text-white/85 hover:text-teal-bright transition-colors">Services</Link>
          <Link href="/pricing" className="text-white/85 hover:text-teal-bright transition-colors">Pricing</Link>
          <Link href="/service-areas" className="text-white/85 hover:text-teal-bright transition-colors">Service Areas</Link>
          <Link href="/gallery" className="text-white/85 hover:text-teal-bright transition-colors">Our Work</Link>
          <Link href="/faq" className="text-white/85 hover:text-teal-bright transition-colors">FAQ</Link>
        </nav>
        <a
          href={site.phoneHref}
          className="bg-teal hover:bg-teal-bright text-white font-bold px-5 py-3 rounded-xl text-[15px] whitespace-nowrap min-h-12 flex items-center shadow-md shadow-black/30 transition-colors"
        >
          Call {site.phone}
        </a>
      </div>
      {/* mobile nav */}
      <nav aria-label="Mobile navigation" className="md:hidden bg-navy-2 flex overflow-x-auto gap-5 px-4 py-3 text-[15px] font-medium border-t border-white/10">
        <Link href="/services" className="whitespace-nowrap text-white/85 hover:text-teal-bright">Services</Link>
        <Link href="/pricing" className="whitespace-nowrap text-white/85 hover:text-teal-bright">Pricing</Link>
        <Link href="/service-areas" className="whitespace-nowrap text-white/85 hover:text-teal-bright">Areas</Link>
        <Link href="/gallery" className="whitespace-nowrap text-white/85 hover:text-teal-bright">Our Work</Link>
        <Link href="/guides" className="whitespace-nowrap text-white/85 hover:text-teal-bright">Guides</Link>
        <Link href="/faq" className="whitespace-nowrap text-white/85 hover:text-teal-bright">FAQ</Link>
      </nav>
    </header>
  );
}