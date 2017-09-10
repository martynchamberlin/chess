const webpack = require('webpack');

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    disableHostCheck: true,
    publicPath: '/',
    inline: false,
    hot: true,
    host: 'localhost',
    clientLogLevel: 'info',
    contentBase: './',
    watchOptions: {
      ignored: /node_modules/
    }
  },
  devtool: 'cheap-module-source-map',
  entry: {
    main: [
      './assets/js/index.js',
      'webpack-dev-server/client?/sockjs-node/',
      'webpack/hot/dev-server'
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          cssModules: {
            localIdentName: '[name]-[local]'
          },
          loaders: {
            js: 'babel-loader',
            css: ['vue-style-loader', 'css-loader'],
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader/url',
            options: {
              insertAt: 'top'
            }
          },
          { loader: 'file-loader' }
        ],
      },
      {
        test: /\.(jpe?g|gif|png|woff|woff2|ttf|eot|svg)$/,
        loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
      }
    ]
  },
  output: {
    path: '/',
    filename: 'dist/[name].js',
    publicPath: `http://localhost:8080/`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
