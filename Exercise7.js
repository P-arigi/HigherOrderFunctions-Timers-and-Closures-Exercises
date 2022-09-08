/* Find
Write a function called find. It should take in an array and a callback and return the 
first value found in the array that matches the condition.*/

function findIndex(arr,func){
    for(let i=0;i<arr.length;i++){
         if(func(arr[i])) return arr[i];
    }

}
a=findIndex([8,11,4,27], function(val){return val >= 10});
console.log(a)
console.log(findIndex([8,11,4,27], function(val){return val === 7}));
console.log(findIndex([8,11,4,27], function(val){return val >= 25}));

