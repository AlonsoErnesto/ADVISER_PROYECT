import type { NextConfig } from 'next';

import withBundleAnalyzer from '@next/bundle-analyzer';

// Initialize the bundle analyzer with options
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// Apply the bundle analyzer to the Next.js config
export default bundleAnalyzer(nextConfig);
