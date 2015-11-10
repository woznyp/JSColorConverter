/*jslint browser:true*/
/*global window */

/**
 * Created by Pawe≥ Woüny
 * 3.11.2015 - pawelpwozny@gmail.com
 */

/**
 * Creates instance of Benchmark class
 * @property {String} id - unique identifier for Benchmark object
 * @property {Object} times
 * @property {Number} times.begin
 * @property {Number} times.end
 * @property {Function} beginBenchmark
 * @property {Function} endBenchmark
 * @property {Function} getBenchmarkTime
 * @class
 * @constructor
 * @returns {Benchmark}
 */
var Benchmark = function () {
    "use strict";
    if (this === undefined) {
        throw new Error('Use new with a constructor function');
    }
    this.id = 'Benchmark_' + new Date().getTime();
    this.times = {
        begin: 0,
        end: 0
    };
    this.beginBenchmark = function () {
        this.times.begin = new Date().getTime();
    };
    this.endBenchmark = function () {
        this.times.end = new Date().getTime();
    };
    this.getBenchmarkTime = function () {
        return this.times.end - this.times.begin;
    };
};