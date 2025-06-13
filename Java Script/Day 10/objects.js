console.log("Objects in JavaScript");


// Properties of car 
let color = "black";
let model = "GT";
let brand = "Ford Mustang";

// Functionality of the car
function start(){
    console.log("Car has been started..");
        
}
start();

// How to create an object()
let car = {
    color:"White",
    brand:"Benz",
    model:"s-class",
    fuelType:"Petrol",
    start:()=>{
        console.log("Car is Ready to Race");
        
    },
};

// Accessing the car object properties
console.log(car);
console.log(car.model);
console.log(car.brand);

// Employee Object
let employee = {
    eName:"Benji",
    eId:101,
    eSalary:1500000,
    eIsMarried:false,
};

console.log(employee);

// How to access the employee properties
console.log(employee.eNmae);

// Adding property to the employee object
employee.eAge = 19;
console.log(employee);

// How to delete property from the employee object
delete employee.eIsMarried;

// Human object

let human = {
    name:"john",
    age:98,
    status:true,
    designation:"software engineer",
    "emp salary":9999999,
    7:"Thala",
};
console.log(human);

// How to access the special keys in object
console.log(human["emp salary"]);
console.log(human[7]);
console.log(human["name"]);

// key has a dynamic
// first create a keyname with string
let keyName = "city";
// add that key to the object with bracket notation
// and provide the value
human[keyName] = "Chennai";
console.log(human);












