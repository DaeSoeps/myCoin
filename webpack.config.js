// const path = require("path")

// module.exports = {
//   entry: "./src/index.tsx",
//   output: {
//     publicPath: "/",
//     path: path.resolve(__dirname, "/dist"),
//     filename: "bundled.js"
//   },
//   mode: "development",
//   devtool: "source-map",
//   devServer: {
//     port: 3000,
//     hot: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "14" } }]]
//           }
//         }
//       }
//     ]
//   }
// }

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
