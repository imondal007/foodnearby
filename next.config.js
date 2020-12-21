const withPWA = require("next-pwa");

module.exports = withPWA({
  webpack: (config) => {
    config.node = {
      fs: "empty",
    };
    return config;
  },
  images: {
    domains: ["maps.googleapis.com"],
  },
  pwa: {
    dest: "public",
    scope: "/",
  },
});
