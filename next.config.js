/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd && !isVercel ? '/abalimohammedamine.github.io' : '',
  assetPrefix: isProd && !isVercel ? '/abalimohammedamine.github.io/' : '',
};

module.exports = nextConfig;