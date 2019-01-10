const webpack=require('webpack')

const path = require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

const CleanWebpackPlugin=require('clean-webpack-plugin')

module.exports={
    entry:{
        app:'./src/app.js',
        print:'./src/print.js'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'App'
        })
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}