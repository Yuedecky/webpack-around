var HtmlWebpackPlugin = require("html-webpack-plugin")

var openBroswerPlugin = require("open-browser-webpack-plugin")

module.exports={
    entry: './main.js',
    output:{
        filename: 'bundle.js'
    },
   plugins:[
       new HtmlWebpackPlugin({
           title: 'demo-html-webpack',
           filename: 'index.html'
       }),
       new openBroswerPlugin({
           url: 'http://localhost:8000'
       })
   ]
}