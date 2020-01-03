const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = (env, options) => {
  const devMode = options.mode !== 'production';
  return {
    resolve: {
      extensions: ['.js', '.jsx']
    },
    entry: {
      app: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader'
        },
        // {
        //   test: /\.scss$/,
        //   include: [
        //     path.resolve(__dirname, 'node_modules/grommet'),
        //     path.resolve(__dirname, 'src/styles')
        //   ],
        //   use: [
        //     devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        //     'css-loader',
        //     {
        //       loader: 'postcss-loader',
        //       options: {
        //         ident: 'postcss',
        //         plugins: [require('autoprefixer')({ grid: false })]
        //       }
        //     },
        //     {
        //       loader: 'sass-loader',
        //       options: {
        //         includePaths: [
        //           './node_modules',
        //           './node_modules/grommet/node_modules',
        //           './src/styles'
        //         ]
        //       }
        //     }
        //   ]
        // },
        {
          test: /\.(jpe?g|png|gif|ico|svg)$/i,
          use: 'file-loader?name=images/[name].[ext]'
        },
        {
          test: /\.htaccess/,
          include: [path.resolve(__dirname, 'src/server-config')],
          use: 'file-loader?name=.htaccess'
        }
      ]
    },
    plugins: [
      //   new MiniCssExtractPlugin({
      //     filename: devMode ? '[name].css' : '[name].[hash].css',
      //     chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
      //   }),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    optimization: devMode
      ? {}
      : {
          splitChunks: {
            chunks: 'all'
          },
          minimizer: [
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
              sourceMap: true
            })
            // new OptimizeCSSAssetsPlugin({})
          ]
        },
    mode: devMode ? 'development' : 'production',
    devtool: devMode ? 'cheap-eval-source-map' : 'cheap-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      overlay: true,
      historyApiFallback: true
    }
  };
};

module.exports = config;
