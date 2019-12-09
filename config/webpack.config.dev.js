const webpack = require('webpack')
const path = require('path')
const WebPackMerge = require('webpack-merge')

const baseConfig = require('./webpack.config')

// 打包后文件位置
const distDir = path.resolve(__dirname, '../dist')

module.exports = WebPackMerge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      // 图片加载
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/,
        exclude: /node_modelues/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 小于 10k 转换成base64编码
              limit: 10000,
            }
          }
        ]
      },
    ]
  },
  devServer: {
    contentBase: distDir, // 打包后文件位置
    compress: false, // 开发环境不用gzip压缩
    port: 8008, // 端口
    hot: true, // 启用热替换
    hotOnly: true, // 编译成功后刷新
    // open: true, // 是否自动打开浏览器
    disableHostCheck: true, // 解决 127.0.0.1 指向其他域名错误
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
