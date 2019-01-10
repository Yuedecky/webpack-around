var webpack = require('webpack')

module.exports={
    entry:{
        bundle1: './main1.jsx',
        bundle2: './main2.jsx'
    },
    output:{
        filename: '[name].js'
    },
    optimization:{
        splitChunks:{
            name: "commons",
            filename: "commons.js",
        }
    },
    module: {
        rules:[
          {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'react']
              }
            }
          },
        ]
      },

    plugins:[
       
    ]
}