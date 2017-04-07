const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const extractSass = new ExtractTextPlugin({
    filename: "index.css"
});

module.exports = {
    entry: "./src/js/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loader: extractSass.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        extractSass,
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        publicPath: '/build/'
    }
};
