/* eslint-disable */
const path = require('path');
const { ProgressPlugin, NamedModulesPlugin } = require('webpack');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
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
  // to automatically find tsconfig.json
  context: __dirname,
  externals: {
    regex: regexMap
  },
  entry: {
    main: './src',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
    strictExportPresence: true,
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        enforce: 'pre',
        test: regexMap.jsTsRegex,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: require.resolve('eslint-loader'),
            options: {
              eslintPath: require.resolve('eslint'),
              cache: true
            },
          },
        ],
      },
      {
        test: regexMap.jsTsRegex,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            [
              require.resolve('@babel/preset-env'), {
                corejs: 3,
                useBuiltIns: 'usage',
              },
            ],
            require.resolve('@babel/preset-typescript'),
            require.resolve('@babel/preset-react')
          ],
          plugins: [
            require.resolve('@babel/plugin-proposal-class-properties'),
            require.resolve("@babel/plugin-syntax-dynamic-import")
          ],
          cacheDirectory: true,
          cacheCompression: false,
          compact: true,
        },
      },
      {
        test: regexMap.imgRegex,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: parseInt(inlineSizeLimit),
              fallback: {
                loader: require.resolve('file-loader'),
                options: {
                  name: 'static/images/[name].[hash:8].[ext]',
                },
              },
            },
          },
        ],
      },
      {
        test: regexMap.svgRegex,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/images/[name].[hash:8].[ext]',
            },
          }
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
                  name: 'static/fonts/[name].[hash:8].[ext]',
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
    new NamedModulesPlugin(),
    new ProgressPlugin(),
    new CleanTerminalPlugin(),
    new CopyWebpackPlugin([
      {
        from: './public/favicon.ico',
        to: './',
      },
      {
        from: './public/index.html',
        to: './'
      },
      {
        from: './public/manifest.json',
        to: './'
      },
      {
        from: './public/robots.txt',
        to: './'
      },
      {
        from: './public/images',
        to: './static/images'
      }
    ]),
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
    // You can remove this if you don't use Moment.js:
    // new IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ForkTsCheckerWebpackPlugin(PnpWebpackPlugin.forkTsCheckerOptions())
  ],
};
