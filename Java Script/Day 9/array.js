console.log("Arrays in JavaScript");
// [] -> Array Literals
// Homogeneous Array -> Same type of data or elements
let numbers = [10,20,30,40,50];
console.log(numbers);

let names = ["Ajith Kumar", "Thala Ajith","Thalapathy","Ilaya Thalapathy","STR"];
console.log(names);

// Heterogeneous Array -> Different types of data or elements
let combineArray = [10,"John",true,null,"Benji"];
console.log(combineArray);


// Accessing the array elements
let todolist = [
    "Gym",
    "Revise",
    "Kai velaii",
    "Sleeping",

];
console.log(todolist);
console.log(todolist[3]);
console.log(todolist[1]);

// Updating the Array Elements
todolist[2] = "Have Beer";
console.log(todolist);
// remove the elements -> 
todolist[1]= "";
console.log(todolist);

let elementsCount = todolist.length;
console.log(elementsCount);






