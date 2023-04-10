const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/app",
  distDir: "build",
  ...(isProd && {
    output: "standalone",
    assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
  }),
};

module.exports = nextConfig;
