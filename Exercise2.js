/*RANDOM GAME
Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds
 and each time that a random number is picked, add 1 to a counter. If the number is greater than .75,
 stop the timer and return the number of tries it took before we found a number greater than .75*/


 function randomGame(){
    var num;
    var times=0;
    var timer=setInterval(function(){
        num=Math.random();
        times++
        if(num>.75){
            clearInterval(timer);
            console.log("It look " + times + " try/tries")
        }
    },1000)
 }
 randomGame();