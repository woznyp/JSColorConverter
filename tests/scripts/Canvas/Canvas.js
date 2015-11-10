/*global describe, it, expect, createCanvas */

(function () {
    "use strict";
    describe("createCanvas", function () {
        it('should be defined', function () {
            expect(createCanvas).toBeDefined();
        });
        it('should throw error in case of missing target parameter #1', function () {
            expect(function () {
                createCanvas();
            }).toThrow('Missing target parameter');
        });
        it('should throw error in case of missing target parameter #2', function () {
            expect(function () {
                createCanvas({});
            }).toThrow('Missing target parameter or it has missing properties: id and/or name');
        });
        it('should throw error in case of missing options parameter #1', function () {
            expect(function () {
                createCanvas({'name': 'body'});
            }).toThrow('Missing options parameter');
        });
        it('should throw error in case of missing options parameter #2', function () {
            expect(function () {
                createCanvas({'name': 'body'}, {});
            }).toThrow('Missing height/width of canvas');
        });
        it('should throw error in case of missing options parameter #3', function () {
            expect(function () {
                createCanvas({'name': 'body'}, {height: 0});
            }).toThrow('Missing height/width of canvas');
        });
        it('should throw error in case of missing options parameter #4', function () {
            expect(function () {
                createCanvas({'name': 'body'}, {width: 0});
            }).toThrow('Missing height/width of canvas');
        });
        it('should return canvas DOM element #1', function () {
            var canvasDOMElement = createCanvas({'name': 'body'}, {width: 0, height: 0});
            expect(canvasDOMElement).toBeDefined();
            expect(canvasDOMElement.height).toBeDefined();
            expect(canvasDOMElement.height).toEqual(0);
            expect(canvasDOMElement.width).toBeDefined();
            expect(canvasDOMElement.width).toEqual(0);
        });
        it('should return canvas DOM element #2', function () {
            var canvasDOMElement = createCanvas({'name': 'body'}, {width: 60, height: 15});
            expect(canvasDOMElement).toBeDefined();
            expect(canvasDOMElement.height).toBeDefined();
            expect(canvasDOMElement.height).toEqual(15);
            expect(canvasDOMElement.width).toBeDefined();
            expect(canvasDOMElement.width).toEqual(60);
        });
    });
}())