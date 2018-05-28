const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// npx webpack --config webpack.config.js
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".jsx", ".sass", ".scss"]
    },
    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                use: 'ts-loader'
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(scss|sass)$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }
            /* , {
                            test: /\.less$/,
                            loader: 'less-loader' // compiles Less to CSS
                        } */
            , {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                        // ,options: {
                        //     paths: [
                        //         path.resolve(__dirname, 'node_modules')
                        //     ]
                        // }
                }]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            }, {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },

            /**
             * Without any configuration options, babel-preset-env behaves exactly the same as:
             * babel-preset-latest 
             * (or babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017 together).
             */
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'babel-preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ]
};