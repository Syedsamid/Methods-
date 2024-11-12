// findindex()
/*
The findIndex() method returns the index of the first element
in an array that satisfies a provided test function.
If no elements satisfy the test, it returns -1.
Syntax: array.findIndex(callback(element, index, array))

*/

const numbers = [5, 12, 8, 140, 33];

// Find the index of the first number greater than 10
const index = numbers.findIndex(num => num > 33);
console.log(index);

