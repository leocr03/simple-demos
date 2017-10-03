import { Sum } from './sum';

(function calculate() {
    let sum = new Sum(1, 2, 3, 4, 5);
    let total = sum.getTotal();
    console.log('new Sum(1, 2, 3, 4, 5) = ' + total);
} ());