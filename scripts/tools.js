/*jslint browser:true*/
/*global window */

/**
 * Created by Paweł Woźny
 * 31.10.2015 - pawelpwozny@gmail.com
 */


(function () {
    "use strict";
    var global;

    /**
     * Prints debug information in web console
     * @param {*} data
     */
    function debug(data) {
        if (global.config.debug) {
            window.console.log('==', data, '==');
        }
    }

    /**
     * Retrives query string parameters and converts them to correct type
     * @returns {Boolean}
     */
    function parseQueryParameters() {
        var queryParameters = {},
            key = null,
            value = null;

        window.location.search.split('?').join('').split('&').map(function (el) {
            queryParameters[el.split('=')[0]] = el.split('=')[1];
        });

        Object.keys(queryParameters).forEach(function (el) {
            value = queryParameters[el];
            if (isNaN(Number(value))) {
                if (value === 'true') {
                    queryParameters[key] = true;
                } else if (value === 'false') {
                    queryParameters[key] = false;
                }
            } else {
                queryParameters[key] = Number(value);
            }
        });

        return queryParameters;
    }

    /**
     * Creates handler object for http requests
     * @returns {Ajax}
     */
    function Ajax() {
        var ajaxObject = {};
        ajaxObject.request = new XMLHttpRequest();
        /**
         * Handles GET request
         * @param {String} url
         * @param {Function} callback
         */
        ajaxObject.makeRequest = function (url, callback) {
            ajaxObject.request.open('GET', url, true);
            ajaxObject.request.responseType = 'json';
            ajaxObject.request.send();

            ajaxObject.request.onreadystatechange = function () {
                if (ajaxObject.request.readyState === 4 && ajaxObject.request.status === 200) {
                    callback(ajaxObject.request.response);
                } else {
                    debug([ajaxObject.request.readyState, ajaxObject.request.status]);
                }
            };

        };

        return ajaxObject;
    }

    /**
     * Imports script file with given name
     * @param {String} scriptfile - module name
     * @returns {undefined}
     */
    function importScript(scriptfile) {
        var scriptElement = document.createElement('script');

        scriptElement.src = global.config.paths[scriptfile];
        document.head.appendChild(scriptElement);
    }


    /**
     * Namespace for globals
     */
    global = {
        ajax: {},
        config: {
            queryParameters: {},
            debug: false,
            paths: {},
            rootPath: window.location.origin + '/' + window.location.pathname.split('/')[1] + '/'
        },
        init: function () {
            global.config.queryParameters = parseQueryParameters();

            global.config.debug = global.config.queryParameters.debug;
            global.ajax = new Ajax();

            global.ajax.makeRequest(global.config.rootPath + 'config.json', function (response) {
                global.config.paths = response;
            });
        }
    };

    window.onload = function () {
        global.init();
    };

}());