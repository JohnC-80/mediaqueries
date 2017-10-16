require('webpack');
const path = require('path');
const postCssImport = require('postcss-import');
const postCssUrl = require('postcss-url');
const autoprefixer = require('autoprefixer');
const postCssCustomProperties = require('postcss-custom-properties');
const postCssCalc = require('postcss-calc');
const postCssNesting = require('postcss-nesting');
const postCssCustomMedia = require('postcss-custom-media');
const postCssMediaMinMax = require('postcss-media-minmax');
const postCssColorFunction = require('postcss-color-function');

module.exports = {
    entry: './public/app.js',
    output: {
        path: './public/bundle',
        publicPath: 'bundle/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: [
                        [require.resolve('babel-preset-env'), { modules: false }],
                        [require.resolve('babel-preset-stage-2')],
                        [require.resolve('babel-preset-react')],
                    ],
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader?modules&localIdentName=[local]---[hash:base64:5]',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins() {
                                return [
                                    postCssImport,
                                    postCssUrl,
                                    autoprefixer,
                                    postCssCustomProperties,
                                    postCssCalc,
                                    postCssNesting,
                                    postCssCustomMedia,
                                    postCssMediaMinMax,
                                    postCssColorFunction,
                                ];
                            },
                        },
                    },
                ],
            },
        ]
    },
};

