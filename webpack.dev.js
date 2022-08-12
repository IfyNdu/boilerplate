const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {

  devServer: {
    port: 6969,
  },
  devtool: 'inline-source-map',
  mode: 'development'
});