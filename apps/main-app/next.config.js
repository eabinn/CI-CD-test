/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/app",
  distDir: "build",
  ...(process.env.NODE_ENV === "production" && { output: "standalone" }),
};

module.exports = nextConfig;
