const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

const isDev = process.env.NODE_ENV === 'development' ? true : false

module.exports = {
    mode: isDev ? 'development' :'production',
    entry:'./Day2/index.js', //入口文件
    output:{ //打包输出
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:'/node_modules/', //排除node_modules
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'public/index.html',
            config:{
                title:'my todolist'
            }
        }),
        new webpack.ProvidePlugin({  //webpack自带插件，可以自动全局引入react
            React: 'react'
          })
    ],
    devServer:{
        port:8080,
    }
}