const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");

// // Default
// module.exports = withPlugins([[withSass], [withImages]], {
//   webpack(config, options) {
//     config.resolve.modules.push(path.resolve("./"));
//     return config;
//   }
// });


module.exports = withPlugins([[withSass], [withImages]], {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
});