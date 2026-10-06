import { PAGE_UPDATED, SERVICES_UPDATED } from "@/lib/dates";
import { getPosts } from "@/lib/posts";
import { getYearPages } from "@/lib/academicYear";
import { getHostPages } from "@/lib/strHosts";
import { getAllergyPages } from "@/lib/allergySeason";
import { getNeighborhoodPages } from "@/lib/neighborhoods";

/**
 * /knowledge-center lists every hub, guide and service page, so its lastmod and
 * dateModified are the latest of its own date (PAGE_UPDATED), SERVICES_UPDATED and
 * every listed guide's `updated` (or published) date.
 */
export function kcUpdated(): string {
  const dates = [
    PAGE_UPDATED["/knowledge-center"],
    SERVICES_UPDATED,
    ...getPosts().map((p) => p.updated ?? p.date),
    ...[...getYearPages(), ...getHostPages(), ...getAllergyPages(), ...getNeighborhoodPages()].map((p) => p.updated ?? p.published),
  ];
  return dates.map((d) => String(d).slice(0, 10)).sort().at(-1)!;
}
