const merge = require('webpack-merge');
const webpack = require('webpack'); //访问内置的插件
const baseWebpackConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
      filename: 'js/[name].[chunkhash:16].js',
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: { // 如果没有options这个选项将会报错 No PostCSS Config found
                plugins: (loader) => [
                  require('postcss-import')({ root: loader.resourcePath }),
                  require('autoprefixer')(),
                  require('cssnano')() // 压缩css
                ]
              }
            },
            'sass-loader'
          ]
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename:'css/[name].[hash].css',
        chunkFilename:'css/[id].[hash].css'
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        inject: 'body',
        minify: {
          html5: true
        },
        hash: false
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 1000
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendor: {
              test: "vendor",
              name: "vendor"
          }
        }
      },
      minimizer: [new UglifyJsPlugin(), new OptimizeCSSPlugin()]
    }
});