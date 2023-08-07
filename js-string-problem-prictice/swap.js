let first = 5;
let second = 7;
console.log(first, second);

let temp;

temp= first;
// first= second;
// second = temp;
// console.log(first,second);

// ------------------
// Approach : 2 ------- Destructing 
[first, second ] = [second, first];
console.log(first,second);