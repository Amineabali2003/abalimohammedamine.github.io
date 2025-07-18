/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // 👈 Indispensable pour générer /out
  images: {
    unoptimized: true, // GitHub Pages ne supporte pas l'optimisation Next
  },
  basePath: isProd ? '/abalimohammedamine.github.io' : '',
  assetPrefix: isProd ? '/abalimohammedamine.github.io/' : '',
};

module.exports = nextConfig;