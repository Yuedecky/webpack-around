var loader = require('bundle-loader!./a.js')

loader(function(file){
    document.open()
    document.write('<h1>'+file+'</h1>')
    document.close()
})