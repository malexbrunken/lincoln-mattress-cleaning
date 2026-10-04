import { priceText } from "@/lib/prices";

export type Service = {
  slug: string;
  name: string;
  title: string; // SEO title
  description: string; // meta description
  h1: string;
  intro: string;
  includes: string[];
  detail: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "mattress-sanitization",
    name: "Mattress Sanitization",
    title: "Mattress Cleaning Lincoln NE | Dry Vapor Steam Sanitation",
    description:
      `Mattress cleaning in Lincoln, Nebraska using low-moisture dry vapor steam instead of wet extraction. ${priceText.first} first mattress, UV-C light treatment included.`,
    h1: "Mattress Sanitization in Lincoln",
    intro:
      `A structured, low-moisture sanitation appointment for the surface you sleep on every night built for mattresses. First mattress ${priceText.first}, any size, with normal stains, pet odor and ordinary urine accidents included.`,
    includes: [
      "Assessment of fabric, construction, and bedroom environment",
      "Clean-entry setup: gloves and shoe booties on, staged tools, protected floor, equipment disinfected between jobs",
      "Dry vapor steam across the top surface, seams, quilting, and edges",
      "Side edge treatment",
      "Targeted work on higher-accumulation zones",
      "UV-C light treatment over the sleep surface",
      "Inspection before and after, with what we found reported to you",
    ],
    detail: [
      "Ask any mattress cleaner what goes into the mattress and what stays behind. Hot-water extraction injects water and vacuums it back out; how much stays in a foam core depends on the equipment and the operator.",
      "Our protocol runs the other direction. Dry vapor steam carries heat with very little water. At the nozzle the vapor is superheated, so it lifts and neutralizes what has accumulated in the quilting and seam channels without soaking the core.",
      "We start by reading the law tag. Memory foam, latex, hybrid, innerspring, and organic builds all react differently to heat and pass speed, and a technician who does not check is guessing. Then we contain the room, treat the surface in overlapping passes, detail the seams and edges, finish with UV-C light treatment, and reset the bedroom so the last impression matches the first.",
      "What we do not claim: this is a mattress sanitation protocol, not a medical treatment. It is not allergy or asthma therapy, and it is not pest control. If you have an active bed bug infestation, that is a licensed pest-control problem, and we will tell you so on the phone rather than sell you an appointment that cannot solve it.",
    ],
    faq: [
      {
        q: "How is this different from the mattress cleaning I've had in Lincoln before?",
        a: "Hot-water extraction, the method used on carpet, injects water and vacuums it back out. Dry vapor steam uses heat with minimal moisture, reaches into quilting and seam channels, and leaves no residue or wet core behind.",
      },
      {
        q: "Will steam damage my mattress?",
        a: "Improperly applied heat and moisture can damage a mattress, which is why calibration and training matter. We read the law tag, identify the construction, and adjust temperature, nozzle distance, and pass speed for your specific mattress. We regularly treat memory foam, latex, hybrid, and traditional innerspring builds.",
      },
      {
        q: "How long before I can sleep on it?",
        a: "It depends on the mattress, the room and the humidity, so we do not quote a fixed time. Dry vapor steam puts very little water into the mattress, and Sleep Sanitation's Knowledge Center explains how quickly a treated mattress should dry.",
      },
      {
        q: "Do I need to buy anything or move anything?",
        a: "Just strip the bedding and clear the nightstands. We bring everything else, including the containment setup. Bedding and pillows can be run through your own laundry while we work.",
      },
    ],
  },
  {
    slug: "dry-vapor-steam-vs-extraction",
    name: "Dry Vapor Steam vs. Wet Extraction",
    title: "Steam vs. Extraction Mattress Cleaning | What Actually Differs",
    description:
      "A straight comparison of dry vapor steam and hot-water extraction mattress cleaning — moisture, drying time, what each method reaches, and which mattresses each one suits.",
    h1: "Dry Vapor Steam vs. Standard Wet Extraction",
    intro:
      "Both methods are called \"mattress cleaning.\" They are not remotely the same process, and the difference shows up in moisture, drying time, and what is left inside the foam afterwards.",
    includes: [
      "Side-by-side method comparison, no marketing gloss",
      "What each process leaves behind in the foam",
      "Which mattress constructions tolerate which method",
      "When extraction is the right call (it sometimes is)",
      "When dry vapor steam is the safer choice",
    ],
    detail: [
      "Wet extraction is a good technology. On carpet, it is the standard for a reason: carpet fibers and a pad underneath can take a hot-water injection and survive a slow dry. A mattress cannot. Its core is foam or fiber batting, and once that core takes on water inside a closed bedroom, it does not dry in a day. The moisture you cannot see is the part that concerns us.",
      "Dry vapor steam is superheated water vapor at very low moisture content. It carries the heat that breaks down oils, lifts soil out of textured quilting, and neutralizes organisms on contact, while leaving the foam core essentially dry. No chemical residue, no lingering damp.",
      "We are honest about the trade-off: extraction can flush a large volume of liquid through heavily saturated padding in one pass, and for a mattress that has been flooded with a significant fluid volume, there are cases where an extraction step is genuinely useful. When we hit that situation we say so. What we will not do is make extraction the default on a sleep surface, because the default matters more than the exception.",
      "For the standard case — dust accumulation, bed mites, dander, odors, a mattress that has never been professionally treated — dry vapor steam does the job with far less risk to the thing you sleep on. The comparison table on our home page lays out the specific differences field by field.",
    ],
    faq: [
      {
        q: "Is dry vapor steam actually hot enough to matter?",
        a: "The vapor is superheated at the nozzle and delivers heat to the surface. In published tests, a 96°C steam cleaner killed all of the bed mites (house dust mites) in treated carpet and mattress samples (Glass and Needham, 2004). Low moisture and calibrated passes protect the mattress; the temperature is not turned down.",
      },
      {
        q: "Doesn't my mattress need water to get clean?",
        a: "No. Water is a carrier. Heat plus mechanical passes plus extraction into microfiber is what actually removes soil and debris. Adding more water than necessary just creates a drying problem inside foam.",
      },
      {
        q: "My old mattress smells musty. Will steam fix that?",
        a: "A musty smell can be a moisture and microbial problem in the upper layers, and attacking the source with dry heat helps more than adding water. If the odor is coming from a deep, long-term saturation, we will tell you honestly that the mattress may be past recovery and should be replaced.",
      },
    ],
  },
  {
    slug: "bed-mite-treatment",
    name: "Bed Mite Treatment",
    title: "Bed Mite Treatment for Mattresses | Lincoln, NE",
    description: "Bed mites (house dust mites) in Lincoln mattresses: dry vapor steam heat, HEPA vacuuming and UV-C light treatment, and what published steam studies did and didn’t measure.",
    h1: "Bed Mite Treatment",
    intro: "Bed mites (house dust mites) live in the dust and shed skin flakes that collect in a mattress. Our dry vapor steam uses heat to kill them in the seams, tufts, ridges and edges, and HEPA vacuuming lifts what they leave behind.",
    includes: [
      "Dry vapor steam over the top surface, seams, tufts, ridges and edges",
      "HEPA vacuuming to lift dead mites, droppings and dust",
      "UV-C light treatment as part of the visit",
      `Underside/full-surface treatment available (${priceText.underside})`,
      "Plain advice on encasements and bedroom humidity",
    ],
    detail: [
      "Bed mites are the animals scientists call house dust mites. They feed on shed skin flakes and do well in warm, humid bedding, so a mattress that is slept on every night suits them.",
      "Heat is what kills them. In published steam tests, Glass and Needham (2004) reported 100 percent mortality of D. farinae after treating carpet and mattress samples with a 96°C steam cleaner, and Colloff and colleagues (1995) found no live mites in steam-treated, mite-seeded carpet squares over four months. Those were study conditions with those machines, not a measurement taken in your bedroom.",
      "Killing mites and removing what they leave behind are two separate jobs. Dead mites and droppings stay in the fabric until they are lifted, which is why every visit includes HEPA vacuuming. Sleep Sanitation’s Knowledge Center reviews both studies in its article on whether steam kills dust mites in mattresses.",
      "Mites come back from the room around the bed, so what happens after the visit matters too. An encasement fitted afterwards and lower bedroom humidity both help, and we will talk through both. We make no allergy, asthma or medical claim. This is general information, not medical advice.",
    ],
    faq: [
      {
        q: "Does your steam kill bed mites?",
        a: "Yes, with heat. Published steam tests measured the effect: Glass and Needham (2004) reported 100 percent mortality of D. farinae after a 96°C steam cleaner on carpet and mattress samples. Those were study conditions, not your bedroom.",
      },
      {
        q: "Are bed mites the same as bed bugs?",
        a: "No. Bed mites (house dust mites) are microscopic and live in dust and skin flakes. Bed bugs are insects you can see. For bed bugs, call a licensed pest professional first; we are not pest control.",
      },
      {
        q: "Should I get an encasement first or after?",
        a: "After. Treat the mattress first, then fit the encasement.",
      },
    ],
  },
  {
    slug: "pet-urine-odor-treatment",
    name: "Pet Urine & Odor Treatment",
    title: "Pet Urine & Odor Removal From Mattresses | Lincoln, NE",
    description:
      "Pet urine, child accidents, and odor treatment for Lincoln mattresses: enzymatic protein breakdown and a moisture test after the job. Pet odor and ordinary urine accidents are included.",
    h1: "Pet Urine & Odor Treatment",
    intro:
      "Urine does not sit on a mattress. It wicks into the quilting, through the seam channels, and into the foam. Surface treatment does not fix it — the source has to be broken down where it actually is.",
    includes: [
      "Enzymatic protein degradation on affected zones (ordinary urine accidents included)",
      "Moisture test after the job",
      "Targeted pet odor neutralization of dander oils (included)",
      "Dry vapor steam across the full sleep surface",
      "UV-C light treatment",
      `Underside/full-surface treatment available (${priceText.underside}) for wicking that reached the bottom panel`,
    ],
    detail: [
      "We show up to a lot of mattresses with a pet-accident history, and the story is almost always the same: it was cleaned when it happened, it smelled fine for a while, and then it came back. Odor comes back because urine contains urea and uric acid salts that crystallize in the fiber. Those crystals reactivate with humidity — a warm body, a humid Lincoln summer, a closed-up bedroom. Fragrance covers them until the next humid night.",
      "The fix is enzymatic: the proteins and uric salts that carry the odor have to be broken down, not masked. We apply an enzymatic treatment to the affected zones and allow the dwell time it needs.",
      "Where the wicking has reached the bottom panel, underside/full-surface treatment matters, and we will tell you when we see it. A mattress that has been repeatedly soaked over years — the classic case of a puppy mattress — is severe contamination: it carries a custom surcharge, and it is sometimes past what any cleaning process can fully resolve. We would rather tell you that on the phone than after you have paid.",
      "This service also covers child accidents and other bodily-fluid situations, which is where careful decontamination matters most. We treat those without commentary.",
    ],
    faq: [
      {
        q: "How much does pet urine treatment cost?",
        a: `Pet odor and ordinary urine accident treatment are included in the base mattress price: ${priceText.first} for the first mattress. Severe or biohazard contamination carries a custom surcharge, confirmed before any work starts.`,
      },
      {
        q: "Can the smell really be permanently removed?",
        a: "For recent or moderate accidents, yes — enzymatic breakdown usually resolves it. For older mattresses with years of repeated saturation deep into the core, we will tell you honestly if the odor source is beyond what surface treatment can reach.",
      },
      {
        q: "Is it safe for my pets and kids to be in the house afterwards?",
        a: "Yes. There is no chemical residue left in the foam, which is exactly why we use dry vapor steam rather than a detergent wash.",
      },
    ],
  },
  {
    slug: "uv-c-post-treatment",
    name: "UV-C Light Treatment",
    title: "UV-C Light Treatment for Mattresses | Included in Every Visit",
    description: "UV-C light treatment is part of every Lincoln mattress sanitation visit, after the dry vapor steam pass. Included in the base price, never a separate line item.",
    h1: "UV-C Light Treatment",
    intro: "Included in every mattress appointment. After the dry vapor steam pass, the sleep surface gets UV-C light treatment.",
    includes: [
      "UV-C light treatment across the top surface and edges after steaming",
      "Included in the base mattress price",
    ],
    detail: [
      "UV-C comes after steam, and the order matters. Steam does the heat work and loosens soil, and the UV-C light treatment follows on the cleaner surface.",
      "UV-C light is one step of the sanitation process. We don’t take or report UV-C readings or measurements, and we make no disinfection or health claim for it.",
      "You will never see UV-C light treatment priced as a line item. It is part of what a mattress sanitation visit is, at the published rate, for every customer.",
    ],
    faq: [
      {
        q: "Is UV-C light treatment an extra charge?",
        a: `No. It is included in the base mattress price: ${priceText.first} for the first mattress and ${priceText.additionalRange} for each additional mattress.`,
      },
      {
        q: "Do you take UV-C readings?",
        a: "No. UV-C light is a treatment step in our process. We don’t measure or report readings.",
      },
    ],
  },
  {
    slug: "co2-bedroom-testing",
    name: "72-Hour Bedroom CO₂ Testing",
    title: "72-Hour Bedroom CO₂ Testing | Lincoln, NE Sleep Environment",
    description:
      "Optional 72-hour bedroom CO₂ testing in Lincoln, NE: three nights of CO₂ logging to show how a closed bedroom ventilates. Booked on its own or with a visit; priced by quote.",
    h1: "72-Hour Bedroom CO₂ Testing",
    intro:
      "A monitor runs in your bedroom for three days and measures what your sleep environment does overnight. It's an optional service, not part of a mattress visit: book it on its own or add it to a mattress appointment. Priced by quote.",
    includes: [
      "Monitor placed in the bedroom for 72 hours",
      "Overnight CO₂ logging across three full nights",
      "Report on ventilation patterns and how the room behaves while you sleep",
      "Practical recommendations on airflow and ventilation",
    ],
    detail: [
      "A bedroom is a closed box that two adults exhale into for eight hours. If fresh air is not moving through it, CO₂ climbs overnight. CO₂ is a practical marker of how much fresh air reaches the room, which is what this service measures.",
      "Testing is the only way to know. When a room is sealed, when the door is shut and nothing exchanges air, three nights of data will show it plainly. When a room ventilates well, the check shows that too, and you can stop wondering.",
      "We place the monitor, you live normally, and we collect it after 72 hours with a report on the patterns. Where the data points at something fixable — a return vent that is blocked, a door that never opens, a fan that is not running — you get the recommendation in plain language. It isn't included in a mattress visit; you can book it on its own or add it to one. It's priced by quote.",
    ],
    faq: [
      {
        q: "Do I have to do anything during the three days?",
        a: "No. Sleep normally, keep the door where you usually keep it, and we handle the rest.",
      },
      {
        q: "Is this a medical test?",
        a: "No. It measures bedroom air quality — CO₂ and ventilation patterns. It is not a medical test and we do not interpret it medically.",
      },
      {
        q: "Can I add it to a mattress appointment?",
        a: "Yes. It isn't included in a mattress visit, but the monitor can be placed during one and collected 72 hours later. It's priced by quote.",
      },
      {
        q: "How much does it cost?",
        a: "It's priced by quote, whether you book it on its own or add it to a mattress visit. Call or text us for a quote.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

/** The flagship service used for primary CTAs and the home page hero. */
export const flagshipService = services[0];