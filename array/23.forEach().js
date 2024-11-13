//forEach

/*
the forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.

Always remenber that it doesn't return anything and 
if you try to get the value it will be undefinded.

The forEach method is used to execute a provided function once for
each array element. It's generally used when you neeed to persorm a side effect 
(e.g loging, updating a UI) rather than transforming the array itself, as
it doesn't rerurn a new array.

First parameter value and second parameter is its indux number

forEach is the most important methods in frondEnd and backEnd

*/

// const numbers = ["Hello", "Hi", true, 45,undefined];
// numbers.forEach((x, index) => {
//     console.log(x, index);
    
// })


//const arr = [10, 20, 30, 40, 50, 60];

// console.log(arr.length);
// console.log("--------");

// for(let i = 1; i <= arr.length-1; i++){
//     console.log(arr[i]);
// }

//*while

// let i = 0;
// while (i <=arr.length-1) {
//     console.log(arr[i]);
//     i++;
// }

//*do-while

// let i = 0;
// do {
//     console.log(arr[i]);
//     i++;
    
// } while (i<=arr.length-1);



//let start = performance.now() //timer start
// const arr = ["hello", 90, true, "samid"];
// const arr = [10, 20, 30, 40, 50, 60];
// for(let i = 0; i<= arr.length-1; i++){
//     console.log(arr[i] * 999999 );
    
// }
// console.log("----------");
// let end = performance.now();
// let totalTime = end - start;
// console.log(totalTime);
// arr.forEach((x,i) => console.log(x,i));

//you can not use forEach for 


let numbers = [5,4,3,2,1];
numbers.forEach((x) => console.log(x));
console.log("-------------");

//ForEach does not return value
console.log(numbers.forEach((x) => x));

let send = numbers.forEach((x) => x);
console.log(send);


// There are four points in ForEach
// 1. The Returning Value == X
// 2. Ability to chain other methods == X
// 3. Performance speed 

console.log("-------------");

// let box = [5, 4, 3, 2, 1];
// box.forEach((x) => console.log(x * x))
// console.log(numbers.forEach((x)=> x * x).filter((x) => x)); //it gives undefined 


