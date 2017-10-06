const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "css/index.css"
});

const config = {
    entry: "./src/js/index.ts",
    output: {
        filename: "js/index.js",
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.hbs']
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
                    use: ['css-loader', 'postcss-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jpg|gif|png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: 'img/[hash].[ext]',
                }
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        extractSass
    ]
};

if(process.env.NODE_ENV === 'development') {

    config.devServer = {
        hot: true,
        publicPath: '/',
        contentBase: './build/templates'
    };

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = config;
