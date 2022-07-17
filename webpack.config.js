const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const prod = argv.mode === "production";
  
  return {
  mode: prod ? "production" : "development",
  devtool: prod ? "hidden-source-map" : "eval",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    publicPath: "/",
    overlay: true,
    port: 8080,
    // stats: "errors-only",
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  }
};
