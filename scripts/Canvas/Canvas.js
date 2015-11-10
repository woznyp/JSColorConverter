/*jslint browser:true*/
/*global window */

/**
 * Created by Pawe³ WoŸny
 * 3.11.2015 - pawelpwozny@gmail.com
 */

/**
 *
 * @param {Object} target
 * @param {String} target.id - DOM element id
 * @param {String} target.name - DOM element name
 * @return {Object}
 */

function createCanvas(target, options) {
    "use strict";
    var DOMElement = {},
        canvasElement = null;
    if (target === undefined) {
        throw new Error('Missing target parameter');
    }

    if (target.id !== undefined) {
        DOMElement = document.getElementById(target.id);
    } else if (target.name !== undefined) {
        DOMElement = document.getElementsByTagName(target.name);
        if (DOMElement.length > 1) {
            throw new Error('Too many elements with the same name. Use target.id instead');
        }
        DOMElement = DOMElement[0];
    } else {
        throw new Error('Missing target parameter or it has missing properties: id and/or name');
    }

    if (DOMElement) {
        if (options === undefined) {
            throw new Error('Missing options parameter');
        }

        if (options.height !== undefined && options.width !== undefined) {
            canvasElement = document.createElement('canvas');
            canvasElement.height = options.height;
            canvasElement.width = options.width;
            DOMElement.appendChild(canvasElement);
        } else {
            throw new Error('Missing height/width of canvas');
        }
    }

    return canvasElement;
}