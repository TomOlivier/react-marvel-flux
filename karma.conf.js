// Karma configuration
var webpack = require('webpack');

var webpackConfig = require('./webpack.karma.js');

module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
        'tests.webpack.js' //just load this file
    ],

    preprocessors: {
        // 'src/**/*.js' : [ 'coverage' ],
        'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },

    reporters: ['mocha', 'coverage'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: true,

    concurrency: Infinity,

    webpack: webpackConfig,

    webpackServer: {
        noInfo: true
    },

    coverageReporter: {
        instrumenters: {
          "babel-istanbul": require("babel-istanbul")
        },
        instrumenter: {
          "src/**/*.js": "babel-istanbul"
        },
        reporters: [
          {type: "html", dir: "coverage"},
        ]
    },

    plugins: [
        'karma-webpack',
        'karma-mocha',
        'karma-mocha-reporter',
        'karma-chai',
        'karma-sourcemap-loader',
        'karma-phantomjs-launcher',
        'karma-coverage'
    ],
  })
}
