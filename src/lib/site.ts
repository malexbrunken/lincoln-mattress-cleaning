export const site = {
  name: "Lincoln Mattress Cleaning",
  shortName: "Lincoln Mattress Cleaning",
  parentBrand: "Sleep Sanitation",
  domain: "lincolnmattresscleaning.com",
  url: "https://lincolnmattresscleaning.com",
  tagline: "Clinical-standard mattress sanitation for Lincoln, Nebraska.",
  phone: "(402) 672-6272",
  phoneHref: "tel:+14026726272",
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
  hours: "7 days a week, 8am–6pm",
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
export const packages: Package[] = [
  {
    name: "First Mattress",
    popular: true,
    price: "$299",
    priceNote: "Any size — Twin through King",
    blurb:
      "One clinical-standard appointment on your first mattress. Top surface and side edges, dry vapor steam, and UV-C post-treatment.",
    features: [
      "Top surface deep sanitation",
      "Side edge treatment",
      "Low-moisture dry vapor steam",
      "Allergen reservoir reduction",
      "UV-C post-treatment",
      "Inspection & containment before treatment",
      "Clean-entry protocol (boot covers, staged tools)",
    ],
  },
  {
    name: "Each Additional Mattress",
    price: "$179–$199",
    priceNote: "Twin or smaller $179 · Full, Queen or King $199",
    blurb:
      "Booked in the same visit as your first mattress. Same protocol, same inclusions — priced by size so a whole house costs less than separate appointments.",
    features: [
      "Top surface deep sanitation",
      "Side edge treatment",
      "Low-moisture dry vapor steam",
      "Allergen reservoir reduction",
      "UV-C post-treatment",
      "Best value on 2–4 mattress households",
    ],
  },
] as const;

export const addons: { name: string; price: string; note?: string }[] = [
  { name: "Underside Sanitation", price: "+$70", note: "per mattress" },
  { name: "Urine or Blood Treatment", price: "+$105", note: "per mattress" },
  { name: "Pet Odor Treatment", price: "+$50", note: "per mattress" },
  { name: "72-Hour Bedroom CO₂ Testing", price: "$199", note: "standalone service" },
];

export const addonDetails = [
  {
    name: "Underside Sanitation",
    price: "+$70",
    text: "Complete six-surface coverage. Recommended for severe allergy households or any mattress with visible underside contamination — dust, staining, or debris on the bottom panel and box-spring interface.",
  },
  {
    name: "Urine or Blood Treatment",
    price: "+$105",
    text: "Enzymatic protein degradation with ATP verification, following CDC-aligned bodily-fluid decontamination practice. This is the add-on for pet accidents, child accidents, and mattress history you did not create.",
  },
  {
    name: "Pet Odor Treatment",
    price: "+$50",
    text: "Targeted neutralization of pet dander oils and odor compounds. Safe for memory foam, latex, hybrid, and traditional innerspring constructions.",
  },
  {
    name: "72-Hour Bedroom CO₂ Testing",
    price: "$199",
    text: "A monitor placed in the bedroom for three days to measure overnight air quality. Ventilation problems show up here first, and they disrupt sleep before they show up anywhere else.",
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