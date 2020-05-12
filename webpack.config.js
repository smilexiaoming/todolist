const path = require('path')

module.exports = {
    mode:'development',
    entry:'./Day1/index.js', //入口文件
    output:{ //打包输出
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }    
}