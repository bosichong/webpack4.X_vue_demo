const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common')
const webpack = require('webpack');



let devConfig = {
    mode:'development',
    devServer: { // 这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
        //  --open --port 3000 --contentBase src --hot
        open: true, // 自动打开浏览器
        port: 7777, // 设置启动时候的运行端口
        contentBase: './dist', // 指定托管的根目录
        hot: true // 启用热更新 的 第1步
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },

        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(), // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步

    ]
};
// 合并配置文件
module.exports = merge(common,devConfig);