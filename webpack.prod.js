/* eslint-disable */
const { DefinePlugin } = require("webpack");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const safePostCssParser = require("postcss-safe-parser");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const merge = require("webpack-merge");
const isWsl = require("is-wsl");
const path = require("path");

const baseConfig = require("./webpack.config");

const {
  regex: { cssRegex, cssModuleRegex }
} = baseConfig.externals;
const PublicUrl = "/react-todo/";

// Production module exports
module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "static/js/[name].[contenthash:8].js",
    chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
    publicPath: PublicUrl
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        },
        parallel: !isWsl,
        cache: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: safePostCssParser,
          map: {
            inline: false,
            annotation: true
          }
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: "chunk-vendors",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: "initial"
        },
        common: {
          name: "chunk-common",
          minChunks: 2,
          priority: -20,
          chunks: "initial",
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: true
  },
  module: {
    rules: [
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
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
                }),
                require("@fullhuman/postcss-purgecss")({
                  content: ["./**/*.html"],
                  css: ["./**/*.css"],
                  keyframes: true
                }),
                require("cssnano")
              ]
            }
          }
        ]
      },
      {
        test: cssModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
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
                }),
                require("@fullhuman/postcss-purgecss")({
                  content: ["./**/*.html"],
                  css: ["./**/*.css"],
                  keyframes: true
                }),
                require("cssnano")
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
        NODE_ENV: '"production"',
        BASE_URL: `${PublicUrl}`
      }
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
      verbose: true,
      dry: false
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css",
      chunkFilename: "static/css/[name].[contenthash:8].chunk.css"
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new GenerateSW({
      clientsClaim: true,
      exclude: [/\.map$/, /asset-manifest\.json$/],
      importWorkboxFrom: "cdn",
      navigateFallback: PublicUrl + "/index.html",
      navigateFallbackBlacklist: [new RegExp("^/_"), new RegExp("/[^/?]+\\.[^/]+$")]
    })
  ]
});
