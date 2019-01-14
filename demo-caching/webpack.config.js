const path = require('path')
const CleanWebpackPlugin  = require('clean-webpack-plugin')
const HtmlWebPlugin = require('html-webpack-plugin')

const webpack = require('webpack')
module.exports={
    entry:'./main.js',
    output:{
        filename:'[name].[chunkhash].js',
        path:path.resolve(__dirname,'dist')
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            commons: {
              name: "manifest",
              chunks: "initial",
              minChunks: 2
            }
          }
        }
      },

    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebPlugin({
            title:"Caching"
        }),

    ]
}