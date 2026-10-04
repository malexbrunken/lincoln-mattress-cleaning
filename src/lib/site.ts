import { PRICES, PROMO, priceText } from "@/lib/prices";

export const site = {
  name: "Lincoln Mattress Cleaning",
  shortName: "Lincoln Mattress Cleaning",
  parentBrand: "Sleep Sanitation",
  domain: "lincolnmattresscleaning.com",
  url: "https://lincolnmattresscleaning.com",
  tagline: "Mattress sanitation for Lincoln, Nebraska, with gloves, shoe booties and disinfected equipment on every job.",
  phone: "(402) 512-5658",
  phoneHref: "tel:+14025125658",
  /** E.164 form used in JSON-LD; matches sleepsanitation.com's schema. */
  phoneE164: "+14025125658",
  email: "info@sleepsanitation.com",
  city: "Lincoln",
  state: "NE",
  description:
    "Mattress cleaning and mattress sanitation in Lincoln, Nebraska. Low-moisture dry vapor steam instead of wet extraction, UV-C light treatment, and a mattress-specific protocol. Serving Lincoln, Waverly, Hickman, Seward, Crete, and the surrounding communities.",
  areas: [
    "Lincoln",
    "Waverly",
    "Hickman",
    "Bennet",
    "Eagle",
    "Palmyra",
    "Firth",
    "Malcolm",
    "Raymond",
    "Seward",
    "Crete",
    "Wahoo",
    "Ashland",
  ],
  /** Towns inside Lancaster County that we serve (used for schema areaServed). */
  lancasterCountyTowns: ["Lincoln", "Waverly", "Hickman", "Bennet", "Firth", "Malcolm", "Raymond"],
  hours: "Monday–Friday, 9am–6pm",
  hoursNote: "Missed a call? We return calls and texts on Saturday and Sunday too.",
  /** schema.org openingHours */
  openingHours: "Mo-Fr 09:00-18:00",
  serviceRadius:
    "Lincoln, Lancaster County and nearby towns, including Waverly, Hickman, Seward, Crete, Wahoo and Ashland.",
} as const;

type Package = {
  name: string;
  popular?: boolean;
  price: string;
  /** Small label shown right above the price, e.g. "Each additional". */
  priceLabel?: string;
  priceNote: string;
  blurb: string;
  features: string[];
};

/**
 * Canonical Sleep Sanitation pricing — keep these numbers identical to
 * sleepsanitation.com/pricing so every property quotes the same rate.
 */
export const pricing = {
  first: { label: "Mattress Sanitation, first mattress", price: PRICES.first, note: "Any size, twin through California king" },
  additional: [
    { label: "Additional full/queen/king mattress", price: PRICES.additionalLarge },
    { label: "Additional kids bed (twin/full)", price: PRICES.additionalKids },
  ],
  underside: priceText.underside,
  /** Shown on /pricing only. */
  promo: {
    active: PROMO.active,
    label: PROMO.label,
    badge: PROMO.badge,
    first: PROMO.first,
    followUp: priceText.promoFollowUp,
  },
  included: [
    { service: "Mattress Sanitation, first mattress", price: "first", bold: true },
    { service: "Professional inspection: we identify the mattress materials and choose the steam setting and pass speed", price: "Included", bold: false },
    { service: "Clean-entry setup (boot covers, staged tools, protected floor)", price: "Included", bold: false },
    { service: "Dry-vapor sanitation", price: "Included", bold: false },
    { service: "Dry-vapor steaming of seams, tufts, ridges and edges, where dust and shed skin flakes collect", price: "Included", bold: false },
    { service: "UV-C light treatment and HEPA vacuuming", price: "Included", bold: false },
    { service: "What we found, reported to you after the visit", price: "Included", bold: false },
    { service: "Normal stain treatment", price: "Included", bold: false },
    { service: "Pet odor treatment", price: "Included", bold: false },
    { service: "Ordinary urine accident treatment", price: "Included", bold: true },
    { service: "Enzyme treatment for urine and organic odor", price: "Included", bold: false },
    { service: "Organic cleaning methods by default", price: "Included", bold: false },
    { service: "Additional full/queen/king mattress", price: priceText.additionalLarge, bold: false },
    { service: "Additional kids bed (twin/full)", price: priceText.additionalKids, bold: false },
    { service: "Underside/full-surface treatment", price: priceText.underside, bold: false },
    { service: "Severe or biohazard contamination", price: "Custom surcharge", bold: false },
  ],
} as const;

/**
 * Plain-language answer used in the home page hero and the LocalBusiness
 * description: who we are, what we do, the price, the area and how to book.
 * Keep it at 60 words or fewer.
 */
export const plainAnswer =
  `Lincoln Mattress Cleaning is a mattress sanitation service in Lincoln, NE, operated by ${site.parentBrand}. ` +
  `We use Italian dry vapor steam, UV-C light treatment and HEPA vacuuming, with enzyme treatment for urine. ` +
  `The first mattress is ${priceText.first}, any size. ` +
  `We serve Lincoln, Lancaster County and nearby towns. Call or text ${site.phone} to book.`;

export const packages: Package[] = [
  {
    name: "First Mattress",
    popular: true,
    price: priceText.first,
    priceNote: "Any size, twin through California king",
    blurb:
      "One appointment on your first mattress, with gloves, shoe booties and disinfected equipment. Top surface and side edges, dry vapor steam, UV-C light treatment, and normal stains, pet odor and ordinary urine accidents included.",
    features: [
      "Top surface deep sanitation",
      "Side edge treatment",
      "Low-moisture dry vapor steam",
      "UV-C light treatment and HEPA vacuuming",
      "Normal stain treatment",
      "Pet odor and ordinary urine accident treatment",
      "Clean-entry protocol (boot covers, staged tools)",
    ],
  },
  {
    name: "Each Additional Mattress",
    priceLabel: "Each additional mattress",
    price: priceText.additionalRange,
    priceNote: `Each additional kids bed (twin/full) ${priceText.additionalKids} · Each additional full, queen or king ${priceText.additionalLarge}`,
    blurb:
      "Booked in the same visit as your first mattress. Same protocol, same inclusions — priced by size so a whole house costs less than separate appointments.",
    features: [
      "Top surface deep sanitation",
      "Side edge treatment",
      "Low-moisture dry vapor steam",
      "UV-C light treatment and HEPA vacuuming",
      "Stains, pet odor and ordinary urine accidents included",
      "Best value on 2–4 mattress households",
    ],
  },
] as const;

export const addonDetails = [
  {
    name: "Underside/full-surface treatment",
    price: priceText.underside,
    text: "Complete six-surface coverage. Recommended for severe allergy households or any mattress with visible underside contamination — dust, staining, or debris on the bottom panel and box-spring interface.",
  },
  {
    name: "Severe or biohazard contamination",
    price: "Custom surcharge",
    text: "Heavy, repeated or biohazard contamination beyond an ordinary accident is quoted after we see the mattress, before any work starts. Normal stains, pet odor and ordinary urine accidents are already included.",
  },
] as const;

/** The steam-vs-extraction comparison used on the home page and the comparison guide. */
export const comparison = [
  ["Method", "Wet extraction", "Our dry vapor steam"],
  ["Moisture into the mattress", "Hot water injected, then vacuumed back out", "Dry vapor; our Vapor Clean machines are rated by their maker at 5 to 6% moisture content"],
  ["What it reaches", "Depends on the equipment and the operator", "Surface plus upper layers, seams, quilting, and edges"],
  ["Heat at the surface", "Water-temperature limited", "Superheated vapor at the nozzle, applied with calibrated passes"],
  ["Chemistry", "A cleaning solution, chosen by the provider", "Organic cleaning methods by default"],
  ["Hygiene", "Varies", "Gloves and shoe booties on every job; equipment disinfected between jobs"],
  ["Equipment built for", "Floors and upholstery", "Mattresses and sleep surfaces"],
] as const;