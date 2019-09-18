const withCss = require('@zeit/next-css');
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

const { resolve } = require('./next.aliases');

const nextConfig = {
  webpack(config) {
    Object.assign(config.resolve, {
      alias: {
        ...config.resolve.alias,
        ...resolve.alias,
      },
    });

    return config;
  },
};

module.exports = withPlugins([
  [withOptimizedImages],
  [withCss],
], nextConfig);
