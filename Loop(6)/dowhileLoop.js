//quest 1 :  guess a number game where a computer generates a number and you have to guess it

const prompt = require("prompt-sync")()


//     let randomNum = Math.floor(Math.random()*10)
//     let userGivenNum = null
//     console.log(randomNum)
// do { 


//      userGivenNum = +prompt("Guess the number")

//     if(randomNum > userGivenNum){
//         console.log("Greater than ", userGivenNum)
//     }

//     if(randomNum< userGivenNum){
//         console.log("less than ", userGivenNum)
//     }

//     if(randomNum === userGivenNum){
//         console.log("yay you won ", userGivenNum , "is the right number")
//     }

// }while(randomNum != userGivenNum)


// ques : 2 



let usrCntryChoice ;
let usrFoodChoice ;
let usrReChoice ; 

do {

    console.log("Enter 1 for indian food ")
    console.log("Enter 2 for chinese food ")
    console.log("Enter 3 for korean food")

     usrCntryChoice = +prompt("Enter your country food choice ")
     
    switch(usrCntryChoice){

        case 1 : {

            let reorder = null


            
            do {

            console.log("Enter 4 for chole bhature")
            console.log("Enter 5 for samosa achar")
              usrFoodChoice = +prompt ("Enter your Indian food choice")
              switch(usrFoodChoice){
                case 4 : {
                    console.log("Chole bhature will be delivered in 10 minutes Thank you  ")
                    break;
                }

                case 5: {
                    console.log("samosa achar will be delivered in 4 minutes Thank you  ")
                    break
                }

                default : console.log("Wrong choice")
                break;
              }

              reorder = +prompt("Enter 10 if you want to reorder indian food ")
           
              
               
            } while (reorder === 10);

            break;
        }


        case 2 : {

            let reorder = null

            
            do {

            console.log("Enter 4 for xinxang")
            console.log("Enter 5 for dingdong")
              usrFoodChoice = +prompt ("Enter your chinese food choice")
              switch(usrFoodChoice){
                case 4 : {
                    console.log("xinxang will be delivered in 10 minutes Thank you  ")
                    break;
                }

                case 5: {
                    console.log("dingdong will be delivered in 4 minutes Thank you  ")
                    break
                }

                default : console.log("Wrong choice")
              }

              reorder = +prompt("Enter 10 if you want to reorder chinese food ")


              
               
            } while (reorder === 10 );

            break


        }

        default : console.log("invalid choice")
        break;


    }

    usrReChoice = +prompt("Enter 11 if you want to reorder ")
    

     

}while(usrReChoice === 11)

