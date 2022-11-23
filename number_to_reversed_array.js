// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(array) {
    let converted_array = [];
    converted_array = String(array)
        .split('')
        .map((array) => {
            return Number(array);
        })
        .reverse();
    console.log(converted_array);
    return converted_array;
}

// other solution:
// function digitize(n) {
//     return String(n).split('').map(Number).reverse();
// }
