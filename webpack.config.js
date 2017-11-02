var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
        //{ test: /\.css$/, use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})) },
        //{ test: /\.scss$/, use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})) },
        { test: /\.jsx?$/, loader: 'babel-loader', exclude: [/node_modules/, /public/] },
        { test: /\.jsx?$/, loader: 'eslint-loader', include: APP_DIR, enforce: 'pre' }
    ],
    loaders: [
      {
          test: /\.jsx?/,
          include: APP_DIR,
          loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
