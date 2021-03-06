var path = require('path');
var webpack = require('webpack');

var nodeModules = path.resolve(__dirname, 'node_modules');
var assetsPath = path.resolve(__dirname, 'src', 'assets');
var pathToReact = path.resolve(nodeModules, 'react/dist/react.min.js');

var PATHS = {
  main: path.resolve(__dirname, 'src/main.js'),
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  build: path.resolve(__dirname, 'dist', 'build'),
  test: path.resolve(__dirname, 'test'),
};

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
  },

  entry: {
    app: PATHS.main,
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    alias: {}
  },

  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: '/build/'
  },

  module: {

    preLoaders: [
        // transpile and instrument only testing sources with babel-istanbul
        {
            test: /\.js$/,
            include: PATHS.src,
            loader: 'babel-istanbul',
            query: {
                cacheDirectory: true
            }
        }
    ],

    loaders: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: [
        // PATHS.src,
        PATHS.test
      ]
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", 'resolve-url', "sass?sourceMap"],
      include: assetsPath,
    },
    {test: /\.css$/, loader: 'style!css'},
    {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
    {test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
    {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/octet-stream" },
    {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,  loader: "file" },
    {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=image/svg+xml" },
    {test: /\.json$/, loader: 'json'},
    ],
    noParse: [pathToReact]
  },

  devtool: 'inline-source-map',

  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react/addons': true
  },

  devServer: {
    historyApiFallback: true,
    hot: false,
    inline: true,
    progress: true,
    publicPath: '/build/',
    contentBase: PATHS.dist,
    host: process.env.HOST,
    port: 8080
  },

  plugins: [
    new webpack.NormalModuleReplacementPlugin(/^\.\/package$/, function(result) {
        if(/cheerio/.test(result.context)) {
            result.request = "./package.json"
        }
    })
  ]
};

config.addVendor('bootstrap', nodeModules + '/bootstrap/dist/js/bootstrap.min.js');
config.addVendor('bootstrap.css', nodeModules + '/bootstrap/dist/css/bootstrap.min.css');

module.exports = config;