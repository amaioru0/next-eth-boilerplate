/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ }
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
