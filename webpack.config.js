const path = require('path')
// html 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 将css打包为单独文件的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";
// todo 为什么是undefined？
console.log(process.env.NODE_ENV)
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ].concat(devMode ? [] : [new MiniCssExtractPlugin()])
}
