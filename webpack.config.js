const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json'], // 设置查找文件后缀规则
    modules: [path.resolve('node_modules'), path.resolve('lib')], // webpack 解析模块时应该搜索的目录
    alias: {
      '@src': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: '/node_modules'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, // 是否开启 GZIP
    port: 8000,
    open: 'Chrome',
    inline: true,
    hot: true,
    historyApiFallback: true
  }
}