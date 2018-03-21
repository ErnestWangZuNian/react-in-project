const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const resolve = dir => {
  return path.join(process.cwd(), dir);
};

const src = resolve("src");

module.exports = {
  entry: [path.resolve(__dirname, "src/main.js")],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".scss", ".less", ".css"],
    alias: {
      "@": src
    }
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: ["babel-loader"], exclude: /node_modules/ },
      {
        test: /\.bundle\.jsx$/,
        use: {
          loader: "bundle-loader",
          options: {
            lazy: true
          }
        }
      },
      {
        test: /\.css$/,

        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["style-loader", "css-loader"]
        })
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
    }),
    new HtmlWebpackPlugin({
      title: "Production",
      template: path.resolve(__dirname, "index.html")
    }),
    new ExtractTextPlugin("[name].styles.[id].[contenthash].css", {
      allChunks: false
    })
  ]
};
