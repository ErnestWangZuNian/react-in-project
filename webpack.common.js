const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "react-hot-loader/patch", // 激活HMR
    "webpack-dev-server/client",
    "webpack/hot/only-dev-server",
    path.resolve(__dirname, "src/main.js")
  ],
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Production",
      template: path.resolve(__dirname, "index.html")
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  // loaders
  module: {
    rules: [{ test: /\.jsx?$/, use: ["babel-loader"], exclude: /node_modules/ }]
  }
};
