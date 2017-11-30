"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sum = exports.Sum = function () {
    function Sum() {
        _classCallCheck(this, Sum);

        for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
            numbers[_key] = arguments[_key];
        }

        this._numbers = numbers;
    }

    _createClass(Sum, [{
        key: "getTotal",
        value: function getTotal() {
            var total = 0;
            this._numbers.forEach(function (element) {
                total += element;
            }, this);

            return total;
        }
    }]);

    return Sum;
}();