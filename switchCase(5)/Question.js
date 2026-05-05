// simple questions
// 5. Grade System

// Input marks (0–100)
// Convert into grades:

// A, B, C, D, F
// (use switch(true) pattern)

// 0- 20 F
// 21-40 D
// 41-60 C
// 61-80 B
// 81-100 A

const prompt = require("prompt-sync")()


// const marks = prompt("Enter Marks : ");

// switch(true){
//     case marks >0 && marks <=20 : {
//         console.log("You are assigned grade F because mf you marks is ", + marks)
//         break
//     }
//     case marks >20 && marks <=40: {
//         console.log("You are assigned grade D because mf you marks is ", + marks)
//         break
//     }
//     case marks >40 && marks <=60 : {
//         console.log("You are assigned grade  C because mf you marks is ", + marks)
//         break
//     }
//     case marks >60  && marks <= 80: {
//         console.log("You are assigned grade B because mf you marks is ", + marks)
//         break
//     }
//     case marks >80  && marks <= 100: {
//         console.log("You are assigned grade A because mf you marks is ", + marks)
//         break
//     }
//     default : {
//         console.log("enter valid marks ")
//         break
//     }
// }





// Question 2 : 

// 8. Discount System

// Input: user type:

// "regular" → 5%
// "member" → 10%
// "vip" → 20%

// Return final price after discount


let userBill = prompt("Enter bill amount  :  ");
let customer = prompt(`Enter customer type: 
    Valid customers : regular , member , vip
    `)
let finalPrice = null ;


switch(customer){
    case "regular" : {
        finalPrice = userBill - (5/100) * userBill
        console.log(finalPrice)
        break
    }
    case "member" : {
        finalPrice = userBill - (10/100) * userBill
        console.log(finalPrice)
        break
    }
    case "vip" : {
        finalPrice = userBill - (15/100) * userBill
        console.log(finalPrice)
        break
    }

    default: {``
        console.log("enter valid customer")
    }
}







