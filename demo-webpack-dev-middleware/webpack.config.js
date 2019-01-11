const path = require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports={
    entry:{
        app:'./src/app.js',
        print: './src/print.js'
    },
    devtool:'inline-source-map',
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'middleware'
        })
    ],
    output:{
        filename: '[name].bundle.js',
        path: path.join(__dirname,'dist'),
        publicPath: '/'
    }
}