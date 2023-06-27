'use strict';

/**
 * You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
 * @param {number} seconds
 * @returns {string}
 *
 * @example
 *      31536000 -> 01.06.2021
 *      0 -> 01.06.2020
 *      86400 -> 02.06.2020
 */
function secondsToDate(seconds) {
    const startDate = new Date('2020-06-01T00:00:00Z');
    const milliseconds = seconds * 1000;
    const targetDate = new Date(startDate.getTime() + milliseconds);
    const day = targetDate.getDate();
    const month = targetDate.getMonth() + 1;
    const year = targetDate.getFullYear();
    return `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.${String(year).padStart(2, '0')}`;
}

/**
 * You must create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number
 * ! Numbers will always be below 1024 (not including 1024)
 * ! You are not able to use parseInt
 * @param {number} decimal
 * @return {string}
 *
 * @example
 *      5 -> "101"
 *      10 -> "1010"
 */
function toBase2Converter(decimal) {
    let binary = "";
    if (decimal === 0) {
        binary = "0";
    }
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}

/**
 * You must create a function that takes two strings as arguments and returns the number of times the first string
 * is found in the text.
 * @param {string} substring
 * @param {string} text
 * @return {number}
 *
 * @example
 *      'a', 'test it' -> 0
 *      't', 'test it' -> 2
 *      'T', 'test it' -> 2
 */
function substringOccurrencesCounter(substring, text) {
    const regex = new RegExp(substring.toLowerCase(), "gi");
    const matches = text.toLowerCase().match(regex);
    return matches ? matches.length : 0;
}

/**
 * You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */
function repeatingLitters(string) {
    let repeatedString = "";
    const arraySymbols = string.split("");
    for (let char of arraySymbols) {
        repeatedString += char;
        if (arraySymbols.indexOf(char) === arraySymbols.lastIndexOf(char)) {
            repeatedString += char;
        }
    }
    return repeatedString;
}

/**
 * You must write a function redundant that takes in a string str and returns a function that returns str.
 * ! Your function should return a function, not a string.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      const f1 = redundant("apple")
 *      f1() ➞ "apple"
 *
 *      const f2 = redundant("pear")
 *      f2() ➞ "pear"
 *
 *      const f3 = redundant("")
 *      f3() ➞ ""
 */
function redundant(str) {
    return function() {
        return str;
    };
}

/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
function towerHanoi(disks) {
    return Math.pow(2, disks) - 1;
}

/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {
    const matrix1Height = matrix1.length;
    const matrix2Height = matrix2.length;
    const matrix2Width = matrix2[0].length;
    const result = [];
    for (let i = 0; i < matrix1Height; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2Width; j++) {
            let sum = 0;
            for (let k = 0; k < matrix2Height; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

/**
 * Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello"
 */
function gather(str) {
    let chars = [str];
    let result = "";

    function nextChain(arg) {
        chars.push(arg);
        return nextChain;
    }

    function order(index) {
        result += chars[index];
        return order;
    }

    function get() {
        return result;
    }
    order.get = get;
    nextChain.order = order;
    return nextChain;
}

module.exports = {
    secondsToDate,
    toBase2Converter,
    substringOccurrencesCounter,
    repeatingLitters,
    redundant,
    towerHanoi,
    matrixMultiplication,
    gather,
}