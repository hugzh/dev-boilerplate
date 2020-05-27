const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC_PATH = path.resolve(__dirname, '../src');
const DIST_PATH = path.resolve(__dirname, '../dist');

module.exports = {
    entry: {
        app: './src/index.jsx',
        vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom', 'antd-mobile']
    },    
    output: {
        path: DIST_PATH,
    },
    module: {
        rules: [
            {
                test: /\.jsx|.js$/,
                use: "babel-loader",
                include: SRC_PATH,
            },
            {
              test: /\.(sa|sc|c)ss$/,
              use: [{
                  loader: 'style-loader'
                },{
                    loader: 'css-loader'
                }, 
                {
                  loader: 'postcss-loader',
                  options: { // 如果没有options这个选项将会报错 No PostCSS Config found
                    plugins: (loader) => [
                      require('postcss-import')({ root: loader.resourcePath }),
                      require('autoprefixer')(),
                      require('postcss-px-to-viewport')({
                        viewportWidth: 750,
                        exclude: [/node_modules/]
                      }),
                    ]
                  }
                },
                {
                    loader: 'sass-loader'
                }]
            },
            {
              test: /\.(png|jpg|jpeg|gif)$/,
              use: 'url-loader?limit=8192&name=images/[name].[hash].[ext]',
              include: SRC_PATH
            }
        ]
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json'],
      alias: {
        '@': path.resolve(__dirname, '..', 'src'),
        '@comp': path.resolve(__dirname, '..', 'src/components',)
      }
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
      new webpack.DefinePlugin({
        API_DOMAIN: 'https://api.example.com'
      })
    ]
};
