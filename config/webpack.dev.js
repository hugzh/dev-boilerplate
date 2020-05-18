const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        filename: "js/[name].[hash:16].js", // hotReload no chunkhash
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        inject: 'body',
        minify: {
          html5: true
        },
        hash: false
      }),
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