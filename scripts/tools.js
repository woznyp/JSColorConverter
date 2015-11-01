/*jslint browser:true*/
/*global window */

/**
 * Created by Paweł Woźny
 * 31.10.2015 - pawelpwozny@gmail.com
 */
var globals;

/**
 * Converts given object properties to correct type
 * @param {Object} obj
 */
function convertObjectPropertiesToCorrectType(obj) {
    "use strict";
    var key = null,
        value = null;

    Object.keys(obj).forEach(function (el) {
        key = el;
        value = obj[el];
        if (isNaN(Number(value))) {
            if (value === 'true') {
                obj[key] = true;
            } else if (value === 'false') {
                obj[key] = false;
            }
        } else {
            obj[key] = Number(value);
        }
    });
}


/**
 * Prints debug information in web console
 * @param {*} data
 */
function debug(data) {
    "use strict";
    if (globals.config.debug) {
        window.console.log('==', data, '==');
    }
}

/**
 * Retrives query string parameters
 * @param {Array} queryParametersArray
 * @returns {Object}
 */
function parseQueryParameters(queryParametersArray) {
    "use strict";
    var queryParameters = {};

    queryParametersArray.map(function (el) {
        queryParameters[el.split('=')[0]] = el.split('=')[1];
    });

    convertObjectPropertiesToCorrectType(queryParameters);

    return queryParameters;
}

/**
 * Creates handler object for http requests
 * @class
 * @constructor
 * @returns {Ajax}
 */
function Ajax() {
    "use strict";
    if (this === undefined) {
        throw new Error('Use new with a constructor function');
    }
    this.request = new XMLHttpRequest();
    /**
     * Handles GET request
     * @param {String} url
     * @param {Function} callback
     */
    this.makeRequest = function (url, callback) {
        this.request.open('GET', url, true);
        this.request.responseType = 'json';
        this.request.send();

        var self = this;
        this.request.onreadystatechange = function () {
            if (self.request.readyState === 4 && self.request.status === 200) {
                callback(self.request.response);
            } else {
                debug([self.request.readyState, self.request.status]);
            }
        };

    };
}

/**
 * Imports script file with given name
 * @param {String} scriptFile - module name
 * @returns {undefined}
 */
function importScript(scriptFile) {
    "use strict";
    var scriptElement = document.createElement('script');

    scriptElement.src = globals.config.paths[scriptFile];
    document.head.appendChild(scriptElement);
}


/**
 * Namespace for globals
 * @type {{ajax: Ajax, config: {queryParameters: Object, debug: Boolean, paths: Object, rootPath: String}, init: Function}}
 */
globals = {
    ajax: {},
    config: {
        queryParameters: {},
        debug: false,
        paths: {},
        rootPath: window.location.origin + '/' + window.location.pathname.split('/')[1] + '/'
    },
    init: function () {
        "use strict";
        var queryParameters = window.location.search.split('?').join('').split('&');
        globals.config.queryParameters = parseQueryParameters(queryParameters);

        globals.config.debug = globals.config.queryParameters.debug;
        globals.ajax = new Ajax();

        globals.ajax.makeRequest(globals.config.rootPath + 'config.json', function (response) {
            globals.config.paths = response;
        });
    }
};
