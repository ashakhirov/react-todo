/* eslint-disable */
const { HashedModuleIdsPlugin, NamedChunksPlugin, DefinePlugin } = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const isWsl = require('is-wsl');
const path = require('path');

const baseConfig = require('./webpack.config');

const {
  regex: {
    cssRegex,
    cssModuleRegex,
    imgRegex,
    svgRegex,
  },
  inlineSizeLimit,
} = baseConfig.externals;

// Production module exports
module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial',
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: !isWsl,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        parser: safePostCssParser,
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              sourceMap: false,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              sourceMap: false,
              plugins: () => [
                require('postcss-import'),
                require('postcss-preset-env')({
                  stage: 3,
                }),
                require('@fullhuman/postcss-purgecss')({
                  content: ['./**/*.html'],
                  css: ['./**/*.css'],
                  keyframes: true,
                }),
                require('cssnano'),
              ],
            },
          },
        ],
      },
      {
        test: cssModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              sourceMap: false,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              sourceMap: false,
              plugins: () => [
                require('postcss-import'),
                require('postcss-preset-env')({
                  stage: 3,
                }),
                require('@fullhuman/postcss-purgecss')({
                  content: ['./**/*.html'],
                  css: ['./**/*.css'],
                  keyframes: true,
                }),
                require('cssnano'),
              ],
            },
          },
        ],
      },
      {
        test: imgRegex,
        use: [{
          loader: require.resolve('url-loader'),
          options: {
            limit: parseInt(inlineSizeLimit),
            fallback: {
              loader: require.resolve('file-loader'),
              options: {
                name: 'images/[name].[hash:8].[ext]',
              },
            },
          },
        },
        {
          loader: require.resolve('image-webpack-loader'),
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65,
            },
            // optipng.enabled: false will disable optipng
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [0.65, 0.9],
              speed: 4,
            },
            gifsicle: {
              interlaced: false,
            },
            // the webp option will enable WEBP
            webp: {
              quality: 75,
            },
          },
        },
        ],
      },
      {
        test: svgRegex,
        use: [{
          loader: require.resolve('file-loader'),
          options: {
            name: 'images/[name].[hash:8].[ext]',
          },
        },
        {
          loader: require.resolve('image-webpack-loader'),
        },
        ],
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        BASE_URL: '"/"',
      },
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*'],
      verbose: true,
      dry: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new HashedModuleIdsPlugin({
      hashDigest: 'hex',
    }),
    new NamedChunksPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
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
        minifyURLs: true,
      },
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'initial',
      fileBlacklist: [/\.map$/, /hot-update\.js$/],
    }),
    new PreloadWebpackPlugin({
      rel: 'prefetch',
      include: 'asyncChunks',
    }),
    new GenerateSW({
      exclude: [
        /\.map$/,
        /img\/icons\//,
        /favicon\.ico$/,
        /manifest\.json$/,
      ],
    }),
  ],
});
