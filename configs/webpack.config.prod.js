const helpers = require("./helpers");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = function () {
  return {
    target: "web",
    entry: [
      helpers.root("src/index")
    ],
    output: {
      path: helpers.root("/dist"),
      publicPath: "/rad2/",
      filename: "bundle.js",
      sourceMapFilename: "bundle.map"
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
        {from: "src/assets/icon", to: "assets/icon"},
        {from: "src/assets/fonts", to: "assets/fonts"},
        {from: "src/assets/img", to: "assets/img"},
        {from: "src/index.html", to: "./"}
      ]),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    node: {
      global: true,
      crypto: "empty",
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
};