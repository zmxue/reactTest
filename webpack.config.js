var path = require('path'); /*nodejs的path对象，处理路径相关*/
var webpack = require('webpack');

module.exports = {
    entry:'./app/main.js',
    output: {
        path: './build',
        filename: 'build.js'
    }
}