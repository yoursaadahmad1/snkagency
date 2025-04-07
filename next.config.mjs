/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : undefined,
  trailingSlash: true,
  basePath: isProd ? '/slope-nextjs' : '',
  assetPrefix: isProd ? '/slope-nextjs/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
