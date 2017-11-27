const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = merge(baseConfig, {
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './public/images/favicon.png',
      prefix: 'icons/',
      inject: true,
      title: 'Boilerplate',
    }),
    new HtmlWebpackPlugin({
      title: 'Boilerplate',
      template: './src/html/index.html',
      inject: true
    })
  ]
});
