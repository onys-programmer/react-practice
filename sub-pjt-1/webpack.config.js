const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: /\.index.js?x/,
  mode: 'development',
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
}
