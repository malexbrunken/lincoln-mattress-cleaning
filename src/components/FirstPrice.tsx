import { PRICES, PROMO, usd } from "@/lib/prices";

/**
 * Promo-aware first-mattress price for page copy. While PROMO.active is true it shows the
 * regular price struck through beside the promo price; otherwise just the regular price.
 * Driven only by PROMO in src/lib/prices.ts.
 */
export function FirstPrice({ label = true }: { label?: boolean }) {
  if (!PROMO.active) return <>{usd(PRICES.first)}</>;
  return (
    <>
      <span className="sr-only">
        {usd(PROMO.first)}, Fall 2026 promo (regular price {usd(PRICES.first)})
      </span>
      <span aria-hidden="true">
        <s className="opacity-60 font-normal">{usd(PRICES.first)}</s> {usd(PROMO.first)}
        {label && <span className="text-[0.7em] font-semibold"> Fall 2026 promo</span>}
      </span>
    </>
  );
}
