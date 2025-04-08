/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: process.env.VERCEL ? '/vercel/path0' : undefined,
  }
}

module.exports = nextConfig
