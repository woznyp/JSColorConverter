/*global describe, it, expect, convertObjectPropertiesToCorrectType */

(function () {
    "use strict";

    describe('convertObjectPropertiesToCorrectType', function () {
        it('function should be defined', function () {
            expect(convertObjectPropertiesToCorrectType).toBeDefined();
        });

        it('should convert "true" to true', function () {
            var testObject = {newValue: 'true'};
            convertObjectPropertiesToCorrectType(testObject);
            expect(testObject.newValue).toEqual(true);
        });

    });
}());