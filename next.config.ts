import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/wutuo' : '', // Set the basePath for GitHub Pages
  images: {
    unoptimized: true, // For static export, we need to unoptimize images
  },
  reactStrictMode: true,
  trailingSlash: true, // Add trailing slashes for better static site compatibility
  distDir: 'out', // Specify the build output directory
  // Remove any dynamic features
  experimental: {
    // Disable any features not compatible with static export
  },
};

export default nextConfig;
