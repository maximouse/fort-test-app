const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCSSExtractPluging = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const isDev = process.env.NODE_ENV === 'developnemnt' 


const optimization = () => {
    const config ={
        splitChunks: {
            chunks: 'all'
        }
    }
    if (!isDev) {
        config.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}` 

const cssloaders = add => {
    const loaders = [
        {   loader: MiniCSSExtractPluging.loader,
            options: {
                hmr: isDev,
                reloadAll: true
            }  },
            {   loader: 'css-loader'    } 
    ]
    if (add){
        loaders.push(add)
    }
    return loaders
}

module.exports = {
    context: path.resolve(__dirname, './src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.js'],
        store: ['./store/index.js']
        // analytics: './analytics.js',
        // babel: './babel.js'
    },  
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, './dist')
    },
    resolve:{
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@models': path.resolve(__dirname, './src/models/'),
            '@': path.resolve(__dirname, './src')
        }
    },
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitescape: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/favicon.ico'),
                    to: path.resolve(__dirname, './dist')
                },
                {
                    from: path.resolve(__dirname, './src/assets/fort_logo.png'),
                    to: path.resolve(__dirname, './dist/assets')
                }
            ] 
        }),
        new MiniCSSExtractPluging({
            filename: filename('css')
        }),
        new VueLoaderPlugin()
        
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssloaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssloaders('sass-loader')
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 
                    {   loader: 'file-loader',
                options: {
                    esModule: false,
                 
                }}
                
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: {
                    loader: 'vue-loader',
                    options: {
                        loader:{
                            scss: 'vue-style-loader!css-loader!sass-loader'
                        },
                        presets: [
                            // '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    },
    devServer: {
        port: 8080,
        hot: isDev
    },
    devtool: isDev ? 'source-map' : ''

}