"use client";

import { useState } from "react";

/**
 * Estimate calculator wired to the canonical Sleep Sanitation price list:
 * first mattress $299 any size; additional $179 (twin or smaller) / $199 (full, queen, king);
 * add-ons per mattress: underside +$70, urine/blood +$105, pet odor +$50;
 * 72-hour bedroom CO2 testing $199 standalone.
 */
export function QuoteCalc() {
  const [mattresses, setMattresses] = useState(2);
  const [smallAdditional, setSmallAdditional] = useState(false);
  const [underside, setUnderside] = useState(false);
  const [urine, setUrine] = useState(false);
  const [pet, setPet] = useState(false);
  const [co2, setCo2] = useState(false);

  const perAdditional = smallAdditional ? 179 : 199;
  const additionalCount = Math.max(0, mattresses - 1);
  const base = 299 + additionalCount * perAdditional;
  const perMattressAddons = (underside ? 70 : 0) + (urine ? 105 : 0) + (pet ? 50 : 0);
  const addons = perMattressAddons * mattresses;
  const total = base + addons + (co2 ? 199 : 0);

  const toggle = (label: string, checked: boolean, onChange: (v: boolean) => void) => (
    <label className="flex items-center gap-3 rounded-xl border-2 border-line bg-white px-4 py-3 cursor-pointer hover:border-teal/60 transition-colors">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 accent-teal-deep"
      />
      <span className="font-semibold text-[15px] leading-snug">{label}</span>
    </label>
  );

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
              aria-checked={!smallAdditional}
              onClick={() => setSmallAdditional(false)}
              className={`w-full flex justify-between items-center rounded-xl border-2 px-4 py-3 text-left font-semibold min-h-11 transition-colors ${
                !smallAdditional ? "border-teal bg-white shadow-sm" : "border-line bg-white/50 hover:border-teal/60"
              }`}
            >
              <span>Full, Queen or King</span>
              <span className="text-sm text-mist font-normal">$199 each</span>
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={smallAdditional}
              onClick={() => setSmallAdditional(true)}
              className={`w-full flex justify-between items-center rounded-xl border-2 px-4 py-3 text-left font-semibold min-h-11 transition-colors ${
                smallAdditional ? "border-teal bg-white shadow-sm" : "border-line bg-white/50 hover:border-teal/60"
              }`}
            >
              <span>Twin or smaller</span>
              <span className="text-sm text-mist font-normal">$179 each</span>
            </button>
          </div>
        </div>
      )}

      <p className="block text-sm font-semibold mb-2">Add-ons (applied to each mattress)</p>
      <div className="space-y-2 mb-3">
        {toggle("Underside sanitation  +$70", underside, setUnderside)}
        {toggle("Urine / blood treatment  +$105", urine, setUrine)}
        {toggle("Pet odor treatment  +$50", pet, setPet)}
      </div>
      {toggle("Add 72-hour bedroom CO₂ testing  +$199", co2, setCo2)}

      <div className="border-t border-line mt-5 pt-4">
        <ul className="text-sm text-mist space-y-1 mb-3">
          <li className="flex justify-between gap-3">
            <span>First mattress</span><span className="tabular-nums">$299</span>
          </li>
          {additionalCount > 0 && (
            <li className="flex justify-between gap-3">
              <span>
                {additionalCount} additional × ${perAdditional}
              </span>
              <span className="tabular-nums">${additionalCount * perAdditional}</span>
            </li>
          )}
          {perMattressAddons > 0 && (
            <li className="flex justify-between gap-3">
              <span>
                Add-ons × {mattresses}{" "}
                <span className="text-mist/80">(${perMattressAddons}/mattress)</span>
              </span>
              <span className="tabular-nums">${addons}</span>
            </li>
          )}
          {co2 && (
            <li className="flex justify-between gap-3"><span>CO₂ testing</span><span className="tabular-nums">$199</span></li>
          )}
        </ul>
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-sm text-mist font-medium leading-snug">Estimated total:</p>
          <p className="font-display text-4xl font-semibold text-teal-deep tabular-nums" suppressHydrationWarning>
            ${total.toLocaleString()}
          </p>
        </div>
      </div>
      <p className="text-xs text-mist mt-3">
        Final pricing is confirmed at the time of service. Estimate only — no deposit required.
      </p>
    </div>
  );
}