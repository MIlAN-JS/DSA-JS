// // 1. Output

// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a + b * c > 5 && c--);  // ans is 3  because a+b*c > 5 is 
// console.log(c);  // 2


// // 2. Find the output

// console.log("8" + 5 - 3); // ans is 102


// // 3.  find the output

// let x = true;
// let y = false;
// console.log(x + y);  // ans is 1

// 4. what happens 

// let a = 5;
// let b = 10;
// [a, b] = [b, a];  
// console.log(a, b);  // value of a is 5 and value of b is 10


// 5. what happens
 
// let x = 3;
// let y = x++ + ++x;

// console.log( "value of y is " , y);


// 6. What happens 

//  let a = 10 
//  let b= 7 
// let c = a & b

// console.log(c) // ans is 2 


// 7. what happens
 

//  let a = 120
//  let b= 30
// let c = a | b

// console.log(c) // ans is 126 



// 8. tricky coercion

// console.log([] == false);  // true
// console.log([] === false); // false type pani check hunxa

// 8 . tell the output

// let a = "2";
// let b = 1;
// console.log(a - b);  // 1
// console.log(a + b); // 21


// // 9. logical short circuit

// let x = true;
// let y = 10;

// console.log(x || y);  // 10 opp of&& 
// // console.log(x && y); // ans depends upon first value if true ans is last value if false ans if falsy value 


// 10 > Final Boss
let a =1;
let b = a++ + ++a + a; // ans is 7
console.log(b);
