import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

const SRC_DIR = path.join(__dirname, '../src');

export default { 
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env' : { 'NODE_ENV': JSON.stringify('dev') }
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: [
                'babel'
            ],
            include: SRC_DIR,
            exclude: /node_modules/
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'file-loader?name=images/[name].[ext]'
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        }]
    },
    resolve: {
        alias: {
            '~': SRC_DIR
        }
    },
    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
    ]
};
