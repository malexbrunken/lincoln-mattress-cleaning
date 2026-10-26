import { site, plainAnswer } from "@/lib/site";
import { priceText } from "@/lib/prices";
import { services } from "@/lib/services";
import { towns } from "@/lib/towns";
import { getPosts } from "@/lib/posts";
import { getYearPages } from "@/lib/academicYear";
import { getHostPages } from "@/lib/strHosts";
import { getAllergyPages } from "@/lib/allergySeason";
import { getNeighborhoodPages } from "@/lib/neighborhoods";

export const dynamic = "force-static";

const u = (p: string) => `${site.url}${p}`;

/** Plain-text summary for AI assistants, mirroring sleepsanitation.com/llms.txt. No promo here. */
export function GET() {
  const body = `# ${site.name}

> ${plainAnswer}

## Key facts
- Operated by Sleep Sanitation (https://sleepsanitation.com). Founder: Matthew Brunken (https://sleepsanitation.com/matthew-brunken).
- Service area: ${site.serviceRadius}
- Phone (call or text): ${site.phone}. Email: info@sleepsanitation.com. Hours: Monday–Friday, 9am–6pm; calls and texts are returned on weekends.
- Price: ${priceText.first} for the first mattress in any size. Normal stains, pet odor and ordinary urine accidents are included; a surcharge applies only to severe or biohazard cases. Each additional king mattress in the same visit is ${priceText.additionalKing} and each additional full or queen is ${priceText.additionalFullQueen}, each additional twin or kids bed is ${priceText.additionalKids}, and underside or full-surface treatment is ${priceText.underside} per mattress.
- Equipment: Italian Vapor Clean dry vapor steam machines (the Magnum XP with vac and the Desiderio as our main machines, plus the ProV 350 and Pro6 Duo for select applications), with steam output and pass speed adjusted to each mattress.
- A material inspection comes first: we read the law tag and check construction, fabric and stains before choosing the steam setting and pass speed.
- Seams, tufts, ridges and edges are steamed with low-moisture dry vapor steam, along with the top surface and all four sides.
- A JIGOO mattress vacuum with HEPA filtration lifts loosened debris and delivers UV-C light treatment.
- Enzymes are used for urine and organic odor. Organic cleaning methods are the default.
- Bed mites (house dust mites) are addressed with dry vapor steam heat at the surface and HEPA vacuuming.
- The two checks in every visit: a moisture check after the job; the built-in bed mite sensor on the JIGOO UV-C mattress vacuum.
- Every job is documented on a service summary: the mattress inspection, the sanitation performed (mattress surface temperature verified at 212°F or higher with a temperature gun) and technician confirmation. You receive a copy.
- The bed stays unmade until it is dry to the touch, and we run a moisture check before we leave.
- Technicians wear gloves and shoe booties, and equipment is cleaned and sanitized between jobs.
- Optional: 72-hour bedroom CO₂ testing is an optional service, booked on its own or added to a mattress visit. It's priced by quote, and it isn't a medical test.

## How to book
- Call or text ${site.phone}, or email info@sleepsanitation.com.
- Have ready: your town, how many mattresses and their sizes, anything that needs extra attention, and a few days and times that work.
- We confirm a time and your price. A visit takes about 1–2 hours per mattress.

## Scope
- Mattresses only. Surface sanitation of the mattress, not disinfection. Not a medical treatment or cure.
- Not bed bug or pest control. Not powered air, low-air-loss or alternating-pressure mattresses. We don't bill insurance.

## Parent company
- [Sleep Sanitation llms.txt](https://sleepsanitation.com/llms.txt) (full fact sheet, Knowledge Center and Markdown versions of pages)
- Current offers: ${u("/pricing")}

## Pages
- [Home](${u("/")})
- [Pricing](${u("/pricing")})
- [Services](${u("/services")})
${services.map((s) => `  - [${s.name}](${u(`/services/${s.slug}`)})`).join("\n")}
- [Service areas](${u("/service-areas")})
${towns.map((t) => `  - [${t.name}](${u(`/service-areas/${t.slug}`)})`).join("\n")}
- [FAQ](${u("/faq")})
- [About](${u("/about")})
- [Book: call, text or email](${u("/book")})
- [Contact](${u("/contact")})

## Guides
${getPosts().map((p) => `- [${p.title}](${u(`/guides/${p.slug}`)})`).join("\n")}

## The UNL academic year (students and parents)
- [Hub](${u("/academic-year")})
${getYearPages().map((p) => `  - [${p.h1}](${u(`/academic-year/${p.slug}`)})`).join("\n")}

## Airbnb and short-term rental hosts
- [Hub](${u("/airbnb-hosts")})
${getHostPages().map((p) => `  - [${p.h1}](${u(`/airbnb-hosts/${p.slug}`)})`).join("\n")}

## Allergy season in Lincoln
- [Hub](${u("/allergy-season")})
${getAllergyPages().map((p) => `  - [${p.h1}](${u(`/allergy-season/${p.slug}`)})`).join("\n")}

## Lincoln neighborhoods
- [Hub](${u("/neighborhoods")})
${getNeighborhoodPages().map((p) => `  - [${p.h1}](${u(`/neighborhoods/${p.slug}`)})`).join("\n")}

`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
