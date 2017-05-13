/* eslint-env node */
const config = {
  target: "web",
  entry: {
    index: "./src/index.tsx",
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
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
};

module.exports = config;
