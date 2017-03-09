const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const helpers = require("./helpers");
const DefinePlugin = require("webpack/lib/DefinePlugin");

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const appConfig = {
  "IndigoUiAssets": JSON.stringify("https://localhost:3000/static/js"),
  "CatalogApiUrl": JSON.stringify("https://localhost/catalogs/api"),
  "ProgramApiUrl": JSON.stringify("https://localhost/programs/api"),
  "AuthServerUrl": JSON.stringify("https://localhost/auth"),
  "TemplateApiRoot": JSON.stringify("/EmailTemplateApi")
};

const METADATA = webpackMerge(commonConfig({
  env: ENV,
  appConfig: appConfig
}).metadata, {
  host: HOST,
  ENV: ENV,
  appConfig: appConfig
});

module.exports = () => {
  return webpackMerge(commonConfig({env: ENV, appConfig: appConfig}), {
    devtool: "cheap-module-source-map",
    target: "web",
    plugins: [
      new DefinePlugin({
        "IndigoUiAssets": METADATA.appConfig.IndigoUiAssets,
        "CatalogApiUrl": METADATA.appConfig.CatalogApiUrl,
        "ProgramApiUrl": METADATA.appConfig.ProgramApiUrl,
        "AuthServerUrl": METADATA.appConfig.AuthServerUrl,
        "TemplateApiRoot": METADATA.appConfig.TemplateApiRoot,
        'ENV': JSON.stringify(METADATA.ENV),
        'process.env': {
          'ENV': JSON.stringify(METADATA.ENV),
          'NODE_ENV': JSON.stringify(METADATA.ENV)
        }
      }),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  });
};