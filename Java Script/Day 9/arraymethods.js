// Push()
// Syntax -> push(ele1,ele2,ele3,...eleN);
let numbers = [10,20,30,40,50];
console.log(numbers);
numbers.push(60,70);
console.log(numbers);

// pop()
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);
 
//shift()
numbers.shift();
console.log(numbers);

// unshift()
numbers.unshift(100,90,80,70);
console.log(numbers);

// Slice()
// Syntax -> slice(startIndex,endIndex)
let slicedElements = numbers.slice(1,6);
console.log(slicedElements);

// Splice()
// Syntax -> splice(startIndex,deleteCount, addElement)
let names = ["Vijay", "Kamal", "Ajith", "Rajini" ,"Dhanush"];
console.log(names);
names.splice(3,2,"Jeeva","SK")
console.log(names);

// concat()
let arr1 = [10,20,30];
let arr2 = [40,50];
let mergedArray = arr1.concat(arr2);
console.log(mergedArray);

// reverse()
let arr3 = ["Hello","World","Bye","World"];
let reversedArray = arr3.reverse();
console.log(reversedArray);

//Join()
// Syntax -> join(seperator -> symbol (-,@,#,$))
let arr4 = ["Hello","World","Bye","World"];
console.log(arr1.join("-"));

// includes()
let books = ["Lots of Love","Ends with us","Rich Dad Poor Dad","Money Money Money"]
console.log(books.includes("Ends with us"));
console.log(books.includes("Pysco"));

// index ()
console.log(books.indexOf("Silk simtha"));
console.log(books.includes("Demo"));

// isArray()
let arr = (1,2,3,4,5);
let newArr = [1,2,3,4,5];
console.log(Array.isArray(arr));
console.log(Array.isArray(newArr));














