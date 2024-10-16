/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverActions: true,
  },
  env:{
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  }
};

export default nextConfig;
