// Ques 1: 

let a = 5;
let b = a++ + ++a;
    
console.log(b);

// ans is 12

/* Explaination

 a = 5

step : 1
 b = a++ , here value of b is 5 and value of a is increased which became a = 6
 b = 5 + ++a

step : 2

in step 2 value of a is 6 so ++a became 7 , a = 7 
b = 5 + 7 
b = 12



console.log(b) = 12





*/