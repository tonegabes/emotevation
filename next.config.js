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
};

module.exports = nextConfig;
