/*global describe, it, expect, convertObjectPropertiesToCorrectType, parseQueryParameters */

(function () {
    "use strict";

    describe('convertObjectPropertiesToCorrectType', function () {
        it('should be defined', function () {
            expect(convertObjectPropertiesToCorrectType).toBeDefined();
        });

        it('should convert "true" to true', function () {
            var testObject = {newValue: 'true'};
            convertObjectPropertiesToCorrectType(testObject);
            expect(testObject.newValue).toEqual(true);
        });

    });

    describe('parseQueryParameters', function () {
        it('should be defined', function () {
            expect(parseQueryParameters).toBeDefined();
        });

        it('should return object with parsed url search parameters', function () {
            expect(function () {
                parseQueryParameters('?newValue=true&debug=false&date=1990');
            }).toThrow();

            var testObject = parseQueryParameters(['newValue=true', 'debug=false', 'date=1990']);
            expect(testObject.newValue).toBeDefined();
            expect(testObject.newValue).toEqual(true);
            expect(testObject.debug).toBeDefined();
            expect(testObject.debug).toEqual(false);
            expect(testObject.date).toBeDefined();
            expect(testObject.date).toEqual(1990);
            expect(testObject.date).not.toEqual('1990');
        });
    });
}());