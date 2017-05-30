/* eslint-env node */
const config = {
  target: "web",
  entry: {
    index: "./src/index.ts",
  },
  output: {
    filename: "[name].js",
    path: `${__dirname}`,
    sourceMapFilename: "[file].map",
    library: "react-kwik-jss",
    libraryTarget: "umd",
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
  externals: {
    "jss-theme-reactor": {
      commonjs: "jss-theme-reactor",
      commonjs2: "jss-theme-reactor",
      amd: "jss-theme-reactor",
      root: "jss-theme-reactor",
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
};

module.exports = config;
