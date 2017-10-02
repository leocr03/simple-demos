"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sum = sum;
exports.multiply = multiply;
function sum() {
    var total = 0;

    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

function multiply() {
    var total = 1;

    for (var _len2 = arguments.length, numbers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        numbers[_key2] = arguments[_key2];
    }

    for (var i = 0; i < numbers.length; i++) {
        total *= numbers[i];
    }

    return total;
}