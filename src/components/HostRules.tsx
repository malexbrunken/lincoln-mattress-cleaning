import type { HostRule } from "@/lib/strHosts";

/** Side rail of quoted rules for L2 host pages. Each quote carries its source link. */
export function HostRules({ rules, label = "The rules, quoted" }: { rules: HostRule[]; label?: string }) {
  if (!rules?.length) return null;
  return (
    <aside aria-label={label} className="bg-navy text-white rounded-2xl p-6 lg:sticky lg:top-6">
      <p className="kicker text-teal-bright mb-4">{label}</p>
      <ul className="space-y-5">
        {rules.map((r) => (
          <li key={r.quote}>
            <blockquote className="border-l-4 border-teal-bright pl-3 text-base leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
            <a href={r.url} rel="noopener" className="text-sm text-teal-bright underline mt-1 inline-block">{r.source}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/** Numbered host checklist shown above the guide body. */
export function HostChecklist({ items }: { items: string[] }) {
  if (!items?.length) return null;
  return (
    <section aria-label="Host checklist" className="bg-ice border-2 border-teal rounded-2xl p-6 mb-8">
      <p className="font-bold text-navy text-lg mb-3">Host checklist</p>
      <ol className="space-y-2 text-lg text-navy">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3">
            <span aria-hidden="true" className="mt-1 inline-block w-5 h-5 border-2 border-teal rounded shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
