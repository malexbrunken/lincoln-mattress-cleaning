import { priceText } from "./prices";
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
  /** Optional long-form sections rendered after the local paragraphs. */
  sections?: { h2: string; body: string[] }[];
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
    headline: "Lancaster County Mattress Cleaning: Hickman, Malcolm, Waverly",
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
      "A bed in a cabin, lake place or guest room that sits closed up for a season picks up a stale, musty smell. A dry vapor steam treatment with HEPA vacuuming and UV-C light treatment brings it back to a bed you want to sleep in.",
    ],
    places: [
      { name: "Wahoo", county: "Saunders", note: "Town and Saunders County acreages along Highway 77." },
      { name: "Ashland", county: "Saunders", note: "Platte River valley and the Mahoney State Park area." },
    ],
    anchors: ["Wahoo and the Highway 77 corridor", "Ashland and the Platte River valley"],
    sections: [
      {
        h2: "Mattress cleaning in Wahoo and Ashland, at your home",
        body: [
          "We drive to Saunders County on our regular Lincoln routes, so a Wahoo or Ashland appointment costs the same as one in Lincoln. You do not haul a mattress anywhere. We bring the equipment into the bedroom, treat the bed where it sits and leave the room the way we found it.",
          `The first mattress is ${priceText.first}, any size. Every additional mattress on the same visit is ${priceText.additionalRange}, so most Wahoo and Ashland families do every bed in the house in one stop. Underside or full-surface treatment is ${priceText.underside} per mattress.`,
        ],
      },
      {
        h2: "What every Saunders County visit includes",
        body: [
          "Every visit starts with the law tag, which tells us how the mattress is built so we can set the steam pass speed for memory foam, latex, hybrid or innerspring. Then we treat the full sleeping surface with low-moisture dry vapor steam at 212°F, a temperature we verify with a temperature gun, working into every seam, tuft and edge.",
          "Next comes a HEPA mattress vacuum with UV-C light treatment to lift the dust, skin flakes and dead bed mites the steam leaves behind. Normal stains, pet odor and ordinary urine accidents are included in the price, with enzyme treatment for the spots that need it.",
          "Our technicians wear gloves and shoe booties in your home and disinfect every piece of equipment between jobs, so nothing from the last house comes into yours.",
        ],
      },
      {
        h2: "Farmhouses, acreages and lake places",
        body: [
          "Saunders County homes range from new builds on the edge of Wahoo to century-old farmhouses and acreages along the Platte. Farm and acreage households bring in more dust, pollen and field debris on clothes and pets than a city bedroom sees, and the mattress collects it night after night. A twice-yearly cleaning keeps it in check.",
          "Around Lake Wanahoo outside Wahoo and the Platte River valley near Ashland, plenty of beds sit in cabins, lake places and guest rooms that are only used part of the year. We clean those before the season opens, so the first weekend at the lake starts on a fresh bed.",
          "If you rent a cabin or a room near Mahoney State Park or the Wildlife Safari Park on Airbnb or VRBO, we can put your mattresses on a regular schedule between guests. See our guide for Lincoln-area Airbnb hosts for how hosts plan turnovers.",
        ],
      },
      {
        h2: "When Wahoo and Ashland families book",
        body: [
          "Spring and fall are the busiest months, when households change bedding for the season and want the mattresses done at the same time. Families also book after a new baby arrives, before a college student moves home for the summer, after a pet accident, and right after bringing home a used or hand-me-down mattress.",
          "Mattress cleaning in Wahoo and Ashland also fits the moments that matter: before a new baby comes home to the nursery, before relatives arrive for the holidays and sleep in the guest room, before a home goes on the market, and after the kids leave a bed behind for college. A clean, fresh mattress is one less thing to think about.",
          "Book online in a couple of minutes, or call or text us with your town and road. If you are on an acreage outside Wahoo or Ashland, tell us the road when you book so we can plan the route, and we will confirm your arrival window the day before.",
        ],
      },
    ],
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
