/* eslint-disable */
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
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

// Development module exports
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
    overlay: true,
    clientLogLevel: 'silent',
    watchContentBase: true,
    compress: true,
    hot: true,
    historyApiFallback: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
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
              ],
            },
          },
        ],
      },
      {
        test: cssModuleRegex,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
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
              ],
            },
          },
        ],
      },
      {
        test: imgRegex,
        use: [
          {
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
        ],
      },
      {
        test: svgRegex,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              name: 'images/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        BASE_URL: '"/"',
      },
    }),
    new HotModuleReplacementPlugin(),
    new StylelintPlugin({
      configFile: path.resolve(__dirname, '.stylelintrc'),
      context: path.resolve(__dirname, 'src'),
      files: '**/*.css',
      failOnError: false,
      quiet: false,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
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
  ],
});
