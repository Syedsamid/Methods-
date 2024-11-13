// isArray

//The Array.isArray() methods checks if a given value is an array, returning 
// true if it is and false otherwise.

let a = "Hello";
let b = 10;
let c = falses;
let d = {
    name: "samid"
}
let e = [10, "Hello", false, true, 34, "Bye"];

console.log(Array.isArray(e));


const arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr2);

console.log(Array.isArray(arr2));

console.log(typeof arr2); //? Its an Object but shows as Array


// passing an empty array []
console.log(Array.isArray([])); // true


// we have created an array with element 7 and
// passed that value to isArray()
console.log(Array.isArray(new Array(7))); // true

// passing a boolean value
console.log(Array.isArray(true)); // false


// passing undefined
console.log(Array.isArray(undefined)); // false


// not passing any argument in isArray()
console.log(Array.isArray()); // false

