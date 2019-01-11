const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports={
    entry: {
        app:'./src/app.js',
        page: './src/page.js'
    },
    devtool: 'inline-source-map',
    plugins:[
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            title: 'Developmet'
        })
    ],
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}