/**
 * Job photos live in Cloudinary (cloud f69kw8ao) and are displayed by URL.
 * Keep alt text factual — these are real jobs, so describe what is visible.
 */
export type JobImage = {
  id: string;
  url: string;
  alt: string;
  caption: string;
  tag: "equipment" | "before" | "after" | "process" | "verification";
};

const C = "https://res.cloudinary.com/f69kw8ao/image/upload";

export const jobImages: JobImage[] = [
  {
    id: "kit",
    url: `${C}/v1789519656/IMG_3135_wyon0z.jpg`,
    alt: "Vapor clean steam cleaner standing beside a mattress vacuum with UV-C light",
    caption:
      "The two tools that define the service: a dry vapor steam cleaner and a UV-C mattress vacuum with a surface reader.",
    tag: "equipment",
  },
  {
    id: "steam-on-mattress",
    url: `${C}/v1789519655/IMG_3136_wolwcq.jpg`,
    alt: "Dry vapor steam cleaner applied to the surface of a mattress",
    caption: "Dry vapor steam applied across the sleep surface — low moisture, calibrated passes.",
    tag: "process",
  },
  {
    id: "steam-fog",
    url: `${C}/v1789519657/IMG_3129_aaawga.jpg`,
    alt: "Visible steam rising off a mattress during dry vapor steam treatment",
    caption: "Visible vapor lifting off the surface. This is heat doing the work — not water soaking in.",
    tag: "process",
  },
  {
    id: "before-stains",
    url: `${C}/v1789519656/IMG_3125_bygvjs.jpg`,
    alt: "Dirty mattress before cleaning showing dog and child urine staining",
    caption: "Before: a mattress with pet and child urine staining across the sleep surface.",
    tag: "before",
  },
  {
    id: "before-angle-2",
    url: `${C}/v1789519657/IMG_3126_rygemm.jpg`,
    alt: "Second angle of the same stained mattress before cleaning",
    caption: "Before, second angle — the staining ran through the quilting and into the seams.",
    tag: "before",
  },
  {
    id: "verification-zero",
    url: `${C}/v1789519659/IMG_3133_gf7wh4.jpg`,
    alt: "UV-C mattress vacuum reader displaying a score of 0 after cleaning",
    caption: "After: the same UV-C vacuum reader that showed a high reading before treatment reads 0.",
    tag: "verification",
  },
  {
    id: "serta-tag",
    url: `${C}/v1789519644/IMG_3134_sfjryq.jpg`,
    alt: "Close-up of a Serta Perfect Sleeper mattress law tag",
    caption:
      "We read the law tag first. Construction and fiber content decide nozzle distance, pass speed, and temperature.",
    tag: "process",
  },
  {
    id: "after-avocado-topper",
    url: `${C}/v1789519658/IMG_3509_mtnyw7.jpg`,
    alt: "Cleaned Avocado mattress with its foam topper after sanitation",
    caption: "After: an Avocado mattress with its foam topper, sanitized and reset.",
    tag: "after",
  },
  {
    id: "after-avocado",
    url: `${C}/v1789519658/IMG_3139_u0p91f.jpg`,
    alt: "Cleaned Avocado mattress after mattress sanitation",
    caption: "After: the same Avocado mattress — no wet core, no chemical residue, no waiting 48 hours.",
    tag: "after",
  },
];

export const heroImage = jobImages[1];
export const beforeAfterPair = { before: jobImages[3], after: jobImages[7] };