const path = require('path')
const CleanWebpackPlugin  = require('clean-webpack-plugin')
const HtmlWebPlugin = require('html-webpack-plugin')
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'[name].[chunkhash].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebPlugin({
            title:"Caching"
        }),

    ]
}