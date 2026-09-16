export type Town = {
  slug: string;
  name: string;
  county: string;
  headline: string;
  intro: string;
  local: string[]; // genuinely local paragraphs
  anchors: string[]; // neighborhoods / landmarks we actually work around
  nearby: string[]; // slugs of adjacent towns for internal links
};

export const towns: Town[] = [
  {
    slug: "lincoln",
    name: "Lincoln",
    county: "Lancaster County",
    headline: "Mattress Cleaning in Lincoln, NE",
    intro:
      "Lincoln is our home market. We treat mattresses across the city — from historic Near South and Everett homes to new builds in the Highlands and student apartments around UNL.",
    local: [
      "Lincoln mattresses carry two things house-cleaners never address: winter. A bedroom closed up against a Nebraska January sits humid and warm every night, which is exactly the condition dust mites and odors favor. By March, most people are sleeping on a reservoir that has been quietly building since fall, and morning congestion gets blamed on the season rather than the mattress.",
      "The other is history. Lincoln has a large student rental stock, and around UNL a mattress often has years of back-to-back occupants behind it — previous tenants whose habits nobody documented. Parents furnishing an off-campus apartment are usually the ones who call, and sanitizing the inherited mattress is a fraction of the cost of replacing it.",
      "We work in the historic districts too. Near South and Everett homes hold antique beds and delicate constructions where a low-moisture process matters more than a fast one; we read the law tag before touching anything and adjust for older materials. In the Highlands and south Lincoln new builds, it is usually the opposite problem — brand new mattresses that have never been professionally treated, often in bedrooms with ventilation nobody has measured.",
    ],
    anchors: [
      "Near South & Everett historic districts",
      "University Place, Bethany, College View",
      "Havelock & northeast Lincoln",
      "The Highlands & southwest Lincoln",
      "Downtown & Haymarket condos",
    ],
    nearby: ["waverly", "hickman", "bennet", "eagle", "malcolm"],
  },
  {
    slug: "waverly",
    name: "Waverly",
    county: "Lancaster County",
    headline: "Mattress Cleaning in Waverly, NE",
    intro:
      "Waverly is a short drive east of Lincoln and well inside our normal radius. Newer builds, family homes, and plenty of bedrooms that have never had a professional mattress appointment.",
    local: [
      "Waverly's newer subdivisions mean newer mattresses — often still under manufacturer warranty. That matters, because improper heat or moisture is one of the few ways a homeowner can void a mattress warranty. Our low-moisture process is specifically designed to be warranty-safe, and we read the law tag on every mattress before we treat it.",
      "Households here tend to run larger: multiple kids, a guest room, sometimes an inherited mattress from grandparents. Multi-mattress visits are the norm for us in Waverly, and the second and subsequent mattresses are priced at $179–$199 rather than the full first-mattress rate.",
    ],
    anchors: ["Waverly schools corridor", "Newer subdivisions on the east side", "Close to I-80 at the Waverly interchange"],
    nearby: ["lincoln", "eagle", "palmyra", "bennet"],
  },
  {
    slug: "hickman",
    name: "Hickman",
    county: "Lancaster County",
    headline: "Mattress Cleaning in Hickman, NE",
    intro:
      "Hickman is one of the fastest-growing towns south of Lincoln. We service family homes here, including multi-bedroom houses where every mattress has been in nightly use for years.",
    local: [
      "Hickman homes tend to be newer and tight — well-insulated, which is good for heating bills and less good for bedroom air exchange. A sealed bedroom is where overnight humidity and CO₂ accumulate, and where dust-mite populations get comfortable. Mattress sanitation plus our 72-hour CO₂ testing is a natural pairing for newer Hickman builds.",
      "Well water is common on the acreages around Hickman. Hard water affects linen and bedding more than the mattress itself, but it is worth knowing that we use no water-based chemistry in the mattress process at all — dry vapor steam and nothing left behind.",
    ],
    anchors: ["Hickman city center & school corridor", "Acreage properties toward Roca and Panama"],
    nearby: ["lincoln", "bennet", "firth", "crete"],
  },
  {
    slug: "bennet",
    name: "Bennet",
    county: "Lancaster County",
    headline: "Mattress Cleaning in Bennet, NE",
    intro:
      "Bennet sits southeast of Lincoln in the Palmyra school district. Family homes, acreages, and a fair number of mattresses that have been handed down rather than replaced.",
    local: [
      "Handed-down mattresses are common in the Bennet area — from a kid who moved out, from a parent who downsized, from a guest room that became a nursery. A used mattress arrives with a full history and no documentation, which is exactly the case where a sanitary reset before the first night makes sense.",
      "We treat organic and natural-material mattresses here too, including Avocado builds. Those constructions are among the most sensitive to moisture, and dry vapor steam is the safer method for them — one of our documented jobs in the gallery is an Avocado mattress with its foam topper.",
    ],
    anchors: ["Bennet city center", "Acreages along the Palmyra corridor"],
    nearby: ["lincoln", "palmyra", "hickman", "eagle"],
  },
  {
    slug: "eagle",
    name: "Eagle",
    county: "Cass County",
    headline: "Mattress Cleaning in Eagle, NE",
    intro:
      "Eagle is a growing bedroom community east of Lincoln on the way to the Omaha metro. We cover it on regular Lincoln routes.",
    local: [
      "Eagle households frequently include pets, which is the single most common reason a mattress gets treated here — not tears or wear, but dander and odor compounds that have migrated from the bedding or the bedding-adjacent room into the mattress surface over years.",
      "Our pet odor treatment is +$50 per mattress, and it targets dander oils rather than covering them with fragrance. Where there has been an actual accident rather than wear, the urine and blood treatment at +$105 with ATP verification is the one that addresses the source.",
    ],
    anchors: ["Eagle city center", "Properties toward Palmyra and Elmwood"],
    nearby: ["lincoln", "palmyra", "bennet", "waverly"],
  },
  {
    slug: "palmyra",
    name: "Palmyra",
    county: "Otoe County",
    headline: "Mattress Cleaning in Palmyra, NE",
    intro:
      "Palmyra sits southeast of Lincoln along Highway 2. Rural properties, older homes, and mattresses that have served a long time.",
    local: [
      "In rural Palmyra, mattresses often stay in the house much longer than they would in the city — a mattress becomes a spare-room mattress, then a grandkid mattress, and quietly accumulates a decade of use along the way. That is precisely the accumulation our process is built to address.",
      "Older mattresses deserve an honest assessment before treatment. If the construction is failing or the core is saturated, we will tell you it should be replaced rather than take your money for a surface treatment that cannot help.",
    ],
    anchors: ["Palmyra town center", "Rural properties along Highway 2"],
    nearby: ["bennet", "eagle", "lincoln", "hickman"],
  },
  {
    slug: "firth",
    name: "Firth",
    county: "Lancaster County",
    headline: "Mattress Cleaning in Firth, NE",
    intro:
      "Firth is just south of Lincoln in the Norris school district. We cover it on our southern Lancaster County routes.",
    local: [
      "Firth is farm country, and farm households run dustier than most. Agricultural dust settles into everything and mattresses are no exception, particularly in bedrooms with windows that get opened to working fields. A once-a-year mattress sanitation appointment is the practical way to handle that here.",
      "Families in the Firth area also tend to keep more beds in service — kids, guests, grandkids. Multi-mattress pricing makes treating the whole house in one visit the sensible option.",
    ],
    anchors: ["Firth town center", "Norris district properties"],
    nearby: ["hickman", "crete", "lincoln", "bennet"],
  },
  {
    slug: "malcolm",
    name: "Malcolm",
    county: "Lancaster County",
    headline: "Mattress Cleaning in Malcolm, NE",
    intro:
      "Malcolm is northwest of Lincoln. We service the town and the surrounding acreages on the same schedule we run through Lincoln's northwest side.",
    local: [
      "Northwest Lancaster County is acreage and farmstead territory, and the housing stock mixes newer builds with homes that have been in a family for generations. Both show up in our schedule — new mattresses under warranty and old mattresses that need an honest verdict on whether they are worth treating.",
      "Humidity is the recurring issue in this part of the county. Older farmhouses and their bedrooms often run damp and closed up through the winter, which is the ideal environment for dust-mite populations and musty odor. Heat without added moisture is the right tool.",
    ],
    anchors: ["Malcolm town center", "Acreages along Highway 34 and the Branched Oak corridor"],
    nearby: ["lincoln", "raymond", "seward", "waverly"],
  },
  {
    slug: "raymond",
    name: "Raymond",
    county: "Lancaster County",
    headline: "Mattress Cleaning in Raymond, NE",
    intro:
      "Raymond sits just north of Lincoln near Branched Oak Lake. We cover the town and the surrounding rural properties.",
    local: [
      "Around Branched Oak, a lot of mattresses serve both a main house and a weekend place — cabins and lake properties that sit unused for stretches of the year. Closed-up mattresses in unheated buildings are a genuine mold-and-odor problem, and the honest answer for a badly compromised cabin mattress is often replacement.",
      "Where the mattress is salvageable, heat-based treatment without added moisture is the correct process — added water in an unheated building will not dry and will make the problem worse.",
    ],
    anchors: ["Raymond town center", "Branched Oak Lake area", "Rural properties along Highway 79"],
    nearby: ["malcolm", "lincoln", "seward", "waverly"],
  },
  {
    slug: "seward",
    name: "Seward",
    county: "Seward County",
    headline: "Mattress Cleaning in Seward, NE",
    intro:
      "Seward is about 25 minutes northwest of Lincoln and inside our regular radius. Concordia student housing and family homes across the county seat.",
    local: [
      "Seward has its own student-housing pattern around Concordia, and the same dynamic applies as around UNL: mattresses that pass between tenants with no service history. It is the case where a sanitary reset before move-in is both cheaper and faster than sourcing a replacement.",
      "Seward County homes run the full range — new builds on the edge of town and century-old farmhouses with bedrooms that have never had a mattress service. Both get the same protocol, with the temperature and pass speed matched to what the law tag says the mattress is made of.",
    ],
    anchors: ["Seward town center & courthouse square", "Concordia University area", "Rural Seward County properties"],
    nearby: ["malcolm", "lincoln", "crete", "raymond"],
  },
  {
    slug: "crete",
    name: "Crete",
    county: "Saline County",
    headline: "Mattress Cleaning in Crete, NE",
    intro:
      "Crete is south of Lincoln on Highway 103 and within our normal service radius. We service family homes and Doane-area student housing.",
    local: [
      "Doane's presence means Crete has a steady supply of rental mattresses with anonymous histories, and the turnover pattern that comes with them. Treating a mattress between tenants costs a fraction of replacement and solves the actual problem — the accumulated biological load of people the new occupant never met.",
      "In Saline County generally, we see a lot of multi-generation mattresses: a bed that has moved from one house to another within a family three times. Those are the appointments where we most often have to give a candid verdict, because a mattress three moves and fifteen years in is sometimes genuinely at the end of its service life.",
    ],
    anchors: ["Crete town center", "Doane University area", "Highway 103 corridor"],
    nearby: ["firth", "hickman", "lincoln", "seward"],
  },
  {
    slug: "wahoo",
    name: "Wahoo",
    county: "Saunders County",
    headline: "Mattress Cleaning in Wahoo, NE",
    intro:
      "Wahoo is north of Lincoln on Highway 77 and inside our radius. Family homes, acreages, and Saunders County farms.",
    local: [
      "Saunders County is farm and ranch country, and the bedrooms here deal with agricultural dust, open-window seasons, and often wood heat. Wood heat dries a house aggressively in winter and leaves the bedroom humidity swinging, which is hard on mattress fibers and bedding alike.",
      "Our low-moisture process fits this well: no added water into a house that already struggles to hold consistent humidity, and no chemical residue in a room that gets closed up tight against the cold.",
    ],
    anchors: ["Wahoo town center", "Saunders County acreages", "Highway 77 corridor"],
    nearby: ["lincoln", "malcolm", "raymond", "ashland"],
  },
  {
    slug: "ashland",
    name: "Ashland",
    county: "Saunders County",
    headline: "Mattress Cleaning in Ashland, NE",
    intro:
      "Ashland sits between Lincoln and Omaha on the Platte River corridor — inside the overlap where our Lincoln and Omaha routes meet.",
    local: [
      "Ashland is a river-town mattress market: humid valley air, a fair number of second homes, and Mahoney State Park visitors passing through all season. River humidity is the recurring theme, and it is the reason mattresses here more often develop a musty note than an obviously stained one.",
      "We also service short-term rental properties in and around Ashland. Between guests, a mattress sanitation appointment is a defensible standard to hold — it is documented, it is quick, and it is the kind of thing guests notice and comment on.",
    ],
    anchors: ["Ashland town center", "Platte River valley", "Eugene T. Mahoney State Park area", "I-80 corridor"],
    nearby: ["wahoo", "gretna", "lincoln", "seward"],
  },
  {
    slug: "gretna",
    name: "Gretna",
    county: "Sarpy County",
    headline: "Mattress Cleaning in Gretna, NE",
    intro:
      "Gretna straddles the Lincoln–Omaha corridor on I-80. It sits on the overlap of both our routes, so scheduling is flexible.",
    local: [
      "Gretna's growth means a lot of new construction and a lot of new mattresses, often several purchased in one transaction for a whole house. That is the case where multi-mattress pricing works hardest in your favor — the second, third, and fourth mattresses in one visit run $179–$199 instead of the full $299.",
      "New builds and sealed bedrooms are also where our CO₂ testing gets most useful. If you have just moved into a new Gretna home and are waking up congested, testing the bedroom before blaming the mattress is the more informative first step — and the two services pair naturally in one appointment.",
    ],
    anchors: ["Gretna town center", "New subdivisions along Highway 370", "I-80 corridor between Lincoln and Omaha"],
    nearby: ["ashland", "lincoln", "waverly", "palmyra"],
  },
];

export const townBySlug = (slug: string) => towns.find((t) => t.slug === slug);