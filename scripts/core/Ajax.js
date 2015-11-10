/*jslint browser:true*/
/*global window, debug */

/**
 * Created by Pawe≥ Woüny
 * 10.11.2015 - pawelpwozny@gmail.com
 */

/**
 * Creates handler object for http requests
 * @property {XMLHttpRequest} request
 * @property {Function} makeRequest
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