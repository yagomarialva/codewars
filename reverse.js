function invert(array) {
    reverted_Array = [];
    array.forEach((item) => reverted_Array.push(item * -1));
    console.log(reverted_Array);
    return reverted_Array;
}

invert([1, 2, 3, 4, 5, 0, -1, 2, -2, 3]);
