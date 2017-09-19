var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Pandaemonium',
    template: './src/index.ejs'
  })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /(phaser)\.min\.js/,
        loader: 'script-loader'
      }
    ]
  },
  resolve: {
    alias: {
      phaser$: path.resolve(__dirname, 'bower_components/phaser/build/phaser.min.js')
    }
  }
};
