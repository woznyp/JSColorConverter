/*global module */
(function () {
    "use strict";
    module.exports = function (config) {
        config.set({
            basePath: '',
            frameworks: ['jasmine'],
            files: [
                'scripts/*.js',
                'tests/**/*.js'
            ],
            exclude: [],
            preprocessors: {},
            reporters: ['progress', 'junit'],
            port: 9876,
            colors: true,
            logLevel: config.LOG_INFO,
            autoWatch: true,
            browsers: ['Chrome'],
            singleRun: true
        });
    };
}())