const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index.jsx',

  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 工作目录
    compress: true, // 开启压缩
    port: 9000 // 端口
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `src/index.html`,
      title: 'My App',
      filename: 'index.html',
      projectPath: path.join(__dirname, 'dist')
    })
  ]
};
