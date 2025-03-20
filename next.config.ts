import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/wutuo' : '', // Set the basePath for GitHub Pages
  images: {
    unoptimized: true, // For static export, we need to unoptimize images
  },
  reactStrictMode: true,
};

export default nextConfig;
