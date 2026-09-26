import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
  async redirects() {
    return [
      { source: '/blog', destination: 'https://www.minifyn.com/blog', permanent: true },
      { source: '/blog/:slug*', destination: 'https://www.minifyn.com/blog/:slug*', permanent: true },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
