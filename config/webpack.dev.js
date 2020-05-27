const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        filename: "js/[name].[hash:8].js", // hotReload no chunkhash
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        port: '3000',
        contentBase: path.join(__dirname, '../public'),
        compress: true,
        historyApiFallback: true,
        hot: true,
        https: false,
        noInfo: false,
        open: true,
        proxy: {}
    }
});
