/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/emotevation' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/emotevation/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  eslint: {
    // Completely disable ESLint during builds
    ignoreDuringBuilds: true,
    dirs: [] // Empty array to skip ESLint on all directories
  },
};

module.exports = nextConfig;
