'use strict';

var _sum = require('./sum');

var _sum2 = _interopRequireDefault(_sum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function calculate() {
    var total = (0, _sum2.default)(1, 2, 3, 4, 5, 6);
    console.log('default sum(1, 2, 3, 4, 5, 6) = ' + total);
})();