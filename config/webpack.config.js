// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')

// 打包后文件位置
const distDir = path.resolve(__dirname, '../dist')
// 源文件目录
const srcDir = path.resolve(__dirname, '../src')
// 根目录
const rootDir = path.resolve(__dirname, '../')

module.exports = {
  entry: path.resolve(srcDir, 'index'),
  output: {
    filename: '[name].[hash].js',
    path: distDir
  },
  resolve: {
    // 配置解析文件拓展名
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    // 配置别名
    alias: {
      '@': path.resolve(srcDir),
      '@styles': path.resolve(srcDir, 'styles'),
      '@utils': path.resolve(srcDir, 'utils'),
      '@pages': path.resolve(srcDir, 'pages'),
      '@components': path.resolve(srcDir, 'components')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      // 字体加载
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modelues/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, 'public/index.html'),
      filename: 'index.html'
    }),
    new WebpackBuildNotifierPlugin({
      title: '项目构建完成',
      logo: path.resolve(rootDir, 'public/favicon.ico'),
      suppressSuccess: true
    })
  ]
}
