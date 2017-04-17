const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
      index: './index.js',
  },
  resolve: {
    extensions: [".js", ".json"],
    unsafeCache: true,
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].min.js"
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        }
      },
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
       { // Copy all src/ HTML and CSS assets to /dist/src
         context: '.',
         from: '*.{html,css}',
         to: '',
       },
    ]),
  ]
};
