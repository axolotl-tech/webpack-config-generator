const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'BUNDLLEEEEE.js'
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    inline: true,
    hotOnly: true,
    publicPath: 'http://localhost:3000/dist/',
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api', '/auth'],
        target: 'http://localhost:4000'
      }
    ]
  }
};
