/*jslint browser:true*/
/*global window, globals, Benchmark */

/**
 * Created by Pawe≥ Woüny
 * 1.11.2015 - pawelpwozny@gmail.com
 */

var benchmark;

(function () {
    "use strict";
    window.onload = function () {
        globals.init();
        document.onclick = function () {
            importScript('benchmark');
            document.addEventListener('onBENCHMARKLoaded', function () {
                benchmark = new Benchmark();
            });

        };
    };
}());