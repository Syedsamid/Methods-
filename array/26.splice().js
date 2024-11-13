// splice

/*
The splice method changes the contents of an array by removing, replacing, or adding elements.
Unlike slice, splice modifies the original array.

syntax:
array.splice(start,deleteCount, item1,item2...)

*/

let num = [10, 20, 30, 40, 50];
//          0   1   2   3   4
//replacing array elements using splice
num.splice(3, 1, 90);
//console.log(num);

//Removing Array Element using Splice
let num2 = [11, 22, 33, 44, 55];
//          0   1   2   3   4
num2.splice(0,2);
console.log(num2);
