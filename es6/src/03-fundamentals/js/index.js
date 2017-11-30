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


(function showClosure() {
    console.log("=> showClosure");

    function sum(x, y) {
        function sumNumbers(... numbers) {
            let total = 0;

            for (let i=0; i<numbers.length; i++) {
                total += numbers[i];
            }

            return total;
        }

        let total = sumNumbers(x, y);
        console.log('The total is: ' + total);
    }

    sum(4,5);
})();

var name = this;

(function showGlobalScope() {
    console.log("=> showGlobalScope");
    console.log(name);
})();

(function showObjectScope() {
    console.log("=> showObjectScope");

    let someObject = {
        global: this,
        name: 'someObject',
        func: function() {
            return this.name;
        }
    };

    console.log(someObject.func());
})();

(function showNestedObjectScope() {
    console.log("=> showNestedObjectScope");

    let someObject = {
        name: 'someObject',
        nested: {
            name: 'someNestedObject',
            func: function() {
                return this.name;
            }
        }
    };

    console.log(someObject.nested.func());
})();

(function showBind() {
    console.log("=> showBind");
    var person = {
        name: 'Leonardo',
        say: function(name) {
            console.log(`Hello ${name}! I'm ${this.name}!`);
        }
    }
    var person2 = {
        name: 'Daniela'
    }
    var say = person.say.bind(person2);
    say('Mary');
})();