// forEach

// let arr = [1, 2, 3, 4, 5];

// let start = performance.now();
// arr.map((number) => console.log(number * number));
// let end = performance.now();
// let totalTime = end - start;
// console.log(totalTime);



// let arr = [1, 2, 3, 4, 5];

// let start = performance.now();
// arr.forEach((number) => console.log(number * number));
// let end = performance.now();
// let totalTime = end - start;
// console.log(totalTime);


function number(num){
    if(num % 2 == 0)
    {
        console.log(`This ${num} is even number`);
        
    }else{
        console.log(`This ${num} is odd number`);
        
    }
}
number(3)
