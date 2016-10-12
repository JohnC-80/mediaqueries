require('webpack');
module.exports = {
    entry: './public/app.js',
    output:{
        path: './public/bundle',
        publicPath: 'bundle/',
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /.css$/,
                exclude: /node_modules/,
                loader: 'style!css?modules&localIdentName=[local]--[hash:base64:5]!postcss'
            }
        ]
    },
    postcss(webpack){
        return [
            require('postcss-import')({addDependencyTo:webpack}),
            require('postcss-url'),
            require('postcss-css-next')
        ]
    },
    node: {
        fs: "empty"
      }
};

