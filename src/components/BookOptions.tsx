import { site } from "@/lib/site";
import { emailHref, smsHref } from "@/lib/booking";
import { IconChat, IconClock, IconMail, IconPhone } from "./Icons";

/** Call / Text / Email cards used on /book and /contact. Designed for a navy background. */
const options = [
  { key: "call", icon: IconPhone, title: "Call", detail: site.phone, note: "Talk to us directly", href: site.phoneHref, primary: true },
  { key: "text", icon: IconChat, title: "Text", detail: site.phone, note: "Same number, texts welcome", href: smsHref, primary: false },
  { key: "email", icon: IconMail, title: "Email", detail: site.email, note: "Opens a pre-filled request", href: emailHref, primary: false },
];

export const focusRing =
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-navy";

/** `grid`: three columns from md up (wide pages). `stack`: one card per row at every width (narrow columns). */
export function BookOptions({ layout = "grid", className = "" }: { layout?: "grid" | "stack"; className?: string }) {
  const grid = layout === "grid";
  return (
    <ul className={`grid gap-3 ${grid ? "md:grid-cols-3 md:gap-5" : ""} ${className}`} aria-label="Ways to book">
      {options.map((o) => (
        <li key={o.key}>
          <a
            href={o.href}
            className={`group flex ${grid ? "md:flex-col md:items-start md:p-6" : ""} items-center gap-4 rounded-2xl px-4 py-3.5 min-h-[72px] h-full transition-colors ${focusRing} ${
              o.primary
                ? "bg-teal-deep hover:bg-teal text-white shadow-xl shadow-black/30"
                : "bg-white/[0.07] hover:bg-white/[0.14] text-white ring-1 ring-inset ring-white/25"
            }`}
          >
            <span className={`grid place-items-center shrink-0 rounded-xl w-12 h-12 ${o.primary ? "bg-white text-teal-deep" : "bg-white/10 text-teal-bright"}`}>
              <o.icon className="w-6 h-6" />
            </span>
            <span className="min-w-0 flex-1">
              <span className={`block font-display text-xl ${grid ? "md:text-2xl" : ""} font-semibold leading-tight`}>{o.title}</span>
              <span className={`block font-bold text-[17px] ${grid ? "md:text-lg" : ""} break-all`}>{o.detail}</span>
              <span className={`block text-[15px] ${o.primary ? "text-white/90" : "text-white/75"}`}>{o.note}</span>
            </span>
            <span aria-hidden className={`${grid ? "md:hidden" : ""} text-2xl text-white/70 group-hover:translate-x-0.5 transition-transform`}>›</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** "Hours: Mon–Fri 9–6" plus the weekend call-back line, for a navy background. */
export function BookHours({ className = "" }: { className?: string }) {
  return (
    <p className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-white/80 ${className}`}>
      <span className="inline-flex items-center gap-2 font-semibold text-white">
        <IconClock className="w-5 h-5 text-teal-bright" /> Hours: Mon–Fri 9–6
      </span>
      <span>{site.hoursNote}</span>
    </p>
  );
}
