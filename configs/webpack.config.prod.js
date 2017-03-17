const helpers = require("./helpers");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const GLOBALS = {
  "process.env.NODE_ENV": JSON.stringify("production")
};

module.exports = function () {
  return {
    target: "web",
    devtool: "source-map",
    entry: [
      helpers.root("src/index")
    ],
    output: {
      path: helpers.root("/dist"),
      publicPath: "/rad2/",
      filename: "bundle.js"
    },
    resolve: {
      extensions: [".js", ".json"],
      modules: [helpers.root("src"), helpers.root("node_modules")]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: helpers.root("src"),
          use: ["babel-loader"]
        },
        {
          test: /\.json$/,
          use: "json-loader"
        },
        {
          test: /\.css$/,
          use: ["to-string-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: ["raw-loader", "sass-loader"]
        },
        {
          test: /\.html$/,
          use: "raw-loader",
          exclude: [helpers.root("src/index.html")]
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: "file-loader"
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
          use: "file-loader"
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {from: "src/assets/icons", to: "assets/icons"},
        {from: "src/assets/fonts", to: "assets/fonts"},
        {from: "src/assets/images", to: "assets/images"},
        {from: "src/index.html", to: "./"},
        {from: "src/assets/webconfigs/web.config", to: "./"}
      ]),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin(GLOBALS),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]
  };
};