/*numberFact
Write a function called numberFact which takes in a number and a callback and returns the result of the
 callback with the number passed to it*/
function isEven(num){
    return (num%2===0)
}
function isOdd(num){
    return (num%2!=0)
}
function isPrime(value) {
    for(var i = 2; i <= Math.sqrt(value); i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
 function numberFact(num,fun){

    return fun(num)
 }
 console.log(numberFact(56,isEven));
 console.log(numberFact(6,isOdd));
 console.log(numberFact(59,isOdd));
 console.log(numberFact(3,isPrime))
 
 