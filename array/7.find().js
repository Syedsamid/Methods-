// find
/*
The find method returns the value of the first element in the array that satisfies the provided testing function.
If no elements satisfy the testing function, it returns undefined.

Definition: Finds the first element in an array that matches a condition and returns that element.

Syntax: array.find (callback(element, index, array) thisArg)

*/

const numbers = [3, 5, -9, 6, -2, 10];

//Find the first negative number in the array
const check = numbers.find(num => num < 0);
console.log(check);



