const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    "react-hot-loader/patch", // 激活HMR
    "webpack-dev-server/client",
    "webpack/hot/only-dev-server",
    path.resolve(__dirname, "src/main.js")
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  // loaders
  module: {
    rules: [
      { test: /\.jsx?$/, use: ["babel-loader"], exclude: /node_modules/ },
      {
        test: /\.bundle\.jsx$/,
        use: "bundle-loader"
      },
      {
        test: /\.css$/,
        // use: {
        //   loader: "css-loader",
        //   options: {
        //     modules: true,
        //     localIdentName: "[path][name]__[local]--[hash:base64:5]"
        //   }
        // }
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ["style-loader", "css-loader"]
        })
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[local]--[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader"
          }
        ]
        // use: ["style-loader", "css-loader", "sass-loader"]
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   //resolve-url-loader may be chained before sass-loader if necessary
        //   use: ["css-loader", "sass-loader"]
        // })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Production",
      template: path.resolve(__dirname, "index.html")
    }),
    new ExtractTextPlugin("[name].styles.[id].[contenthash].css", {
      allChunks: false
    })
  ]
};
