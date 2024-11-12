//& filter

/*
The filter method creates a new array with all the elements that pass a test (provided as a function).

Defination: Filters elements from an array based on a condition, returning a new array with elements that
satisfy the condition.

Syntax: array.filter(callback(element .index, array))

*/


const numbers = [1, 2, 3, 4, 5, 6];

//Filte out numbers greater than 3
//*1
//const check = numbers.filter(x => x > 3);
//console.log(check);

//* 2
const check = numbers.filter((x)=> {
    return x > 3
})
console.log(check);


