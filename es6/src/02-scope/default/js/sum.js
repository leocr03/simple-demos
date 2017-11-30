
export default function (...numbers) {
    let total = 0;
    numbers.forEach(function(element) {
        total += element;
    }, this);

    return total;
}
