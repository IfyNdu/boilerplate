const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = merge(common, {

  devtool: 'source-map',
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        mangle: true,
        parallel: true
      }),
      new CssMinimizerPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          chunks: 'all',
          enforce: true,
          name: 'styles',
          test: /\.css$/
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
});