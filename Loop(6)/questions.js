const prompt = require("prompt-sync")();

 // print natural numbers from 1 to n and store it in array
const n = +prompt("Enter the natural  number")


// let naturalNumbers = []
// for (let i = 1 ; i<=n ; i++){

//     naturalNumbers.push(i)

// }


// console.log(naturalNumbers)




 //2 . print natural numbers from 1 to n and store it in array
//  let naturalNumbers = []

//  for (let i = n ; i >= 1 ; i--){
//    console.log(i)
//  }

//  console.log(naturalNumbers)
 
 
 
// 3. prints the sum of first n number of natural numbers

let total = 0;

for (let i = 1 ; i<= n; i++){

   total = total + i



}

console.log(total)


