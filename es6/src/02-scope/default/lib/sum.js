"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var total = 0;

    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    numbers.forEach(function (element) {
        total += element;
    }, this);

    return total;
};