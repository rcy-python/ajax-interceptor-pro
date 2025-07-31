const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  entry: './main/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, "./dist"),
    publicPath: './dist/',
  },
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { sourceMaps: true }
        }
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, './main'),
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|ttf)$/,
        type: 'asset/resource'  // 使用 Webpack 5 内置资源模块
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  devServer: {
    open: true,
    static: {
      directory: __dirname
    },
    watchFiles: {
      options: {
        ignored: /node_modules/,
        usePolling: false    // 禁用轮询（除非在虚拟机）
      }
    },
    port: 9001,
    hot: true,
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ["json", "javascript"],
    }),
  ]
};