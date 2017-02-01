const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'Source/scripts/app-webpack.js'),
  output: {
    path: path.resolve(__dirname, 'wwwroot'),
    filename: 'bundle-webpack.js',

    library: 'app',
    libraryTarget: 'var',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
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

      {
        test: /\.scss*/,
        // https://webpack.github.io/docs/stylesheets.html#styles-from-initial-chunks-into-separate-css-output-file
        use: ExtractTextPlugin.extract([{
          loader: 'css-loader',
          options: {
            minimize: true,
          },
        }, {
          loader: 'sass-loader',
        }]),
      },
    ],
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    new ExtractTextPlugin({
      filename: 'style-webpack.css',
      allChunks: true,
    }),
  ],
};
