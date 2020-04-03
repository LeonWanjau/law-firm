const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: ['./js/index.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
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

    plugins: [
        new CleanWebpackPlugin()
    ]
}