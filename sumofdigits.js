function getSumOfDigits(num) {
    return String(num)
        .split('')
        .reduce((acc, curr) => {
            return acc + Number(curr);
        }, 0);
}

function getlength(number) {
    return number.toString().length;
}

function digitalRoot(n) {}

console.log(digitalRoot(456));
