var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'app'),
  devtool: 'cheap-module-eval-source-map',
  entry: [
     //'react-hot-loader/patch',
    // 'webpack-hot-middleware/client',
    './js/index.js'
  ],
  devServer: {
   contentBase: path.join(__dirname, 'app'),
   inline: true
  },
  output: {
    path: path.join(__dirname, 'app'),
    filename: './bundle.js'
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /.js?$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  },
};
