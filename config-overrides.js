const { override, addWebpackResolve } = require("customize-cra");
const platform = process.env.PLATFORM || "web";

function decorateWithPlatform(platform, currentExtensions) {
  return currentExtensions.flatMap((ext) => [`.${platform}${ext}`, `${ext}`]);
}

module.exports = override(
  addWebpackResolve({
    extensions: decorateWithPlatform(platform, [
      ".mjs",
      ".js",
      ".mts",
      ".ts",
      ".jsx",
      ".tsx",
      ".json",
    ]),
  }),
  (config) => {
    // This is so that decorateWithPlatform is consistent
    delete config.cache;

    return config;
  }
);
