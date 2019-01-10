const webpack = require('webpack')
module.exports={
    entry:{
        app:'./main.js',
        vendor:['jquery']
    },
    ouput:{
        filename: 'bundle.js'
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            filename: 'vendor.js'
        })
    ]
}
