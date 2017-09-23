function showVarVsLet() {
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

    function sum(x = 2, y = 1) {
        return x + y;
    }

    console.log('sum(3, 6) = ', sum(3, 6));
    console.log('sum(4) = ', sum(4));
    console.log('sum() = ', sum());
}

const showArrowFunction = () => {
    const sum = (x, y=4) => { return x + y }
    console.log('sum(3) = ' + sum(3));
} 

showVarVsLet();
showDefaultParameters();
showArrowFunction();