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


describe('substringOccurrencesCounter', function () {
    it('should return the correct number of occurrences of the substring in the text', function () {
        assert.strictEqual(task1.substringOccurrencesCounter('a', 'test it'), 0);
    });

    it('should return the correct binary representation for a decimal number', function () {
        assert.strictEqual(task1.substringOccurrencesCounter('t', 'test it'), 3);
    });

    it('should return the correct binary representation for a decimal number', function () {
        assert.strictEqual(task1.substringOccurrencesCounter('est', 'test test'), 2);
    });

    it('should return the correct binary representation for a decimal number', function () {
        assert.strictEqual(task1.substringOccurrencesCounter('est', 'test test'), 2);
    });

    it('should return the correct binary representation for a decimal number', function () {
        assert.strictEqual(task1.substringOccurrencesCounter('test', 'test test'), 2);
    });

    it('should return the correct binary representation for a decimal number', function () {
        assert.strictEqual(task1.substringOccurrencesCounter(' ', 'test test'), 1);
    });

    it('should return the correct binary representation for a decimal number', function () {
        assert.strictEqual(task1.substringOccurrencesCounter('z', 'test test'), 0);
    });
});


describe('repeatingLetters', function () {
    it('should repeat each character once in a string', function () {
        assert.strictEqual(task1.repeatingLitters("Hello"), "HHeelloo");
    });

    it('should repeat each character once in a string with spaces', function () {
        assert.strictEqual(task1.repeatingLitters("Hello world"), "HHeello  wworrldd");
    });

    it('should repeat each character once in a string with numbers', function () {
        assert.strictEqual(task1.repeatingLitters("12345"), "1122334455");
    });

    it('should repeat each character once in a string with uppercase and lowercase letters', function () {
        assert.strictEqual(task1.repeatingLitters("AaBbCc"), "AAaaBBbbCCcc");
    });

    it('should repeat each character once in a string with multiple spaces', function () {
        assert.strictEqual(task1.repeatingLitters("  "), "  ");
    });
});


describe('redundant', function () {
    it('should return a function that returns the same string', function () {
        const f1 = task1.redundant("apple");
        assert.strictEqual(f1(), "apple");

        const f2 = task1.redundant("pear");
        assert.strictEqual(f2(), "pear");

        const f3 = task1.redundant("");
        assert.strictEqual(f3(), "");
    });
});


describe('towerHanoi', function () {
    it('should return the number of moves required to solve the Tower of Hanoi puzzle for 1 disk', function () {
        assert.strictEqual(task1.towerHanoi(1), 1);
    });

    it('should return the number of moves required to solve the Tower of Hanoi puzzle for 2 disks', function () {
        assert.strictEqual(task1.towerHanoi(2), 3);
    });

    it('should return the number of moves required to solve the Tower of Hanoi puzzle for 3 disks', function () {
        assert.strictEqual(task1.towerHanoi(3), 7);
    });

    it('should return the number of moves required to solve the Tower of Hanoi puzzle for 4 disks', function () {
        assert.strictEqual(task1.towerHanoi(4), 15);
    });

    it('should return the number of moves required to solve the Tower of Hanoi puzzle for 5 disks', function () {
        assert.strictEqual(task1.towerHanoi(5), 31);
    });

    it('should return the number of moves required to solve the Tower of Hanoi puzzle for 10 disks', function () {
        assert.strictEqual(task1.towerHanoi(10), 1023);
    });
});


describe('matrixMultiplication', function () {
    it('should multiply two 2x2 matrices and return the resulting matrix', function () {
        const matrix1 = [[1, 2], [3, 4]];
        const matrix2 = [[5, 6], [7, 8]];
        const expected = [[19, 22], [43, 50]];
        assert.deepStrictEqual(task1.matrixMultiplication(matrix1, matrix2), expected);
    });

    it('should multiply two 3x3 matrices and return the resulting matrix', function () {
        const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const matrix2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        const expected = [[30, 24, 18], [84, 69, 54], [138, 114, 90]];
        assert.deepStrictEqual(task1.matrixMultiplication(matrix1, matrix2), expected);
    });

    it('should multiply two 4x4 matrices and return the resulting matrix', function () {
        const matrix1 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
        const matrix2 = [[16, 15, 14, 13], [12, 11, 10, 9], [8, 7, 6, 5], [4, 3, 2, 1]];
        const expected = [[80, 70, 60, 50], [240, 214, 188, 162], [400, 358, 316, 274], [560, 502, 444, 386]];
        assert.deepStrictEqual(task1.matrixMultiplication(matrix1, matrix2), expected);
    });

    it('should multiply two 2x3 and 3x4 matrices and return the resulting matrix', function () {
        const matrix1 = [[1, 2, 3], [4, 5, 6]];
        const matrix2 = [[7, 8, 9, 10], [11, 12, 13, 14], [15, 16, 17, 18]];
        const expected = [[74, 80, 86, 92], [173, 188, 203, 218]];
        assert.deepStrictEqual(task1.matrixMultiplication(matrix1, matrix2), expected);
    });
});


describe('gather', function () {
    it('should concatenate arguments in the order specified by order function', function () {
        const result1 = task1.gather("a")("b")("c").order(0)(1)(2).get();
        assert.strictEqual(result1, "abc");
    });

    it('should concatenate arguments in the order specified by order function', function () {
        const result2 = task1.gather("a")("b")("c").order(2)(1)(0).get();
        assert.strictEqual(result2, "cba");
    });

    it('should concatenate arguments in the order specified by order function', function () {
        const result3 = task1.gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get();
        assert.strictEqual(result3, "hello!");
    });

    it('should handle reversed order of arguments', function () {
        const result4 = task1.gather("H")("e")("l")("l")("o").order(4)(3)(2)(1)(0).get();
        assert.strictEqual(result4, "olleH");
    });
});



