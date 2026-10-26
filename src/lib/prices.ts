/**
 * The one place prices live. Every page, component, schema block and markdown file
 * reads from here, so a price or promo change is a single edit.
 *
 * Pricing rule (2026-10-25, matches sleepsanitation.com):
 * - While PROMO.active is true, every first-mattress price on the site shows the
 *   regular PRICES.first struck through next to PROMO.first (visual), or reads
 *   "$199 (Fall 2026 promo, regularly $249)" in plain text (titles, meta, FAQ, schema text).
 * - Set PROMO.active to false and every page goes back to PRICES.first.
 * - Additional-mattress and underside rates are regular, never promotional.
 */
export const PRICES = {
  first: 249,
  additionalKing: 199, // each additional king or California king, same visit
  additionalFullQueen: 179, // each additional full or queen, same visit
  additionalKids: 149, // each additional twin or kids bed, same visit
  underside: { min: 50, max: 75 }, // underside/full-surface treatment, per mattress
} as const;

export const PROMO = {
  active: true,
  label: "Fall 2026 promotion",
  badge: "Limited-time Fall 2026 offer",
  first: 199,
  rebookDays: 7,
  rebookPrice: 199,
} as const;

export const usd = (n: number) => `$${n}`;

/** Promo-aware first-mattress price (mirrors firstPrice in sleepsanitation-site facts.ts). */
export const firstPrice = {
  promo: PROMO.active,
  regular: PRICES.first,
  current: PROMO.active ? PROMO.first : PRICES.first,
} as const;

/** Ready-made strings. */
export const priceText = {
  /** Plain-text first price, promo-aware. */
  first: PROMO.active
    ? `${usd(PROMO.first)} (Fall 2026 promo, regularly ${usd(PRICES.first)})`
    : usd(PRICES.first),
  /** Regular first-mattress price, never promotional. */
  firstRegular: usd(PRICES.first),
  additionalKing: usd(PRICES.additionalKing),
  additionalFullQueen: usd(PRICES.additionalFullQueen),
  additionalKids: usd(PRICES.additionalKids),
  additionalRange: `${usd(PRICES.additionalKids)}–${usd(PRICES.additionalKing)}`,
  underside: `+${usd(PRICES.underside.min)}–${usd(PRICES.underside.max)}`,
  promoFirst: usd(PROMO.first),
  promoFollowUp: `Book another cleaning within ${PROMO.rebookDays} days of your service and it's also ${usd(PROMO.rebookPrice)}.`,
} as const;

/**
 * Markdown/front-matter tokens: {{price.first}}, {{price.additionalKing}}, {{price.additionalFullQueen}},
 * {{price.additionalKids}}, {{price.additionalRange}}, {{price.underside}}.
 * Promo tokens are deliberately not offered, so content pages can't show the promo.
 */
const contentTokens: Record<string, string> = {
  first: priceText.first,
  additionalKing: priceText.additionalKing,
  additionalFullQueen: priceText.additionalFullQueen,
  additionalKids: priceText.additionalKids,
  additionalRange: priceText.additionalRange,
  underside: priceText.underside,
};

/** Markdown body version of the first price: struck-through regular price beside the promo. */
const firstMd = PROMO.active ? `~~${usd(PRICES.first)}~~ ${usd(PROMO.first)} (Fall 2026 promo)` : usd(PRICES.first);

export function fillPrices(raw: string): string {
  const fm = raw.match(/^---\n[\s\S]*?\n---\n/);
  if (fm) return fillTokens(fm[0], false) + fillTokens(raw.slice(fm[0].length), true);
  return fillTokens(raw, true);
}

function fillTokens(raw: string, body: boolean): string {
  return raw.replace(/\{\{price\.([a-zA-Z]+)(?::([a-zA-Z+]+))?\}\}/g, (m, key: string, expr?: string) => {
    if (key === "sum" && expr) {
      // {{price.sum:first+additionalKids}} adds PRICES numbers (first = promo-aware current price), so totals never go stale.
      return usd(expr.split("+").reduce((t, k) => {
        const v = k === "first" ? firstPrice.current : (PRICES as Record<string, unknown>)[k];
        if (typeof v !== "number") throw new Error(`Unknown price in token ${m}`);
        return t + v;
      }, 0));
    }
    if (key === "first" && body) return firstMd;
    const v = contentTokens[key];
    if (!v) throw new Error(`Unknown price token ${m}`);
    return v;
  });
}
