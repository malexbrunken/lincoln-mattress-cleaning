import { pricing } from "@/lib/site";
import { priceText } from "@/lib/prices";

/**
 * Fall 2026 promotion callout. Pricing rule (2026-10-04): render this on /pricing only.
 * Copy is fixed: no end date or extra terms.
 */
export function PromoBanner({ className = "" }: { className?: string }) {
  if (!pricing.promo.active) return null;
  return (
    <div className={`rounded-2xl border-2 border-teal bg-white p-6 text-navy shadow-sm ${className}`} role="note" aria-label={pricing.promo.label}>
      <p className="inline-block rounded-full bg-teal-deep px-3 py-1 text-[12px] font-bold uppercase tracking-[0.14em] text-white">{pricing.promo.badge}</p>
      <p className="sr-only">First mattress: regular price ${pricing.first.price}, now ${pricing.promo.first}.</p>
      <div aria-hidden="true" className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-1">
        <s className="font-display text-[36px] font-semibold leading-none text-mist decoration-2">${pricing.first.price}</s>
        <span className="font-display text-[60px] font-bold leading-none text-teal-deep">${pricing.promo.first}</span>
        <span className="pb-1 text-[15px] text-mist">first mattress, any size</span>
      </div>
      <p className="mt-3 text-[16px] font-semibold leading-relaxed">{pricing.promo.followUp}</p>
    </div>
  );
}

/** First-mattress price cell with the promo: regular price struck through, promo price beside it. */
function PromoPrice() {
  return (
    <>
      <span className="sr-only">Regular price ${pricing.first.price}, now ${pricing.promo.first} (limited-time offer)</span>
      <span aria-hidden="true">
        <s className="text-mist font-normal">${pricing.first.price}</s> ${pricing.promo.first} (limited-time offer)
      </span>
    </>
  );
}

/**
 * The "What's included" price table. `promo` is for /pricing only; everywhere else
 * the first mattress shows its regular price.
 */
export function IncludedTable({ promo = false }: { promo?: boolean }) {
  const showPromo = promo && pricing.promo.active;
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
              <td className={`px-5 py-3 sm:whitespace-nowrap ${r.bold ? "font-bold text-navy" : ""}`}>
                {r.price === "first" ? (showPromo ? <PromoPrice /> : priceText.first) : r.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPromo && (
        <p className="border-t border-line px-5 py-3 text-[14px] text-mist">
          The regular first-mattress price is ${pricing.first.price}. It&apos;s ${pricing.promo.first} for a limited time.
        </p>
      )}
    </div>
  );
}
