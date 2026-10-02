import { pricing } from "@/lib/site";

/** Fall 2026 promotion callout. Copy is fixed: no end date or extra terms. */
export function PromoBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border-2 border-teal bg-white p-5 text-navy shadow-sm ${className}`} role="note" aria-label="Fall 2026 promotion">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-deep">{pricing.promo.label}</p>
      <p className="mt-1 font-display text-[22px] font-semibold leading-snug">
        First mattress ${pricing.promo.first} <span className="text-[16px] font-normal text-mist">(regular ${pricing.first.price})</span>
      </p>
      <p className="mt-1 text-[15px] leading-relaxed text-mist">{pricing.promo.followUp}</p>
    </div>
  );
}

/** The "What's included" price table. */
export function IncludedTable() {
  return (
    <div className="overflow-x-auto rounded-2xl ring-1 ring-line bg-white">
      <table className="w-full text-left text-[15.5px]">
        <caption className="sr-only">What&apos;s included</caption>
        <thead className="bg-ice text-navy">
          <tr>
            <th scope="col" className="px-5 py-3 font-display font-semibold">Service</th>
            <th scope="col" className="px-5 py-3 font-display font-semibold">Price</th>
          </tr>
        </thead>
        <tbody>
          {pricing.included.map((r) => (
            <tr key={r.service} className="border-t border-line">
              <td className={`px-5 py-3 ${r.bold ? "font-bold text-navy" : ""}`}>{r.service}</td>
              <td className={`px-5 py-3 whitespace-nowrap ${r.bold ? "font-bold text-navy" : ""}`}>{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
