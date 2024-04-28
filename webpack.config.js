const path = require("path");
const HtmlPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle[fullhash].js',
        clean: true
    },
    plugins: [
        new HtmlPlugin({ template: './src/index.html'}),
        new CssPlugin({ filename: 'styles[fullhash].css'}),
        new CopyWebPackPlugin({
            patterns: [
                {
                    from: 'static', to: 'static'
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        edge: '17',
                                        firefox: '60',
                                        chrome: '67',
                                        safari: '11.1',
                                        ie: '11',
                                    },
                                },
                            ],
                            '@babel/preset-react',
                        ],
                    }
                }
            },
            {
                test:/\.css$/,
                use: [
                    CssPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 9993,
        static: {
            directory: path.join(__dirname, 'build')
        },
        devMiddleware: {
            writeToDisk: true
        }
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    }
}

