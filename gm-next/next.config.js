/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: false,
  }
}

module.exports = nextConfig
