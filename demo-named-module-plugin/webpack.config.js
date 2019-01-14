const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main: './app.js',
        vendor: [
            'lodash'
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                vendor: {
                    test: /node_modules\//,
                    name: "vendor",
                    minChunks: 2,
                    priority: 10,
                    enforce: true
                },
                commons:{
                    test: /common\/|components\//,
                    name: 'commons',
                    priority: 10,
                    enforce: true
                }
            }
        },
        runtimeChunk:{
            name: 'manifest'
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
        new webpack.HashedModuleIdsPlugin(),
    ],
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    }
}