/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PASARGAD_NODE_URL: process.env.PASARGAD_NODE_URL,
    PASARGAD_API_KEY: process.env.PASARGAD_API_KEY,
    JWT_SECRET: process.env.JWT_SECRET
  }
}
module.exports = nextConfig
