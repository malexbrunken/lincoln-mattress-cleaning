/**
 * Last-modified dates (YYYY-MM-DD) for pages whose content lives in code rather than
 * markdown front matter. Used by the sitemap <lastmod> and by WebPage `dateModified`
 * schema, so both always agree. Bump a path's date when its visible content changes.
 * Markdown pages (guides, hubs' child pages) use their own `updated` field instead.
 */
export const PAGE_UPDATED: Record<string, string> = {
  "": "2026-10-04",
  "/services": "2026-10-04",
  "/pricing": "2026-10-04",
  "/service-areas": "2026-10-04",
  "/gallery": "2026-10-04",
  "/about": "2026-10-04",
  "/faq": "2026-10-04",
  "/guides": "2026-10-04",
  "/contact": "2026-10-04",
  "/privacy-policy": "2026-10-04",
  "/academic-year": "2026-10-04",
  "/airbnb-hosts": "2026-10-04",
  "/allergy-season": "2026-10-04",
  "/knowledge-center": "2026-10-04",
};

/** Service pages and service-area pages are generated from src/lib; one date each set. */
export const SERVICES_UPDATED = "2026-10-04";
export const TOWNS_UPDATED = "2026-10-04";

export const updatedFor = (path: string) => PAGE_UPDATED[path] ?? "2026-10-04";

