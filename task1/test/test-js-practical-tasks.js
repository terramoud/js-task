const assert = require('assert');
const task1 = require('../src/js/js_practical_task');

describe('secondsToDate', () => {
    it('should return the correct date for 0 seconds', () => {
        assert.strictEqual(task1.secondsToDate(0), '01.06.2020');
    });

    it('should return the correct date for 86400 seconds', () => {
        assert.strictEqual(task1.secondsToDate(86400), '02.06.2020');
    });

    it('should return the correct date for 31536000 seconds', () => {
        assert.strictEqual(task1.secondsToDate(31536000), '01.06.2021');
    });

    it('should return the correct date for 3600 seconds', () => {
        assert.strictEqual(task1.secondsToDate(3600), '01.06.2020');
    });

    it('should return the correct date for negative seconds', () => {
        assert.strictEqual(task1.secondsToDate(-86400), '31.05.2020');
    });

    it('should return the correct date for large number of seconds', () => {
        assert.strictEqual(task1.secondsToDate(999999999), '08.02.2052');
    });

    it('should return the correct date for fractional seconds', () => {
        assert.strictEqual(task1.secondsToDate(0.5), '01.06.2020');
    });

    it('should return the correct date for a leap year', () => {
        assert.strictEqual(task1.secondsToDate(366 * 24 * 3600), '02.06.2021');
    });

    it('should return the correct date for seconds greater than multiple years', () => {
        assert.strictEqual(task1.secondsToDate(3600 * 24 * 365 * 2), '01.06.2022');
    });
});


describe('toBase2Converter', function () {
    it('should return the correct binary representation for a decimal number', function () {
        assert.strictEqual(task1.toBase2Converter(5), '101');
    });

    it('should return the correct binary representation for a decimal number', function () {
        assert.strictEqual(task1.toBase2Converter(10), '1010');
    });

    it('should return the correct binary representation for a decimal number', function () {
        assert.strictEqual(task1.toBase2Converter(0), '0');
    });

    it('should return the correct binary representation for a decimal number', function () {
        assert.strictEqual(task1.toBase2Converter(1), '1');
    });

    it('should return the correct binary representation for a decimal number', function () {
        assert.strictEqual(task1.toBase2Converter(1023), '1111111111');
    });
});
