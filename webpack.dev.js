/* eslint-disable */
const { DefinePlugin, HotModuleReplacementPlugin } = require("webpack");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const path = require("path");

const baseConfig = require("./webpack.config");

const {
  regex: { cssRegex, cssModuleRegex }
} = baseConfig.externals;

// Development module exports
module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    overlay: true,
    clientLogLevel: "silent",
    watchContentBase: true,
    port: 3000,
    compress: true,
    hot: true,
    overlay: false,
    historyApiFallback: false
  },
  module: {
    rules: [
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          {
            loader: require.resolve("style-loader")
          },
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              sourceMap: false
            }
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              ident: "postcss",
              sourceMap: false,
              plugins: () => [
                require("postcss-import"),
                require("postcss-preset-env")({
                  stage: 3
                })
              ]
            }
          }
        ]
      },
      {
        test: cssModuleRegex,
        use: [
          {
            loader: require.resolve("style-loader")
          },
          {
            loader: require.resolve("css-loader"),
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
                context: path.resolve(__dirname, "src")
              },
              importLoaders: 1,
              sourceMap: false
            }
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              ident: "postcss",
              sourceMap: false,
              plugins: () => [
                require("postcss-import"),
                require("postcss-preset-env")({
                  stage: 3
                })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
        BASE_URL: '"/"'
      }
    }),
    new HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
});
