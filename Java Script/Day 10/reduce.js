console.log("Reduce in JavaScript");
let numbers = [10,20,30,40,50];
// reduce method
//  array.reduce((acc,cValue,cIndex,cArray)=>{})
let sum = numbers.reduce((acc,cValue,cIndex,cArray)=>{
    console.log("acc:",acc,"index:",cIndex,"Value:",cValue);
    return acc + cValue;
    
});
console.log("The sum is ",sum);
   
