/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    trailingSlash: true,
    basePath: process.env.NODE_ENV === 'production' ? '/slope-nextjs' : undefined,
    assetPrefix: '/slope-nextjs',
    images: {
        unoptimized: true
    }
};

export default nextConfig;
