/**
 * Service-area pages. Fourteen thin town pages were merged into these four on 2026-10-03;
 * the old /service-areas/<town> URLs 301 here (see next.config.ts).
 */
export type Town = {
  slug: string;
  name: string;
  county: string;
  headline: string;
  intro: string;
  local: string[];
  /** Towns covered on this page, with their county and a short note. */
  places?: { name: string; county: string; note: string }[];
  anchors: string[];
  nearby: string[];
};

export const towns: Town[] = [
  {
    slug: "lincoln",
    name: "Lincoln",
    county: "Lancaster County",
    headline: "Mattress Cleaning in Lincoln, NE",
    intro:
      "Lincoln is our home market. We treat mattresses across the city, from older homes in Near South and Everett to newer builds in the Highlands and student apartments around UNL.",
    local: [
      "Winter shapes a Lincoln mattress appointment: a bedroom closed up against a Nebraska January holds warmth and the moisture a sleeper gives off every night, and bed mites (house dust mites) do well in warm, humid bedding. Low-moisture dry vapor steam is the right tool there, because it treats with heat without adding a soaking.",
      "Older homes can hold older beds with constructions that need care, so we read the law tag and care label before anything touches the mattress and set steam temperature and pass speed for what it is made of.",
    ],
    anchors: [
      "Near South & Everett",
      "University Place, Bethany, College View",
      "Havelock & northeast Lincoln",
      "The Highlands & southwest Lincoln",
      "Downtown & Haymarket",
    ],
    nearby: ["lancaster-county", "seward-and-crete", "wahoo-and-ashland"],
  },
  {
    slug: "lancaster-county",
    name: "Lancaster County",
    county: "Lancaster County, plus Eagle (Cass) and Palmyra (Otoe)",
    headline: "Mattress Cleaning Across Lancaster County, NE",
    intro:
      "Outside the city limits we cover the Lancaster County towns on regular Lincoln routes, plus Eagle and Palmyra just over the county line.",
    local: [
      "Small-town and acreage appointments run on the same schedule as Lincoln, at the same published price. Travel inside this area is included. If you are on an acreage, tell us the road when you book so we can plan the route.",
      "A guest-room mattress, a hand-me-down for a grandchild or a bed moved between houses can be decades old. We inspect first and say so if a mattress is past the point where cleaning makes sense, before you pay for anything.",
    ],
    places: [
      { name: "Waverly", county: "Lancaster", note: "East of Lincoln near the I-80 interchange." },
      { name: "Hickman", county: "Lancaster", note: "South of Lincoln, plus acreages toward Roca and Panama." },
      { name: "Bennet", county: "Lancaster", note: "Southeast of Lincoln, in the Palmyra school district." },
      { name: "Firth", county: "Lancaster", note: "South of Lincoln, in the Norris school district." },
      { name: "Malcolm", county: "Lancaster", note: "Northwest of Lincoln, toward the Branched Oak corridor." },
      { name: "Raymond", county: "Lancaster", note: "North of Lincoln near Branched Oak Lake." },
      { name: "Eagle", county: "Cass", note: "East of Lincoln on Highway 34." },
      { name: "Palmyra", county: "Otoe", note: "Southeast of Lincoln along Highway 2." },
    ],
    anchors: ["Lancaster County towns and acreages", "Eagle and Palmyra, just outside the county line"],
    nearby: ["lincoln", "seward-and-crete", "wahoo-and-ashland"],
  },
  {
    slug: "seward-and-crete",
    name: "Seward & Crete",
    county: "Seward County and Saline County",
    headline: "Mattress Cleaning in Seward and Crete, NE",
    intro:
      "Seward, northwest of Lincoln, and Crete, south of Lincoln on Highway 103, are both college towns inside our regular radius.",
    local: [
      "Both towns have student housing around a campus: Concordia University in Seward and Doane University in Crete. For a used or rental mattress, inspect for bed bugs first; if you see signs, call a licensed pest professional before booking any cleaning.",
      "Family homes in both counties range from new builds at the edge of town to old farmhouses. Every bed gets the same inspection first, with steam temperature and pass speed set for the materials on its label.",
    ],
    places: [
      { name: "Seward", county: "Seward", note: "Concordia University area, the courthouse square and rural Seward County." },
      { name: "Crete", county: "Saline", note: "Doane University area and the Highway 103 corridor." },
    ],
    anchors: ["Concordia University area, Seward", "Doane University area, Crete"],
    nearby: ["lincoln", "lancaster-county", "wahoo-and-ashland"],
  },
  {
    slug: "wahoo-and-ashland",
    name: "Wahoo & Ashland",
    county: "Saunders County",
    headline: "Mattress Cleaning in Wahoo and Ashland, NE",
    intro:
      "Wahoo, north of Lincoln on Highway 77, and Ashland, on the Platte River northeast of Lincoln, are the Saunders County towns we cover.",
    local: [
      "Saunders County mixes town homes, acreages and farms. Ashland sits in the Platte River valley near Eugene T. Mahoney State Park.",
      "A bed in a cabin or second home that sits closed up for a season can pick up a musty smell. A musty smell can mean moisture or mold, so we look at it first and tell you plainly if the mattress should be replaced rather than cleaned.",
    ],
    places: [
      { name: "Wahoo", county: "Saunders", note: "Town and Saunders County acreages along Highway 77." },
      { name: "Ashland", county: "Saunders", note: "Platte River valley and the Mahoney State Park area." },
    ],
    anchors: ["Wahoo and the Highway 77 corridor", "Ashland and the Platte River valley"],
    nearby: ["lincoln", "lancaster-county", "seward-and-crete"],
  },
];

export const townBySlug = (slug: string) => towns.find((t) => t.slug === slug);

/** Old town slugs and the merged page each now redirects to. */
export const townRedirects: Record<string, string> = {
  waverly: "lancaster-county",
  hickman: "lancaster-county",
  bennet: "lancaster-county",
  firth: "lancaster-county",
  malcolm: "lancaster-county",
  raymond: "lancaster-county",
  eagle: "lancaster-county",
  palmyra: "lancaster-county",
  seward: "seward-and-crete",
  crete: "seward-and-crete",
  wahoo: "wahoo-and-ashland",
  ashland: "wahoo-and-ashland",
};
