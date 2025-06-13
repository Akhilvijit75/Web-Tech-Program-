console.log("Map Methods in JAvaScript");

// Number Array
let numbers = [10,20,30,40,50];
console.log(numbers);

// map() methods ->
//  array.map(currentValue,currentIndex,currentArray)

let updatedNumbers = numbers.map((cValue,cIndex,cArray)=>{
    console.log("Index:" , cIndex , "Value:" , cValue);
    return cValue + 5;
    
});
console.log("New Array:" , updatedNumbers);
console.log("Original Array:" , numbers);

// 2nd Example
let benji = [1,3,5,7,9];
let newBenji = benji.map((cValue,cIndex)=>{
    console.log("Index:",cIndex,"Value:",cValue);
    return cValue **cValue;
    
});
console.log(newBenji);
console.log(benji);




