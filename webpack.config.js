const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'Source/scripts/app.js'),
  output: {
    path: path.resolve(__dirname, 'wwwroot'),
    filename: 'bundle-webpack.js',

    library: 'app',
    libraryTarget: 'var',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['latest'],
        },
      },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
