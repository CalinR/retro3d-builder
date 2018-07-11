const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = [
  {
    // entry: ['./src/js/main.js', './src/scss/main.scss'],
    entry: ['./src/js/main.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist'
    },  
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            },
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "sass-loader" // compiles Sass to CSS
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    // optimization: {
    //   minimizer: [
    //     new UglifyJsPlugin({
    //       cache: true,
    //       parallel: true,
    //       sourceMap: true // set to true if you want JS source maps
    //     }),
    //     new OptimizeCSSAssetsPlugin({})
    //   ]
    // },
    // plugins: [
    //   new MiniCssExtractPlugin({
    //     filename: '[name].css',
    //   })
    // ],
    // module: {
    //   rules: [
    //     {
    //       test: /\.scss$/,
    //       use: [
    //         MiniCssExtractPlugin.loader,
    //         'css-loader',
    //         'sass-loader'
    //       ]
    //     }
    //   ]
    // }
  }
];
