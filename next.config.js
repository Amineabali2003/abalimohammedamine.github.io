/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
  },
  basePath: isProd ? '/abalimohammedamine.github.io' : '',
  assetPrefix: isProd ? '/abalimohammedamine.github.io/' : '',
};

module.exports = nextConfig;