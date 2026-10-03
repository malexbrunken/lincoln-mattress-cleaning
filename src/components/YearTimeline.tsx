import type { TimelineItem } from "@/lib/academicYear";

/** The Lincoln page anatomy starts here: when in the year this matters, each date with its source. */
export function YearTimeline({ items, label = "When this matters" }: { items: TimelineItem[]; label?: string }) {
  return (
    <section aria-label={label} className="not-prose bg-ice border border-line rounded-2xl p-6 md:p-7 mb-10">
      <p className="kicker text-teal-deep mb-4">{label}</p>
      <ol className="relative border-l-2 border-teal/40 ml-2 space-y-5">
        {items.map((it, i) => (
          <li key={i} className="pl-5 relative">
            <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal" aria-hidden="true" />
            <p className="font-bold text-navy">{it.when}</p>
            <p className="text-mist">
              {it.what}{" "}
              <a href={it.url} rel="noopener" className="text-teal-deep underline text-sm">({it.source})</a>
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
