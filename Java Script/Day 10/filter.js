console.log("Filter method in JavaScript");

// Condition
let numbers = [10,89,88,76,45,35,16,69,96,40,79.59];
// array.filter((cValue,cIndex,cArray)=>{return})
let filteredNumber = numbers.filter((cValue,cIndex,cArray)=>{
    if(cValue>40){
        return cValue;
    }
});
console.log(filteredNumber);



