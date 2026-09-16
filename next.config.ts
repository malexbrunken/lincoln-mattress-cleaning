import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
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