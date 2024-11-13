//slice()

/*
The slice method returns a shaallow copy of a portion of an array into a new array. It does not
modify the original array. This is useful when you want to extract a section of an array 
without altering the original array.

*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//             0, 1, 2, 3, 4, 5, 6, 7
//             1, 2, 3, 4, 5, 6, 7, 8
let mynewArray = numbers.slice(1,6);
console.log(mynewArray);

