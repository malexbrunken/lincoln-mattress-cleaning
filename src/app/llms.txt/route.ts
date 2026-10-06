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
- ${site.name} is operated by ${site.parentBrand} (https://sleepsanitation.com). Phone: ${site.phone}. Hours: ${site.hours}.
- Service area: ${site.serviceRadius}
- Method: low-moisture dry vapor steam, HEPA vacuuming and UV-C light treatment, with enzyme treatment for urine and organic odor. Bed mites (house dust mites) are treated with steam heat and HEPA vacuuming.
- The two checks in every visit: the bed mite sensor on our UV-C vacuum, and a moisture check after the job.
- Optional: 72-hour bedroom CO₂ testing, booked on its own or added to a visit, priced by quote. Not a medical test. See ${u("/services/co2-bedroom-testing")}.
- After the visit, the bed stays unmade until it is dry to the touch.
- Hygiene: gloves, shoe booties and equipment disinfected between jobs.
- Price: ${priceText.first} for the first mattress, any size, with normal stains, pet odor and ordinary urine accidents included. Each additional full, queen or king mattress is ${priceText.additionalLarge}; each additional kids bed (twin/full) is ${priceText.additionalKids}. Underside/full-surface treatment is ${priceText.underside} per mattress. See ${u("/pricing")} for current offers.

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

## What we don't claim
Mattress sanitation is about the mattress, not your health: no medical claims, no sterilization, no pest control and no drying-time promises.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
