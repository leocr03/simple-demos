function showVarVsLet() {
    console.log('\n=> ' + arguments.callee.name.toString());

    var a = 3;

    if (a <= 3) {
        var b = 2;
    }

    var total = a + b

    console.log('The total is: ' + total);

    let c = 4;
    total = 0;

    try { 
        if (c <= 4) {
            let d = 5;
        }
    
        var total = c + d
    } catch (err) {
        console.log(err.message);
    }

    console.log('The total is: ' + total);
}

function showDefaultParameters() {
    console.log('\n=> ' + arguments.callee.name.toString());
    
    function sum(x = 2, y = 1) {
        return x + y;
    }

    console.log('sum(3, 6) = ', sum(3, 6));
    console.log('sum(4) = ', sum(4));
    console.log('sum() = ', sum());
}

function showRestParameters() {
    console.log('\n=> ' + arguments.callee.name.toString());
    
    function sum (...numbers) {
        let total = 0;
        for (let i=0; i<numbers.length; i++) {
            total += numbers[i];
        }

        return total;
    }

    console.log('sum(1,4,6)', sum(1,4,6));
    console.log('sum(6)', sum(6));
    console.log('sum(51,65,74,78,6,75,8,578)', sum(51,65,74,78,6,75,8,578));
    console.log('sum(5,7,98)', sum(5,7,98));
}

const showArrowFunction = () => {
    console.log('\n=> ' + arguments.callee.name.toString());

    const sum = (x, y=4) => { return x + y }
    console.log('sum(3) = ' + sum(3));
}

function showDestructuring() {
    console.log('\n=> ' + arguments.callee.name.toString());

    const [a, b, ...c] = [1, 2, 562, 542 , 45];
    
    console.log(a);
    console.log(b);
    console.log(c);

    const person = { name: 'Leonardo', age: 35 };
    
    const {name, age} = person;
    
    console.log(name);
    console.log(age);
}

function showConstructor() {
    console.log('\n=> ' + arguments.callee.name.toString());
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }

        getName() {
            return this._name;
        }

        getAge() {
            return this._age;
        }
    }

    const person = new Person('Leonardo', 35);

    console.log(person.getName() + ' - ' + person.getAge());
}

function showGetSet() {
    console.log('\n=> ' + arguments.callee.name.toString());
    class Person {
        constructor() {}

        get name() {
            return this._name;
        }

        set name(name) {
            this._name = name;
        }

        get age() {
            return this._age;
        }

        set age(age) {
            this._age = age;
        }
    }

    const person = new Person();
    person.name = 'Leonardo';
    person.age = 34;

    console.log(person.name + ' - ' + person.age);
}

function showInheritance() {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }

        get name() {
            return this._name;
        }

        set name(name) {
            this._name = name;
        }

        get age() {
            return this._age;
        }

        set age(age) {
            this._age = age;
        }

        genre() {}
    }

    class Man extends Person {
        genre() {
            return 'male';
        }
    }

    class Woman extends Person {
        genre() {
            return 'female';
        }
    }

    let man = new Man('Leonardo', 35);
    console.log(JSON.stringify(man) + ' - ' + man.genre());

    let woman = new Woman('Daniela', 26);
    console.log(JSON.stringify(woman) + ' - ' + woman.genre());
}

showVarVsLet();
showDefaultParameters();
showRestParameters();
showArrowFunction();
showDestructuring();
showConstructor();
showGetSet();
showInheritance();