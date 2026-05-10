// Clamp a Number
// Given x, min, max, restrict x within range.
// Example: clamp(15, 0, 10) → 10

function clamp(x , min , max){

    let ans; 

    if (x< min){
        ans = min
        return ans
    }
    
    if (x>max){
        ans = max
        return ans
    }

    ans = x

    return ans

}


let checkAns = clamp(22, 0 , 20)
console.log(checkAns)

const clamp = (x, min, max) => Math.min(Math.max(x, min), max);x