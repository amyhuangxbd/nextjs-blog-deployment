/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const basePath = '/nextjs-blog-deployment'

const nextConfig = {
  basePath,
  output: 'export',
  env: {
    BASE_PATH: '/nextjs-blog-deployment'
  },
  // distDir: 'dist',
  images: {
    unoptimized: true,
  },
}
 
module.exports = nextConfig