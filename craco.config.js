const path = require("path");

module.exports = {
  webpack: {
    alias: {
      icons: path.resolve(__dirname, "public/icons"),
      utils: path.resolve(__dirname, "src/utils"),
    },
  },
};