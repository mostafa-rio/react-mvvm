const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  entry: {
    bundle: path.resolve(__dirname, 'src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,
    open: true, // open browser
    compress: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          { loader: MiniCssExtractPlugin.loader, options: {} },
          { loader: 'css-loader', options: { importLoaders: 0 } },
        ],
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              // "@babel/preset-typescript"
              ['@babel/preset-env', { targets: 'defaults' }],
            ],
          },
        },
      },
      {
        test: /\.(tsx|ts)$/i,
        use: 'ts-loader',
      },
      {
        test: /\.(png|svg|jpeg|jpg|webp)$/i,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'React MVVM Project',
      filename: 'index.html',
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
