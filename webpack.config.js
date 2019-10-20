/* eslint-disable */
const path = require('path');
const { ProgressPlugin } = require('webpack');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const regexMap = {
  jsTsRegex: /\.(js|jsx|ts|tsx)$/,
  fontRegex: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
  cssRegex: /\.css$/,
  cssModuleRegex: /\.module\.css$/,
  imgRegex: /\.(png|jpe?g|gif|webp)$/i,
  svgRegex: /\.(svg)(\?.*)?$/,
};
const inlineSizeLimit = '10000';

// Development module exports
module.exports = {
  externals: {
    regex: regexMap,
    inlineSizeLimit,
  },
  entry: {
    main: './src',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [
      PnpWebpackPlugin,
    ],
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: regexMap.jsTsRegex,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: require.resolve('eslint-loader'),
            options: {
              cache: true,
              eslintPath: require.resolve('eslint'),
              extensions: ['.js', '.jsx', '.ts', '.tsx'],
              resolvePluginsRelativeTo: __dirname,
            },
          },
        ],
      },
      {
        test: regexMap.jsTsRegex,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: require.resolve('cache-loader'),
            options: {
              cacheDirectory: path.resolve(__dirname, 'node_modules', '.cache', 'babel-loader'),
            },
          },
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                [
                  require.resolve('@babel/preset-env'), {
                    modules: false,
                    corejs: {
                      version: 3,
                      proposals: true,
                    },
                    useBuiltIns: 'usage',
                  },
                ],
                require.resolve('@babel/preset-react'),
              ],
              plugins: [
                [require.resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
                [require.resolve('@babel/plugin-proposal-class-properties'), { loose: true }],
                [require.resolve('@babel/plugin-proposal-private-methods'), { loose: true }],
              ],
            },
          },
        ],
      },
      {
        test: regexMap.fontRegex,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: parseInt(inlineSizeLimit),
              fallback: {
                loader: require.resolve('file-loader'),
                options: {
                  name: 'fonts/[name].[hash:8].[ext]',
                },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new ProgressPlugin(),
    new CopyWebpackPlugin([{
      from: './public',
      to: './',
      toType: 'dir',
    }]),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: '/',
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);
        const entrypointFiles = entrypoints.main.filter(fileName => !fileName.endsWith('.map'));

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        };
      },
    }),
  ],
};
