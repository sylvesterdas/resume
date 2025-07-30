import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['i.ibb.co', 'cdn.hashnode.com'],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    HASHNODE_PUBLICATION_ID: process.env.HASHNODE_PUBLICATION_ID,
    HASHNODE_ACCESS_TOKEN: process.env.HASHNODE_ACCESS_TOKEN
  }
};

export default withBundleAnalyzer(nextConfig);
