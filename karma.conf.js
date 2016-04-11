// Karma configuration
var webpack = require('webpack');

var webpackConfig = require('./webpack.config.js');
webpackConfig.devtool = 'inline-source-map';
webpackConfig.externals = {};
webpackConfig.externals['react/lib/ExecutionEnvironment'] = true;
webpackConfig.externals['react/lib/ReactContext'] = true;
webpackConfig.externals['react/addons'] = true;
webpackConfig.plugins = [];

replacementPlugin = new webpack.NormalModuleReplacementPlugin(/^\.\/package$/, function(result) {
    if(/cheerio/.test(result.context)) {
        result.request = "./package.json"
    }
});

webpackConfig.plugins.push(replacementPlugin);

module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'tests.webpack.js' //just load this file
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },

    reporters: ['mocha'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    concurrency: Infinity,

    webpack: webpackConfig,

    webpackMiddleware: {
        noInfo: true
    },

    plugins: [
        'karma-webpack',
        'karma-mocha',
        'karma-mocha-reporter',
        'karma-chai',
        'karma-sourcemap-loader',
        'karma-phantomjs-launcher',
    ],
  })
}
