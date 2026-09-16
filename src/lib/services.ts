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
      "Mattress cleaning in Lincoln, Nebraska using low-moisture dry vapor steam instead of wet extraction. $299 first mattress, UV-C post-treatment, dry in about an hour.",
    h1: "Mattress Sanitization in Lincoln",
    intro:
      "A structured, low-moisture sanitation appointment for the surface you sleep on every night — built for mattresses, not adapted from carpet-cleaning equipment. First mattress $299, any size.",
    includes: [
      "Assessment of fabric, construction, and bedroom environment",
      "Clean-entry containment — boot covers, staged tools, protected floor",
      "Dry vapor steam across the top surface, seams, quilting, and edges",
      "Side edge treatment (the zone every extraction wand skips)",
      "Targeted work on higher-accumulation zones",
      "UV-C post-treatment over the sleep surface",
      "Inspection before and after, with what we found reported to you",
    ],
    detail: [
      "Most \"mattress cleaning\" in Lincoln is a carpet cleaner with an upholstery wand. That means hot water injected into a surface that should be treated with restraint, a foam core that stays damp for a day or two, and detergent residue left where you breathe for eight hours a night.",
      "Our protocol runs the other direction. Dry vapor steam carries heat with very little water — roughly 5% moisture content against the 40–60% typical of wet extraction. At the nozzle the vapor is superheated, so it lifts and neutralizes what has accumulated in the quilting and seam channels without soaking the core. The mattress is normally dry within about an hour in a ventilated bedroom.",
      "We start by reading the law tag. Memory foam, latex, hybrid, innerspring, and organic builds all react differently to heat and pass speed, and a technician who does not check is guessing. Then we contain the room, treat the surface in overlapping passes, detail the seams and edges, finish with UV-C, and reset the bedroom so the last impression matches the first.",
      "What we do not claim: this is a mattress sanitation protocol, not a medical treatment. It is not allergy or asthma therapy, and it is not pest control. If you have an active bed bug infestation, that is a licensed pest-control problem, and we will tell you so on the phone rather than sell you an appointment that cannot solve it.",
    ],
    faq: [
      {
        q: "How is this different from the mattress cleaning I've had in Lincoln before?",
        a: "Most local providers use hot-water extraction, the same method used on carpet: inject water, vacuum it back out. That leaves significant moisture and mostly addresses surface soil. Dry vapor steam uses heat with minimal moisture, reaches into quilting and seam channels, and leaves no residue or wet core behind.",
      },
      {
        q: "Will steam damage my mattress?",
        a: "Improperly applied heat and moisture can damage a mattress, which is why calibration and training matter. We read the law tag, identify the construction, and adjust temperature, nozzle distance, and pass speed for your specific mattress. We regularly treat memory foam, latex, hybrid, and traditional innerspring builds.",
      },
      {
        q: "How long before I can sleep on it?",
        a: "Typically about 30–60 minutes in a ventilated bedroom. There is no wet core to dry out and nothing left behind to off-gas.",
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
      "Dry vapor steam is superheated water vapor at very low moisture content. It carries the heat that breaks down oils, lifts soil out of textured quilting, and neutralizes organisms on contact, while leaving the foam core essentially dry. That is why it is used in hospital and food-service sanitation — high kill rates, no chemical residue, no lingering damp.",
      "We are honest about the trade-off: extraction can flush a large volume of liquid through heavily saturated padding in one pass, and for a mattress that has been flooded with a significant fluid volume, there are cases where an extraction step is genuinely useful. When we hit that situation we say so. What we will not do is run a carpet-cleaning process on a sleep surface as the default, because the default matters more than the exception.",
      "For the standard case — dust accumulation, allergen reservoirs, dander, odors, a mattress that has never been professionally treated — dry vapor steam does the job with far less risk to the thing you sleep on. The comparison table on our home page lays out the specific differences field by field.",
    ],
    faq: [
      {
        q: "Is dry vapor steam actually hot enough to matter?",
        a: "The vapor is superheated at the nozzle and reaches the surface well above the threshold that matters for neutralizing dust-mite allergen and common surface organisms. What makes it safe is the moisture content and the calibrated application, not a compromise on temperature.",
      },
      {
        q: "Doesn't my mattress need water to get clean?",
        a: "No. Water is a carrier. Heat plus mechanical passes plus extraction into microfiber is what actually removes soil and allergen reservoirs. Adding more water than necessary just creates a drying problem inside foam.",
      },
      {
        q: "My old mattress smells musty. Will steam fix that?",
        a: "Usually the musty smell is a moisture and microbial problem in the upper layers, and attacking the source with dry heat helps more than adding water. If the odor is coming from a deep, long-term saturation, we will tell you honestly that the mattress may be past recovery and should be replaced.",
      },
    ],
  },
  {
    slug: "dust-mite-treatment",
    name: "Dust Mite & Allergen Reduction",
    title: "Dust Mite Treatment for Mattresses | Lincoln, NE",
    description:
      "Dust mite and allergen reservoir reduction for Lincoln mattresses using dry vapor steam — no chemicals, no soaking, with realistic expectations about how long results last.",
    h1: "Dust Mite & Allergen Reservoir Reduction",
    intro:
      "A mattress collects skin cells, dust, and mite-related debris over years of nightly use. This service targets that reservoir directly — with honest expectations about what a single appointment can and cannot do.",
    includes: [
      "Top surface, seam, and edge treatment with dry vapor steam",
      "Heat-based reduction of existing mite populations and their waste",
      "UV-C post-treatment over the sleep surface",
      "Underside sanitation available as an add-on (+$70)",
      "Practical guidance on encasements, humidity, and timing",
    ],
    detail: [
      "Dust mites are not a mattress defect, they are a fact of indoor life. They feed on shed skin cells and thrive in warm, humid conditions. A mattress is the ideal habitat: warm all night, humidified by the sleeper, and rarely cleaned because it is not visible. Allergy and indoor-air guidance typically points at bedding and mattresses as a major exposure site for the allergen they produce.",
      "Heat is the honest answer here. Dry vapor steam neutralizes existing populations and their waste in the upper layers without introducing moisture — and moisture is precisely what helps them come back. In a typical Lincoln home with normal HVAC filtration and standard hygiene, we describe the benefit as lasting roughly 12–18 months, which is why we recommend annual treatment as maintenance and semi-annual for households with significant allergy sensitivity or pets.",
      "We will not tell you this cures allergies. It does not, and any provider who claims that is selling you something. What a thorough mattress sanitation appointment does is remove a large, concentrated, nightly exposure source from the room where you spend a third of your life. Many customers describe easier mornings; the honest framing is that we are reducing an exposure source, not treating a medical condition.",
      "Reinfestation depends on your environment, not on our visit. An allergen-proof encasement fitted afterwards materially extends the benefit, and keeping bedroom humidity under about 50% makes the room less hospitable to begin with. We will walk through both before we leave.",
    ],
    faq: [
      {
        q: "How long does the dust mite reduction last?",
        a: "In a typical Lincoln home with HVAC filtration and standard hygiene habits, we describe the benefit as lasting approximately 12–18 months. Reinfestation depends on humidity, bedding hygiene, pets, and whether an encasement is used.",
      },
      {
        q: "Can you treat the pillows and bedding too?",
        a: "Pillows can be treated in the same appointment. Sheets, blankets, and washable covers are best handled in your own washer on a hot cycle — that is more effective than anything we could do on site.",
      },
      {
        q: "Should I get an encasement first or after?",
        a: "After. Treat the mattress first, then fit the encasement so you are not sealing a reservoir inside it.",
      },
    ],
  },
  {
    slug: "pet-urine-odor-treatment",
    name: "Pet Urine & Odor Treatment",
    title: "Pet Urine & Odor Removal From Mattresses | Lincoln, NE",
    description:
      "Pet urine, child accidents, and odor treatment for Lincoln mattresses: enzymatic protein breakdown with ATP verification, plus +$50 pet odor neutralization.",
    h1: "Pet Urine & Odor Treatment",
    intro:
      "Urine does not sit on a mattress. It wicks into the quilting, through the seam channels, and into the foam. Surface treatment does not fix it — the source has to be broken down where it actually is.",
    includes: [
      "Enzymatic protein degradation on affected zones (+$105 per mattress)",
      "ATP verification to confirm the source is genuinely reduced",
      "Targeted pet odor neutralization of dander oils (+$50 per mattress)",
      "Dry vapor steam across the full sleep surface",
      "UV-C post-treatment",
      "Underside sanitation available (+$70) for wicking that reached the bottom panel",
    ],
    detail: [
      "We show up to a lot of mattresses with a pet-accident history, and the story is almost always the same: it was cleaned when it happened, it smelled fine for a while, and then it came back. Odor comes back because urine contains urea and uric acid salts that crystallize in the fiber. Those crystals reactivate with humidity — a warm body, a humid Lincoln summer, a closed-up bedroom. Fragrance covers them until the next humid night.",
      "The fix is enzymatic: the proteins and uric salts that carry the odor have to be broken down, not masked. We apply an enzymatic treatment to the affected zones, allow the dwell time it needs, then verify with ATP testing rather than trusting our noses. ATP measurement reads actual biological residue on the surface, so we can tell you whether the source is genuinely down instead of guessing.",
      "Where the wicking has reached the bottom panel, the underside add-on matters, and we will tell you when we see it. A mattress that has been repeatedly soaked over years — the classic case of a puppy mattress — is sometimes past what any cleaning process can fully resolve. We would rather tell you that on the phone than after you have paid.",
      "This service also covers child accidents and other bodily-fluid situations, which is where the CDC-aligned decontamination practice and the ATP verification matter most. We treat those without commentary and without leaving you wondering whether it worked.",
    ],
    faq: [
      {
        q: "How much does pet urine treatment cost?",
        a: "The urine and blood treatment is +$105 per mattress, and the pet odor treatment is +$50 per mattress. Both are added to your base mattress price and confirmed before we arrive.",
      },
      {
        q: "Can the smell really be permanently removed?",
        a: "For recent or moderate accidents, yes — enzymatic breakdown plus verification usually resolves it. For older mattresses with years of repeated saturation deep into the core, we will tell you honestly if the odor source is beyond what surface treatment can reach.",
      },
      {
        q: "Is it safe for my pets and kids to be in the house afterwards?",
        a: "Yes. There is no chemical residue left in the foam, which is exactly why we use dry vapor steam rather than a detergent wash.",
      },
    ],
  },
  {
    slug: "bed-bug-allergen-reduction",
    name: "Bed Bug Debris & Allergen Reduction",
    title: "Bed Bug Debris & Mattress Allergen Reduction | Lincoln, NE",
    description:
      "What mattress sanitation can and cannot do about bed bugs in Lincoln — debris and allergen reduction on a treated mattress, plus when to call a licensed pest professional instead.",
    h1: "Bed Bug Debris & Allergen Reduction",
    intro:
      "We do not claim to be pest control, and we will not pretend mattress sanitation replaces it. Here is exactly what our process does and does not do — so you can make the right call.",
    includes: [
      "Straight assessment: active infestation vs. residual debris",
      "Dry vapor steam at temperatures that address surface organisms",
      "Removal of debris and cast material from seams and channels",
      "UV-C mattress vacuum pass with surface readings before and after",
      "Honest referral to licensed pest control when that is the correct answer",
    ],
    detail: [
      "If you are seeing live bugs, fresh blood spotting, or newly cast skins, you have an active infestation and you need a licensed pest-control professional, not a cleaning service. We will say that on the phone, in those words, and we would rather lose the booking than take money for an appointment that cannot solve your problem.",
      "Where mattress sanitation genuinely helps is the residue problem. After an infestation has been treated — or in the aftermath of a past one — mattresses hold cast skins, fecal spotting, and the allergens that cause lingering skin and airway irritation. Those are debris and allergen reservoirs, and they are exquisitely uncomfortable to sleep on even when nothing is alive. That is what our protocol addresses: heat-based treatment of the surface, debris and allergen removal from quilting and seams, and a UV-C vacuum pass with surface readings before and after so you can see the change rather than take our word for it.",
      "We also treat mattresses in the aftermath of infestations in student rentals and apartment turnovers around UNL, where a mattress has a history the current tenant did not create. The mattress is usually salvageable once the infestation itself is professionally resolved.",
      "Our pre- and post-treatment readings come from a UV-C mattress vacuum with a surface reader. We photograph them on real jobs, and those photos are in our gallery — including a job that read high before treatment and 0 after.",
    ],
    faq: [
      {
        q: "Do you kill bed bugs?",
        a: "We do not offer pest control, and we are not licensed for it. We treat the mattress surface and remove debris and allergen reservoirs, which is a different job. Active infestations need a licensed pest professional. After that work is done, we can make the mattress sleepable again.",
      },
      {
        q: "What is the surface reader you use?",
        a: "Our UV-C mattress vacuum includes a reader that reports a surface contamination score. We run it before and after treatment and show you both readings. It is a verification tool for our own work, not a medical or pest-detection instrument.",
      },
      {
        q: "Should I just replace the mattress instead?",
        a: "Sometimes yes, and we will say so. If the core is saturated, if the construction is failing, or if the infestation was severe, replacement is the better use of your money. We would rather tell you that than sell an appointment.",
      },
    ],
  },
  {
    slug: "uv-c-post-treatment",
    name: "UV-C Post-Treatment",
    title: "UV-C Mattress Post-Treatment | Included in Every Visit",
    description:
      "Every Sleep Sanitation mattress appointment in Lincoln finishes with a UV-C post-treatment pass and surface readings before and after. Included, never an upsell.",
    h1: "UV-C Post-Treatment",
    intro:
      "Included in every mattress appointment — not an add-on, not an upsell. After the dry vapor steam pass, the surface gets a UV-C treatment and a verification reading.",
    includes: [
      "UV-C pass across the full top surface and edges after steaming",
      "Pre-treatment and post-treatment surface readings",
      "Readings photographed and shown to you on request",
      "Included in the base mattress price",
    ],
    detail: [
      "UV-C is the third step in the sequence, and the order matters. Steam does the lifting and the heat work; the UV-C pass follows on the cleaner surface. Running UV-C first would mean shining it at soil, which is not where it does the most good.",
      "It is also how we verify our own work. Our UV-C mattress vacuum carries a surface reader, and we take a reading before treatment and after. On a recent job the same machine read high on the pre-treatment surface and 0 after — that before-and-after pair is in our gallery, because we think a service should show its evidence rather than describe it.",
      "You will never see UV-C post-treatment priced as a line item on a Sleep Sanitation appointment. It is part of what a mattress sanitation visit is, at the published rate, for every customer.",
    ],
    faq: [
      {
        q: "Is UV-C post-treatment an extra charge?",
        a: "No. It is included in the base mattress price — $299 for the first mattress and $179–$199 for each additional mattress.",
      },
      {
        q: "Can you show me the readings?",
        a: "Yes, and we encourage it. We photograph the pre- and post-treatment readings and will show you both on site.",
      },
    ],
  },
  {
    slug: "co2-bedroom-testing",
    name: "72-Hour Bedroom CO₂ Testing",
    title: "72-Hour Bedroom CO₂ Testing | Lincoln, NE Sleep Environment",
    description:
      "A 72-hour bedroom CO₂ monitor in Lincoln, NE. $199. Measures overnight ventilation and air quality — the factor that disrupts sleep before anything else shows up.",
    h1: "72-Hour Bedroom CO₂ Testing",
    intro:
      "A monitor runs in your bedroom for three days and measures what your sleep environment does overnight. $199, standalone or alongside a mattress appointment.",
    includes: [
      "Monitor placed in the bedroom for 72 hours",
      "Overnight CO₂ readings across three full nights",
      "Report on ventilation patterns and how the room behaves while you sleep",
      "Practical recommendations on airflow and ventilation",
    ],
    detail: [
      "A bedroom is a closed box that two adults exhale into for eight hours. If fresh air is not moving through it, CO₂ climbs overnight — and elevated overnight CO₂ is associated with unrefreshing sleep and grogginess that people usually blame on everything except the room. It is also one of the most common causes of morning congestion that we see in Lincoln homes.",
      "Testing is the only way to know. When a room is sealed, when the door is shut and nothing exchanges air, three nights of data will show it plainly. When a room ventilates well, the readings say that too, and you can stop wondering.",
      "We place the monitor, you live normally, and we collect it after 72 hours with a report on the patterns. Where the data points at something fixable — a return vent that is blocked, a door that never opens, a fan that is not running — you get the recommendation in plain language. This pairs naturally with a mattress appointment, but it stands alone fine, and it is $199 either way.",
    ],
    faq: [
      {
        q: "Do I have to do anything during the three days?",
        a: "No. Sleep normally, keep the door where you usually keep it, and we handle the rest.",
      },
      {
        q: "Is this a medical test?",
        a: "No. It measures bedroom air quality — CO₂ and ventilation patterns. It is not a clinical test and we do not interpret it medically.",
      },
      {
        q: "Can I add it to a mattress appointment?",
        a: "Yes. The monitor can be placed during a mattress visit and collected 72 hours later.",
      },
    ],
  },
  {
    slug: "rental-property-mattress-turnover",
    name: "Rental & Turnover Mattress Service",
    title: "Apartment Turnover Mattress Cleaning | Lincoln Rentals & UNL",
    description:
      "Mattress sanitation for Lincoln rental turnovers, UNL student housing, and property managers — scheduled between lease periods, with documentation of each mattress treated.",
    h1: "Rental & Turnover Mattress Service",
    intro:
      "For Lincoln landlords, property managers, and the families furnishing a student apartment: mattress sanitation scheduled between lease periods, documented per unit.",
    includes: [
      "Multi-mattress pricing: $299 first, $179–$199 each additional",
      "Scheduling between lease periods, including same-day unit turns",
      "Per-mattress documentation of what was treated",
      "Underside and urine treatment available where history requires it",
      "Volume scheduling for multi-unit properties and student housing",
    ],
    detail: [
      "A rental mattress has a history the current occupant did not create. Around UNL, that often means years of back-to-back tenants, and the mattress is the one surface nobody replaces between leases. Parents setting up an off-campus apartment are usually the ones who call us, and it is often the best money they spend on the unit.",
      "For property managers, the useful part is the schedule and the paperwork. We book between lease periods, work through units in a block, price the second and subsequent mattresses lower because we are already there, and document what was treated in each unit. Turnover is a deadline-driven business, and a mattress service that cannot hit the window is not useful regardless of how good the process is.",
      "We are also direct about the limits: a mattress with a failing cover, evidence of long-term saturation, or severe damage may be a replacement rather than a treatment. For a landlord that is genuinely useful information at turnover time, and we will tell you which units fall into that category instead of treating them all and sending an invoice.",
    ],
    faq: [
      {
        q: "Can you service multiple units in one visit?",
        a: "Yes, and that is the most efficient way to book. The first mattress is $299 and each additional is $179–$199 depending on size, so a block of units costs meaningfully less than separate appointments.",
      },
      {
        q: "Can you work between lease periods on a tight turnaround?",
        a: "That is the normal case for us. Tell us the window and the number of units, and we will build the visit around it.",
      },
      {
        q: "Do you document what was done?",
        a: "Yes, per mattress, which most managers need for their records.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

/** The flagship service used for primary CTAs and the home page hero. */
export const flagshipService = services[0];