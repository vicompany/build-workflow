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
          presets: [
            ['latest', {
              es2015: {
                // Disable module to enable tree shaking
                // http://www.2ality.com/2015/12/webpack-tree-shaking.html
                "transform-es2015-modules-commonjs": false,
              }
            }],
          ],
        },
      },
    ],
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
  ],
};
