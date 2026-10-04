import type { NextConfig } from "next";
import { townRedirects } from "./src/lib/towns";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  outputFileTracingIncludes: {
    "/api/indexnow": ["./content/**/*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/f69kw8ao/**",
      },
    ],
  },
  async redirects() {
    return [
      // Legacy thin-site URL shapes, in case anything was indexed against them.
      { source: "/index.html", destination: "/", permanent: true },
      // 2026-10-03: 14 thin town pages merged into 4 area pages.
      ...Object.entries(townRedirects).map(([from, to]) => ({
        source: `/service-areas/${from}`,
        destination: `/service-areas/${to}`,
        permanent: true,
      })),
      { source: "/service-areas/gretna", destination: "/service-areas", permanent: true },
      // 2026-10-03: services renamed for accurate bed-mite wording.
      { source: "/services/dust-mite-treatment", destination: "/services/bed-mite-treatment", permanent: true },
      { source: "/services/bed-bug-allergen-reduction", destination: "/services/bed-mite-treatment", permanent: true },
      // 2026-10-03: we do not take UV-C readings; the readings guide was removed.
      { source: "/guides/uv-c-mattress-vacuum-readings", destination: "/services/uv-c-light-treatment", permanent: true },
      // 2026-10-04: UV-C service slug renamed to match "UV-C light treatment".
      { source: "/services/uv-c-post-treatment", destination: "/services/uv-c-light-treatment", permanent: true },
      // 2026-10-03: rental-turnover service removed (no landlord or tenant turnover service).
      { source: "/services/rental-property-mattress-turnover", destination: "/services", permanent: true },
      // Keep www and apex from competing as duplicate hosts.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lincolnmattresscleaning.com" }],
        destination: "https://lincolnmattresscleaning.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;