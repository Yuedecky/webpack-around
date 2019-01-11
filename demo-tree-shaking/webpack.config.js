const path = require('path')

module.exports={
    entry:{
        main:'./main.js'
    },
    output:{
        filename: '[name].[hash:8].js',
        path: path.join(__dirname,'dist')
    }
}

