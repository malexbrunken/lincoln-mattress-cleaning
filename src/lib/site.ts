export const site = {
  name: "Lincoln Mattress Cleaning",
  shortName: "Lincoln Mattress Cleaning",
  parentBrand: "Sleep Sanitation",
  domain: "lincolnmattresscleaning.com",
  url: "https://lincolnmattresscleaning.com",
  tagline: "Clinical-standard mattress sanitation for Lincoln, Nebraska.",
  phone: "(402) 512-5658",
  phoneHref: "tel:+14025125658",
  email: "info@sleepsanitation.com",
  city: "Lincoln",
  state: "NE",
  description:
    "Mattress cleaning and clinical mattress sanitation in Lincoln, Nebraska. Low-moisture dry vapor steam instead of wet extraction, UV-C post-treatment, and a mattress-specific protocol. Serving Lincoln, Waverly, Hickman, Seward, Crete, and the surrounding communities.",
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
    "Gretna",
  ],
  hours: "Monday–Friday, 9am–6pm",
  hoursNote: "Missed a call? We return calls and texts on Saturday and Sunday too.",
  /** schema.org openingHours */
  openingHours: "Mo-Fr 09:00-18:00",
  serviceRadius:
    "Lincoln and the surrounding 40 miles — including Waverly, Hickman, Seward, Crete, Wahoo, Ashland, and the Omaha metro on request.",
} as const;

type Package = {
  name: string;
  popular?: boolean;
  price: string;
  priceNote: string;
  blurb: string;
  features: string[];
};

/**
 * Canonical Sleep Sanitation pricing — keep these numbers identical to
 * sleepsanitation.com/pricing so every property quotes the same rate.
 */
export const pricing = {
  first: { label: "Mattress Sanitation, first mattress", price: 249, note: "Any size, twin through California king" },
  additional: [
    { label: "Additional full/queen/king mattress", price: 199 },
    { label: "Additional kids bed (twin/full)", price: 149 },
  ],
  underside: "+$50–$75",
  promo: {
    label: "Fall 2026 promotion",
    first: 199,
    followUp: "Any additional cleaning scheduled within 7 days of your first service is also $199, so you can see our work first.",
  },
  included: [
    { service: "Mattress Sanitation", price: "$249 first mattress", bold: true },
    { service: "Dry-vapor sanitation", price: "Included", bold: false },
    { service: "UV-C / HEPA protocol", price: "Included", bold: false },
    { service: "Normal stain treatment", price: "Included", bold: false },
    { service: "Pet odor treatment", price: "Included", bold: false },
    { service: "Ordinary urine accident treatment", price: "Included", bold: true },
    { service: "Additional full/queen/king mattress", price: "$199", bold: false },
    { service: "Additional kids bed (twin/full)", price: "$149", bold: false },
    { service: "Underside/full-surface treatment", price: "+$50–$75", bold: false },
    { service: "Severe/biohazard/extensive contamination", price: "Custom surcharge", bold: false },
  ],
} as const;

export const packages: Package[] = [
  {
    name: "First Mattress",
    popular: true,
    price: "$249",
    priceNote: "Any size — Twin through King · $199 during our Fall 2026 promotion",
    blurb:
      "One clinical-standard appointment on your first mattress. Top surface and side edges, dry vapor steam, UV-C post-treatment, and normal stains, pet odor and ordinary urine accidents included.",
    features: [
      "Top surface deep sanitation",
      "Side edge treatment",
      "Low-moisture dry vapor steam",
      "UV-C / HEPA protocol",
      "Normal stain treatment",
      "Pet odor and ordinary urine accident treatment",
      "Clean-entry protocol (boot covers, staged tools)",
    ],
  },
  {
    name: "Each Additional Mattress",
    price: "$149–$199",
    priceNote: "Kids bed (twin/full) $149 · Full, Queen or King $199",
    blurb:
      "Booked in the same visit as your first mattress. Same protocol, same inclusions — priced by size so a whole house costs less than separate appointments.",
    features: [
      "Top surface deep sanitation",
      "Side edge treatment",
      "Low-moisture dry vapor steam",
      "UV-C / HEPA protocol",
      "Stains, pet odor and ordinary urine accidents included",
      "Best value on 2–4 mattress households",
    ],
  },
] as const;

export const addonDetails = [
  {
    name: "Underside/full-surface treatment",
    price: "+$50–$75",
    text: "Complete six-surface coverage. Recommended for severe allergy households or any mattress with visible underside contamination — dust, staining, or debris on the bottom panel and box-spring interface.",
  },
  {
    name: "Severe/biohazard/extensive contamination",
    price: "Custom surcharge",
    text: "Heavy, repeated or biohazard contamination beyond an ordinary accident is quoted after we see the mattress, before any work starts. Normal stains, pet odor and ordinary urine accidents are already included.",
  },
] as const;

/** The steam-vs-extraction comparison used on the home page and the comparison guide. */
export const comparison = [
  ["Method", "Standard provider (wet extraction)", "Sleep Sanitation (dry vapor steam)"],
  ["Moisture pushed into the mattress", "High — hot water injection, then vacuum extraction", "Very low — dry vapor, roughly 5% moisture content"],
  ["Drying time", "Often 24–48 hours before the mattress is usable", "Typically dry within about 30–60 minutes in a ventilated room"],
  ["What it reaches", "Surface soil and visible spots", "Surface plus upper layers, seams, quilting, and edges"],
  ["Heat at the surface", "Water-temperature limited", "Superheated vapor at the nozzle, applied with calibrated passes"],
  ["Chemistry", "Detergents and fragrance left in the foam", "No chemical residue — nothing left behind in the foam"],
  ["Verification", "Visual result", "Pre/post surface reading on our UV-C vacuum, plus ATP verification on fluid treatments"],
  ["Equipment built for", "Floors and upholstery", "Mattresses and sleep surfaces"],
] as const;