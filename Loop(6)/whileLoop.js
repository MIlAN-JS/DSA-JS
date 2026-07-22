const prompt = require("prompt-sync")();


let n = +prompt("Enter number")



// question : 1  (print the given numbers seperately)


// while(n>0){
    
//     lDigit = n % 10 ; 
//      console.log(lDigit , "digit is ");
//      n = Math.floor( n /10)
//      console.log(n , "n is ") 

// }


//question : 2  reverse the given n number

let rev = 0 
while (n> 0){

    let rem = n % 10 ; 
     rev = (rev *10) + rem // multiplied with 10 cause we dont want to loose the last value 

      n = Math.floor(n/10);

    

}


console.log(rev)

