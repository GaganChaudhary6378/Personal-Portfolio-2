/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },
};
