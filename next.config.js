/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/portifolio',
    assetPrefix: '/portifolio/',
}

module.exports = nextConfig
