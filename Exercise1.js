//Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds
// decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.

function countdown(number){
    let numbers=setInterval(function(){
        number--;
        if(number<=0){
            clearInterval(numbers)
            console.log("Done!")
            
        }
        else{
            console.log(number)
        }
    },1000)
}
countdown(4)