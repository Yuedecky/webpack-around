const webpack=require('webpack')

const path = require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

const CleanWebpackPlugin=require('clean-webpack-plugin')

let pathToClean = [
    './dist',
    './build'
]
let cleanOptions={
    root: __dirname,
    exclude: [],
    verbose: true,
    dry: false
}
module.exports={
    entry:{
        app:'./src/app.js',
        print:'./src/print.js'
    },
    plugins:[
        new CleanWebpackPlugin(pathToClean),
        new HtmlWebpackPlugin({
            title:'App'
        })
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}