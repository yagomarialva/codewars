function squareSum(numbers) {
    let sum = 0;

    for (const value of numbers) {
        sum += value * value;
        console.log(sum);
    }
    return sum;
}

console.log(squareSum([2, 3, 5]));
