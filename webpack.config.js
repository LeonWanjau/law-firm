const autoprefixer = require('autoprefixer');
const path = require('path');
var webpack = require("webpack");

module.exports = [{
    entry: {
        index: ['./js/index.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js')
    },
    module: {
        rules: [
            /*
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    {
                        loader: 'sass-loader'
                    },
                ]
            },
            */

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },

            {
                test: /\.(woff|woff2|ttf|jpg|png)$/,
                use: {
                    loader: 'url-loader',
                },
            },
        ]
    },



    mode: 'development',
}];