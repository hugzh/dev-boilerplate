const path = require('path');
const webpack = require('webpack');
const SRC_PATH = path.resolve(__dirname, '../src');
const DIST_PATH = path.resolve(__dirname, '../dist');

module.exports = {
    entry: {
        app: './src/index.jsx',
        vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom']
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
                }, {
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
      new webpack.DefinePlugin({
        API_DOMAIN: 'https://api.example.com'
      })
    ]
};