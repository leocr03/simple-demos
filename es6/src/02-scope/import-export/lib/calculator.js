'use strict';

var _operations = require('./operations');

(function calculate() {
    var total = (0, _operations.sum)(4, 7);
    console.log('sum(4, 7) = ' + (0, _operations.sum)(4, 7));

    total = (0, _operations.multiply)(4, 7);
    console.log('multiply(4, 7) = ' + (0, _operations.multiply)(4, 7));
})();