'use strict';

var _sum = require('./sum');

(function calculate() {
    var sum = new _sum.Sum(1, 2, 3, 4, 5);
    var total = sum.getTotal();
    console.log('new Sum(1, 2, 3, 4, 5) = ' + total);
})();