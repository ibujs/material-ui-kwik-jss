import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import rollupTypescript from "rollup-plugin-typescript";
import typescript from "typescript";
import { rollup } from "rollup";
import pick from "lodash.pick";

const config = {
  entry: "src/index.ts",
  dest: "index.esm.js",
  format: "es",
  plugins: [resolve(), commonjs({
    include: "node_modules/**",
  }), rollupTypescript({ typescript })],
  external: ["jss-theme-reactor"],
  sourceMap: true,
};


rollup(pick(config, ["entry", "plugins", "external"])).then((bundle) => {
  bundle.write({
    dest: "index.js",
    sourceMap: true,
    format: "umd",
    moduleName: "react-kwik-jss",
    globals: { "jss-theme-reactor": "jss-theme-reactor" },
  });
});

export default config;
