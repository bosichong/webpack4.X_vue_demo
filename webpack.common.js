const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');





module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        jquery: 'jQuery'
      },
    module: {
        rules: [{
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: [{
                    // 需要下载file-loader和url-loader
                    loader: "url-loader",
                    options: {
                        limit: 50,
                        esModule: false,
                        // 图片文件输出的文件夹
                        outputPath: "images"
                    }
                }]
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                // html中的img标签
                use: ["html-withimg-loader"]
            },
            {
                //解析.vue文件
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]

    },
    resolve:{
        alias:{
            // 'vue$':'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        // 全局引入JQ
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),

        // 自动生成html模板
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "webpack4.X Demo",
            template: "./src/index.html"
        }),
    ]
};