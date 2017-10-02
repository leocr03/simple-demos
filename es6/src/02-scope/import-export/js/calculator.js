import { sum, multiply } from './operations';

(function calculate() {
    let total = sum(4, 7);
    console.log('sum(4, 7) = ' + sum(4, 7));

    total = multiply(4, 7);
    console.log('multiply(4, 7) = ' + multiply(4, 7));
} ());