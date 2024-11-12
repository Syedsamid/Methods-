//sort
/*
The sort() method sorts the elements of an array in place and returns the sorted array. 
By default, it sorts elements as strings in ascending order, which can sometimes give 
unexpected results when sorting numbers.
*/


// let fruits = ['banana', 'apple', 'cherry', 'date'];
// fruits.sort();
// console.log(fruits);

 // sort is use to sort only strings
// let numbers = [25, 45, 10, 1, 99,100, 1000, 0, 65];
// numbers.sort();
// console.log(numbers);


let numbers = [25, 45, 10, 1, 99,100, 1000, 0, 65];
numbers.sort((a,b) => b-a);
console.log(numbers);
