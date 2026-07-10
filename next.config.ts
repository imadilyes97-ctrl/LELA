import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 750, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
      {
        protocol: "https",
        hostname: "**.vercel.app",
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@supabase/supabase-js",
      "date-fns",
    ],
  },
};

export default nextConfig;
