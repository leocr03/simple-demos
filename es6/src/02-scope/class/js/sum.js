

export class Sum {
    constructor(...numbers) {
        this._numbers = numbers;
    }

    getTotal() {
        let total = 0;
        this._numbers.forEach(function(element) {
            total += element;
        }, this);

        return total;
    }
}