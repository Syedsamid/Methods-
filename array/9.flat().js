//flat 
/*
The flat() method creates a new array with all sub-array elements
concatenated into it recursively up to the specified depth.

*/  

const nestedArray = [1, 2, [3, 4, [5, 6]]];

//flaten the array by one level
const flattened = nestedArray.flat(1);
console.log(flattened);

//Flatten the array completely
const check2 = nestedArray.flat(Infinity);
console.log(check2);

