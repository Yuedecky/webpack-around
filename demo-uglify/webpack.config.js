var webpack = require('webpack')
var uglifyJsPlugin=require('uglifyjs-webpack-plugin')
module.exports={
    entry: './main.js',
    output:{
        filename:'bundle.js'
    },
    plugins:[
        new uglifyJsPlugin()
    ]
}