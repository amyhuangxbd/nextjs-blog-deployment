/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: '/nextjs-blog-deployment',
  output: 'export',
  env: {
    BASE_PATH: '/nextjs-blog-deployment'
  },
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Add GLSL file handling
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/,
      use: 'webpack-glsl-loader',
      exclude: /node_modules/,
    });

    // Ensure resolve extensions include .glsl
    config.resolve.extensions.push('.glsl', '.vs', '.fs');

    return config;
  },
}
 
module.exports = nextConfig