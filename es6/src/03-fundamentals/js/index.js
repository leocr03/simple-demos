(function showCallvsApply() {
    console.log("=> showCallvsApply");

    showCall();
    showApply();
    showCallWithArgs();
    showApplyWithArgs();
})();

function showCall() {
    function sum(x, y) {
        return this.x + this.y;
    }

    let numbers = { x: 5, y: 8 };

    let total = sum.call(numbers);

    console.log ('The total is: %d', total);
}

function showApply() {
    function sum(x, y) {
        return this.x + this.y;
    }

    let numbers = { x: 5, y: 8 };

    let total = sum.apply(numbers);

    console.log ('The total is: %d', total);
}

function showCallWithArgs() {
    function sum(x, y) {
        return this.x + this.y + arguments[0] + arguments[1];
    }

    let numbers = { x: 5, y: 8 };
    
    let total = sum.call(numbers, 2, 7);
    
    console.log ('The total is: %d', total);
}

function showApplyWithArgs() {
    function sum(x, y) {
        return this.x + this.y + arguments[0] + arguments[1];
    }

    let numbers = { x: 5, y: 8 };
    
    let total = sum.apply(numbers, [12, 57]);
    
    console.log ('The total is: %d', total);
}
