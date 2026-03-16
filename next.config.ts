import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/gdirk07/next.js-todo-app',
  assetPrefix: '/gdirk07/next.js-todo-app/',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
