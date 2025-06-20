/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  }
}

module.exports = nextConfig