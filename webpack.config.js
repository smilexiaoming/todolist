const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

const isDev = process.env.NODE_ENV === 'development' ? true : false

module.exports = {
    mode: isDev ? 'development' :'production',
    entry:'./Day1/index.js', //入口文件
    output:{ //打包输出
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'public/index.html'
        })
    ],
    devServer:{
        port:8080,
    }
}