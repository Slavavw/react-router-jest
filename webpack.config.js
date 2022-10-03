const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './jsx/app.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: "#sourcemap",//Задает значение devtool, чтобы видеть правильный мэппинг для исходного кода JSX,  а не для транспилированного кода
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      exclude: /node_modules/,
      test: /\.jsx$/,
      query: {
        presets: ['react']
      }
    },
    {
      loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[local]__[hash:base64:5]'),
      test: /\.css$/,
      exclude: /node_modules/
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],

}
