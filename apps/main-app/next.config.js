/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/app",
  distDir: "build",
};

module.exports = nextConfig;
