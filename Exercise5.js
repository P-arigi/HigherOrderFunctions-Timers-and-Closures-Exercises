/*isPrime
Write a function called isPrime which takes in a number and returns true if the number is a prime number
 (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false*/


 function isPrime(num){
    for(let i=2;i<num;i++){     //i<Math.sqr(num)
        if(num%i===0){
            return false
        }
         return num>1;
    }
 }
 console.log(isPrime(5));
 //console.log(isPrime(52));
 console.log(isPrime(11));
 console.log(isPrime(7));
 console.log(isPrime(49));
 console.log(isPrime(9));   // Here We need to get the false, but here we getting true how?
 console.log(isPrime(3));