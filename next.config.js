/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    appDir: true,
  }
}

module.exports = async () => {
  return nextConfig
}
