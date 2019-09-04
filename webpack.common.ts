import webpack from "webpack";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";

const entry: webpack.Entry = {
  content: "./src/content.ts",
  background: "./src/background.ts",
  popup: "./src/popup.tsx"
};

const output: webpack.Output = {
  path: path.resolve(__dirname, "dist/js"),
  filename: "[name].js"
};

const resolve: webpack.Resolve = {
  extensions: [".ts", ".tsx", ".js"]
};

const plugins: webpack.Plugin[] = [
  new CopyPlugin([
    { from: "src/manifest.json", to: "../" },
    { from: "src/popup/index.html", to: "../popup" }
  ])
];

const rules: webpack.RuleSetRule[] = [
  {
    test: /\.tsx?$/,
    loader: "ts-loader",
    exclude: /node_modules|\.d\.ts$/,
    options: { allowTsInNodeModules: true }
  },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: ["style-loader", "css-loader"]
  }
];

const config: webpack.Configuration = {
  mode: "development",
  devtool: "inline-source-map",

  entry,
  output,
  resolve,
  plugins,

  module: {
    rules
  }
};

export default config;
