const { override, addWebpackResolve } = require("customize-cra");

function decorateWithPlatform(platform, currentExtensions) {
  return currentExtensions.flatMap((ext) => [`.${platform}${ext}`, `${ext}`]);
}

const platform = process.env.PLATFORM || "web";

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
  })
);
