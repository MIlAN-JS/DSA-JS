// guess a number game where a computer generates a number and you have to guess it

const prompt = require("prompt-sync")()


    let randomNum = Math.floor(Math.random()*10)
    let userGivenNum = null
    console.log(randomNum)
do { 


     userGivenNum = +prompt("Guess the number")

    if(randomNum > userGivenNum){
        console.log("Greater than ", userGivenNum)
    }

    if(randomNum< userGivenNum){
        console.log("less than ", userGivenNum)
    }

    if(randomNum === userGivenNum){
        console.log("yay you won ", userGivenNum , "is the right number")
    }

}while(randomNum != userGivenNum)