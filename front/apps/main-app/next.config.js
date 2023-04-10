const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NEXT_PUBLIC_REACT_STRICT_MODE === "true",
  swcMinify: true,
  distDir: "build",
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  ...(isProd && {
    output: "standalone",
    assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
  }),
};

module.exports = nextConfig;
