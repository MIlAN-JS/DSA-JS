const prompt = require("prompt-sync")();


let n = +prompt("Enter number")



// question : 1  (print the given numbers seperately)




while(n>0){
    
    lDigit = n % 10 ; 
     console.log(lDigit , "digit is ");
     n = Math.floor( n /10)
     console.log(n , "n is ") 

}