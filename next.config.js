/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();
const nextConfig = {};

module.exports = withNextIntl({
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
});
