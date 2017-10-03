import { sum } from './sum';

(function calculate() {
    let total = sum(1, 2, 3, 4, 5, 6);
    console.log('new Sum(1, 2, 3, 4, 5, 6) = ' + total);
} ());