//reduce

/*
The reduce method executes a reducer function on each element of the array, resulting in a single
output value. It's commonly used to accumulate values.
eg: summing numbers, concatenationg the strings)


*/

// let number = [10, 20, 30, 40, 50];
// let number = [1, 2, 3, 4, 5];
// let sum = number.reduce((acc,curr) => acc + curr, 0);
// console.log(sum);

let number = [10, 20, 30, 40, 50];

let sum = number.reduce((accumulator, currentValue, index) => {
    console.log(`Step ${index}: accumulator = ${accumulator}, currentValue = ${currentValue}`);
    return accumulator + currentValue;
},0);