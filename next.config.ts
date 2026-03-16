import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/next.js-todo-app',
  assetPrefix: '/next.js-todo-app/',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
