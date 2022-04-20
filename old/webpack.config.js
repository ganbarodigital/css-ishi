var webpack = require('webpack'),
    path = require('path');

module.exports = {
    debug: true,
    entry: {
        ishi: './src/js/ishi.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: []
    }
};