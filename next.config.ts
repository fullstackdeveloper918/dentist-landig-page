import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ['randomuser.me'], // Add the domain for external images
  },
};

export default nextConfig;
