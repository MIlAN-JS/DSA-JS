/* 1. Absolute Difference  , Given two integers a and b, return Math.abs(a - b).


// const diff = (a , b)=>{

//     return Math.abs(a-b)
// }

// const ans = diff(9 , 22)
// console.log(ans) [:Note : abs always returns positive value ]

*/



/* 2. Round a Number
// Given a float x, return it rounded using Math.round().

function roundNum(x){

    return Math.round(x)

}

// let ans = roundNum(2.2) // check by using 2.43 2.80 and more
// console.log(ans)

*/




/*3 . Find Maximum of 3 Numbers
// Input: a, b, c → return max using Math.max().


function findMaxNum(a , b , c){


    return Math.max(a , b ,c)
}


console.log(findMaxNum(65, 20 , 99)) // ans is 99

*/




/* 4 . Square Root Check
// Given n and root , return true if Math.sqrt(n) is an integer.

function checkRoot(num){
    
    let ans =  Math.sqrt(num )
    if (Number.isInteger(ans)){
        return true
    }
  
    return false
}

console.log(checkRoot(6))

*/


/* 5 >Random Number in Range
// Generate a random integer between 1 and 10 using Math.random().÷

let randomNum = Math.floor(Math.random()* 10 ) + 1 // 1 is added because we are not getting 10 due to .floor

console.log(randomNum)

*/

