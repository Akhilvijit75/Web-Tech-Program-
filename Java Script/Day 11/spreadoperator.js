// Array
let arr1 = [];
console.log("Array1:",arr1);
const arr2 = [60,70,80,90,100];
console.log("Array:",arr2);

// spread Operator ->
// Synatx -> ...varName
arr1 = [10,20,30,40,50,...arr2];
console.log(arr1);

// Object(Spread Operator)
let obj1 = {
    name:"John",
    age:29,
}
console.log(obj1);
// here ...obj1->Spread Operator
let obj2 = {...obj1,city:"Dubai",address:"Dubai kuruku sandu"}
console.log(obj2);



