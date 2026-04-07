import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.zoho.com",
      },
      {
        protocol: "https",
        hostname: "**.zohopublic.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
  // Allow dynamic product pages with static export
  trailingSlash: true,
};

export default nextConfig;
