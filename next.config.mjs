/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['aceternity.com', 'assets.aceternity.com'],
  },
}

export default nextConfig
