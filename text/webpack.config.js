'use strict';
const path = require('path');

const { SourceMapDevToolPlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SplitByPathPlugin = require('webpack-split-by-path');

const ENV = process.env.NODE_ENV;
const isProd = ENV === 'production' || ENV === 'prod';

module.exports = {
  entry: {
    app: 'scripts/app.js',
    // app: 'scripts/global-sketch.js',
  },

  context: path.join(process.cwd(), 'src'),

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'scripts/[name].[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          ignore: [
            'node_modules',
            'assets',
            'test',
            'spec',
          ],
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
      },
    ],
  },

  plugins: [
    new SplitByPathPlugin([{
      name: 'vendor',
      path: path.join(__dirname, 'node_modules')
    }]),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      chunksSortMode: 'dependency',
    }),

    new ExtractTextPlugin({
      filename: 'css/[name].[hash].css',
      disable: !isProd,
    }),

    new CopyWebpackPlugin([{ from: 'public' }]),

    // exclude vendor files from being source mapped
    new SourceMapDevToolPlugin({
      filename: '[file].map',
      exclude: /vendor\.(.+)\.js/
    })
  ],

  resolve: {
    modules: ['node_modules', path.resolve(process.cwd(), 'src')],
    extensions: ['.js', 'scss'],
  },

  devServer: {
    contentBase: path.join(process.cwd(), 'public'),
    clientLogLevel: 'info',
    port: 8080,
    inline: true,
    historyApiFallback: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 500,
    },
  },
};
