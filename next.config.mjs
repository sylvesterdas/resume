import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages: no server, so no ISR, redirects or image optimization.
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'www.minifyn.com',
      },
      {
        protocol: 'https',
        hostname: 'minifyn.com',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL
  },
};

export default withBundleAnalyzer(nextConfig);
