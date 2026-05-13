const prompt = require("prompt-sync")();

 // print natural numbers from 1 to n and store it in array
const n = +prompt("Enter the number")


let naturalNumbers = []
for (let i = 1 ; i<=n ; i++){

    naturalNumbers.push(i)

}


console.log(naturalNumbers)