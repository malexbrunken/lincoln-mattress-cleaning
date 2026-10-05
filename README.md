# Lincoln Mattress Cleaning

The Lincoln, Nebraska local-search property for **Sleep Sanitation** — a mattress-only cleaning service using low-moisture dry vapor steam rather than standard wet extraction.

- Live domain: `lincolnmattresscleaning.com`
- Sister property: `omahamattresscleaning.com` (Omaha metro)
- National brand: `sleepsanitation.com` (franchise model)
- Secondary local domains in the same family: `omahagrillcleaning.com`, `elkhorngrillcleaning.com`

## Why this site exists

`sleepsanitation.com` is the right long-term national name, but a city domain ranks faster at the start. This repo is the Lincoln half of a two-domain local strategy: rank for "mattress cleaning Lincoln NE" and its neighborhoods while the national brand builds authority.

The differentiation running through every page: **low-moisture dry vapor steam** (maker rating 5 to 6% moisture content), UV-C light treatment and HEPA vacuuming. We do not take UV-C readings.

## Stack

| Piece | Choice |
| --- | --- |
| Framework | Next.js 16 App Router, TypeScript, Tailwind 4 |
| Content | `content/posts/*.md` + gray-matter (hub-and-spoke local SEO guides) |
| Images | Cloudinary (`res.cloudinary.com/f69kw8ao`) — displayed by URL, allowlisted in `next.config.ts` |
| Hosting | Vercel (Git integration + custom domain) |
| Booking | Call, text and pre-filled email cards (`src/components/BookOptions.tsx`) on /book and /contact; no form backend |

## Structure

```
src/app/
  page.tsx                     home (hero, method comparison, before/after, process, pricing)
  services/[slug]/             service pages (steam sanitation, comparison, dust mites, odor, UV-C, CO2, rentals)
  service-areas/[slug]/        Lincoln + 13 surrounding towns
  pricing/                     canonical Sleep Sanitation price list + estimate calculator
  gallery/                     real job photos (no UV-C readings; we don't take them)
  guides/                      hub-and-spoke content library
  faq/ about/ contact/         trust + conversion
  sitemap.ts robots.ts         SEO plumbing
src/lib/
  site.ts                      business facts, canonical pricing, comparison table
  services.ts                  service content model
  towns.ts                     service-area content model
  images.ts                    Cloudinary job images with alt text and captions
src/components/                Header, Footer, Icons, JsonLd, QuoteCalc
```

## Canonical pricing (keep identical to sleepsanitation.com)

| Service | Price |
|---|---|
| **Mattress Sanitation** | **$249 first mattress** |
| Dry-vapor sanitation | Included |
| UV-C / HEPA protocol | Included |
| Normal stain treatment | Included |
| Pet odor treatment | Included |
| **Ordinary urine accident treatment** | **Included** |
| Additional full/queen/king mattress | $199 |
| Additional kids bed (twin/full) | $149 |
| Underside/full-surface treatment | +$50–$75 |
| Severe or biohazard contamination | Custom surcharge |

Fall 2026 promotion: first mattress $199 (regular $249); any additional cleaning scheduled within 7 days of the first service is also $199.

If the national price list changes, update `src/lib/site.ts` and the pricing page copy together so every property stays in sync.

## Editorial rules

- Factual, neutral-to-positive. No superlatives we cannot substantiate.
- Never claim allergy/asthma treatment, remediation, or pest control. Bed bugs → refer to a licensed pest professional.
- Say so when replacement is the honest answer.
- One primary query and one conversion path per page; descriptive internal-link anchors.
- Keep pricing synchronized across pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Environment

```bash
CRON_SECRET=   # optional: bearer token for the IndexNow cron (/api/indexnow)
INDEXNOW_KEY=  # optional: overrides the public IndexNow key in public/<key>.txt
```

## Deploy notes

- Vercel project framework must be set to `nextjs` — a project created via the API without it can show READY while the custom domain 404s.
- Add the apex domain and `www` (redirect to apex) in Vercel → Domains.
- Use `src/app/icon.png` for the favicon; Turbopack rejects many hand-built `.ico` files.
- After HTTPS is green: verify in Google Search Console and submit `/sitemap.xml`.