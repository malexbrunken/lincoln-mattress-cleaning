import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { towns } from "@/lib/towns";
import { getPosts } from "@/lib/posts";
import { getYearPages } from "@/lib/academicYear";
import { getHostPages } from "@/lib/strHosts";
import { getAllergyPages } from "@/lib/allergySeason";

export default function sitemap(): MetadataRoute.Sitemap {
  // Fixed dates so IndexNow's 48-hour lastmod window only picks up real changes.
  const now = new Date("2026-10-03");
  const statics = ["", "/services", "/pricing", "/service-areas", "/gallery", "/about", "/faq", "/guides", "/contact", "/privacy-policy"];
  return [
    ...statics.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...towns.map((t) => ({
      url: `${site.url}/service-areas/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    { url: `${site.url}/academic-year`, lastModified: new Date("2026-10-03"), changeFrequency: "monthly" as const, priority: 0.8 },
    ...getYearPages().map((p) => ({
      url: `${site.url}/academic-year/${p.slug}`,
      lastModified: new Date(p.updated ?? p.published),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    { url: `${site.url}/airbnb-hosts`, lastModified: new Date("2026-10-03"), changeFrequency: "monthly" as const, priority: 0.8 },
    ...getHostPages().map((p) => ({
      url: `${site.url}/airbnb-hosts/${p.slug}`,
      lastModified: new Date(p.updated ?? p.published),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    { url: `${site.url}/allergy-season`, lastModified: new Date("2026-10-03"), changeFrequency: "monthly" as const, priority: 0.8 },
    ...getAllergyPages().map((p) => ({
      url: `${site.url}/allergy-season/${p.slug}`,
      lastModified: new Date(p.updated ?? p.published),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...getPosts().map((p) => ({
      url: `${site.url}/guides/${p.slug}`,
      lastModified: new Date(p.updated ?? p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}