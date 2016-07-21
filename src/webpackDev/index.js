
var path = require('path')
var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/main'
  ],
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new NpmInstallPlugin({
      dev: true,
      peerDependencies: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(process.cwd(), 'src'),
        query: {
          extends: path.join(__dirname, '../../.babelrc'),
          // cacheDirectory: true,
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}
