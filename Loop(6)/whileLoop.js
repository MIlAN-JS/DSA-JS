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

// let rev = 0 
// while (n> 0){

//     let rem = n % 10 ; 
//      rev = (rev *10) + rem // multiplied with 10 cause we dont want to loose the last value 

//       n = Math.floor(n/10);

    

// }


// console.log(rev)



//ques : 2 --> check if the number is automorphic

 
if(n === 1){
   console.log( n , "is automorphic number")
}

    while (n>0){

        let nld = n%10
        let nSqrt = n * n 
        console.log(nSqrt)
        let sld = nSqrt %10 

       
        if(nld === sld ){
            console.log( n , " is automorphic number")
            break 
        }else{
          console.log( n , "is not automorphic number")
            break
        }
        
    }


