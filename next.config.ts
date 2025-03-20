import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/wutuo' : '', // Set the basePath for GitHub Pages
  images: {
    unoptimized: true, // For static export, we need to unoptimize images
  },
  reactStrictMode: true,
  trailingSlash: true, // Add trailing slashes for better static site compatibility
  // Configure to handle 404 pages correctly
  async redirects() {
    return [
      {
        source: '/404',
        destination: '/404.html',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
