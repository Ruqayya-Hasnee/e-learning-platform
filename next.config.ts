import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb", // ✅ Increased body size limit for file uploads
    },
  },

  eslint: {
    ignoreDuringBuilds: true, // Ignores linting errors during builds
  },
};

export default nextConfig;
