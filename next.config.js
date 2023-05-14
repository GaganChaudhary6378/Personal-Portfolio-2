/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  webpack: (config, options) => {
    (config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    }),
      config.module.rules.push({
        test: /\.pdf$/i,
        type: "asset/source",
      });

    return config;
  },
};
