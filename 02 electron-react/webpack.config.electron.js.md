var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './main.develop.js'
    ],
    output: {
        path: __dirname,
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loaders: ['babel'],
            }
        ]
    },
    target: 'node'
};
