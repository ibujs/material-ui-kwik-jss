/* eslint-env node */
const config = {
  target: "web",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: `${__dirname}`,
    sourceMapFilename: "[file].map",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
};

module.exports = config;
