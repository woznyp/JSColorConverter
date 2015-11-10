/*global describe, it, expect, Benchmark */

(function () {
    "use strict";
    describe("create Benchmark object without new", function () {
        it("should throw an exception", function () {
            expect(function () {
                Benchmark();
            }).toThrow();
        });
    });

    describe("create Benchmark object and test its properties", function () {
        it("should have all properties", function () {
            var testBenchmark = new Benchmark();
            expect(testBenchmark.id).not.toBeUndefined();
            expect(testBenchmark.times).toEqual({begin: 0, end: 0});
            expect(testBenchmark.beginBenchmark).toBeDefined();
            expect(typeof testBenchmark.beginBenchmark).toBe('function');
            expect(testBenchmark.endBenchmark).toBeDefined();
            expect(typeof testBenchmark.endBenchmark).toBe('function');
            expect(testBenchmark.getBenchmarkTime).toBeDefined();
            expect(typeof testBenchmark.getBenchmarkTime).toBe('function');
        });
    });

    describe("create Benchmark object and test its functions", function () {
        it("should have all properties", function () {
            var testBenchmark = new Benchmark();

            testBenchmark.beginBenchmark();
            testBenchmark.endBenchmark();

            expect(testBenchmark.times.begin).not.toEqual(0);
            expect(testBenchmark.times.end).not.toEqual(0);
            expect(testBenchmark.getBenchmarkTime() >= 0).toBe(true);
        });
    });
}())