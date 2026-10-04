/**
 * Site images live in Cloudinary (cloud f69kw8ao) and are displayed by URL.
 * They are decorative: alt text and captions describe what is visible, with no
 * claims about where or when a photo was taken and no before/after framing.
 */
export type SiteImage = {
  id: string;
  url: string;
  alt: string;
  caption: string;
  tag: "equipment" | "mattress" | "process";
};

const C = "https://res.cloudinary.com/f69kw8ao/image/upload";

export const siteImages: SiteImage[] = [
  {
    id: "kit",
    url: `${C}/v1789519656/IMG_3135_wyon0z.jpg`,
    alt: "Vapor clean steam cleaner standing beside a mattress vacuum with UV-C light",
    caption:
      "The two tools that define the service: a dry vapor steam cleaner and a mattress vacuum with UV-C light.",
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
    id: "stains",
    url: `${C}/v1789519656/IMG_3125_bygvjs.jpg`,
    alt: "Mattress with urine staining across the sleep surface",
    caption: "Urine staining across a sleep surface, the kind of mark enzyme treatment is for.",
    tag: "mattress",
  },
  {
    id: "stains-angle-2",
    url: `${C}/v1789519657/IMG_3126_rygemm.jpg`,
    alt: "Stained mattress quilting and seams, seen from the side",
    caption: "Staining that runs through the quilting and into the seams.",
    tag: "mattress",
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
    id: "avocado-topper",
    url: `${C}/v1789519658/IMG_3509_mtnyw7.jpg`,
    alt: "Avocado mattress with its foam topper",
    caption: "An Avocado mattress with its foam topper.",
    tag: "mattress",
  },
  {
    id: "avocado",
    url: `${C}/v1789519658/IMG_3139_u0p91f.jpg`,
    alt: "Avocado mattress",
    caption: "An Avocado mattress. Dry vapor steam is a low-moisture method, and the bed stays unmade until it is dry to the touch.",
    tag: "mattress",
  },
];

export const heroImage = siteImages[1];
const byId = (id: string) => siteImages.find((i) => i.id === id)!;
export const featuredPair = [byId("stains"), byId("avocado-topper")];
export { byId as imageById };