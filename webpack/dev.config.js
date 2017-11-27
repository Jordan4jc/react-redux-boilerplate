const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Boilerplate',
      template: './src/html/index.html',
      inject: true
    })
  ]
});
