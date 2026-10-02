"use client";

import { useState } from "react";

/**
 * Estimate calculator wired to the canonical price list:
 * first mattress $249 (Fall 2026 promotion: $199); additional full/queen/king $199;
 * additional kids bed (twin/full) $149; underside/full-surface treatment +$50–$75 per mattress.
 * Dry-vapor sanitation, UV-C / HEPA protocol, normal stains, pet odor and ordinary urine
 * accidents are included. Severe, biohazard or extensive contamination is a custom surcharge.
 */
const FIRST = 249;
const PROMO_FIRST = 199;

export function QuoteCalc() {
  const [mattresses, setMattresses] = useState(2);
  const [kidsAdditional, setKidsAdditional] = useState(false);
  const [underside, setUnderside] = useState(false);

  const perAdditional = kidsAdditional ? 149 : 199;
  const additionalCount = Math.max(0, mattresses - 1);
  const regularBase = FIRST + additionalCount * perAdditional;
  const promoBase = PROMO_FIRST + additionalCount * perAdditional;
  const undersideLow = underside ? 50 * mattresses : 0;
  const undersideHigh = underside ? 75 * mattresses : 0;
  const fmt = (lo: number, hi: number) => (lo === hi ? `$${lo.toLocaleString()}` : `$${lo.toLocaleString()}–$${hi.toLocaleString()}`);

  return (
    <div className="bg-ice border border-line rounded-2xl p-6 text-navy shadow-lg">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-deep mb-2">
        Instant estimate
      </p>
      <h3 className="text-2xl font-semibold mb-5">Price your appointment</h3>

      <label className="block text-sm font-semibold mb-2" htmlFor="qc-count">
        How many mattresses?
      </label>
      <div className="flex items-center gap-3 mb-5" role="radiogroup" aria-label="Number of mattresses">
        {[1, 2, 3, 4].map((n) => (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={mattresses === n}
            onClick={() => setMattresses(n)}
            className={`flex-1 rounded-xl border-2 py-3 font-bold min-h-11 transition-colors ${
              mattresses === n ? "border-teal bg-white shadow-sm" : "border-line bg-white/50 hover:border-teal/60"
            }`}
          >
            {n}
            {n === 4 ? "+" : ""}
          </button>
        ))}
      </div>

      {mattresses > 1 && (
        <div className="mb-5">
          <p className="block text-sm font-semibold mb-2">Size of the additional mattresses</p>
          <div className="space-y-2" role="radiogroup" aria-label="Additional mattress size">
            <button
              type="button"
              role="radio"
              aria-checked={!kidsAdditional}
              onClick={() => setKidsAdditional(false)}
              className={`w-full flex justify-between items-center rounded-xl border-2 px-4 py-3 text-left font-semibold min-h-11 transition-colors ${
                !kidsAdditional ? "border-teal bg-white shadow-sm" : "border-line bg-white/50 hover:border-teal/60"
              }`}
            >
              <span>Full, Queen or King</span>
              <span className="text-sm text-mist font-normal">$199 each</span>
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={kidsAdditional}
              onClick={() => setKidsAdditional(true)}
              className={`w-full flex justify-between items-center rounded-xl border-2 px-4 py-3 text-left font-semibold min-h-11 transition-colors ${
                kidsAdditional ? "border-teal bg-white shadow-sm" : "border-line bg-white/50 hover:border-teal/60"
              }`}
            >
              <span>Kids bed (twin or full)</span>
              <span className="text-sm text-mist font-normal">$149 each</span>
            </button>
          </div>
        </div>
      )}

      <label className="flex items-center gap-3 rounded-xl border-2 border-line bg-white px-4 py-3 cursor-pointer hover:border-teal/60 transition-colors">
        <input
          type="checkbox"
          checked={underside}
          onChange={(e) => setUnderside(e.target.checked)}
          className="w-5 h-5 accent-teal-deep"
        />
        <span className="font-semibold text-[15px] leading-snug">Underside / full-surface treatment  +$50–$75 each</span>
      </label>
      <p className="text-xs text-mist mt-2">
        Included at no charge: dry-vapor sanitation, UV-C / HEPA protocol, normal stains, pet odor and ordinary urine accidents.
      </p>

      <div className="border-t border-line mt-5 pt-4">
        <ul className="text-sm text-mist space-y-1 mb-3">
          <li className="flex justify-between gap-3">
            <span>First mattress</span><span className="tabular-nums">${FIRST}</span>
          </li>
          <li className="flex justify-between gap-3 font-semibold text-teal-deep">
            <span>Fall 2026 promotion</span><span className="tabular-nums">−${FIRST - PROMO_FIRST}</span>
          </li>
          {additionalCount > 0 && (
            <li className="flex justify-between gap-3">
              <span>
                {additionalCount} additional × ${perAdditional}
              </span>
              <span className="tabular-nums">${additionalCount * perAdditional}</span>
            </li>
          )}
          {underside && (
            <li className="flex justify-between gap-3">
              <span>Underside × {mattresses}</span>
              <span className="tabular-nums">{fmt(undersideLow, undersideHigh)}</span>
            </li>
          )}
        </ul>
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-sm text-mist font-medium leading-snug">Estimated total:</p>
          <p className="font-display text-4xl font-extrabold text-teal-deep tabular-nums" suppressHydrationWarning>
            {fmt(promoBase + undersideLow, promoBase + undersideHigh)}
          </p>
        </div>
        <p className="text-xs text-mist text-right mt-1" suppressHydrationWarning>
          Regular price {fmt(regularBase + undersideLow, regularBase + undersideHigh)}
        </p>
      </div>
      <p className="text-xs text-mist mt-3">
        Estimate only. We confirm your final price when you book. Severe, biohazard or extensive contamination is quoted as a custom surcharge.
      </p>
    </div>
  );
}
