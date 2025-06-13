console.log("Rest Parameter");
// Syntax to create rest parameter
// ..variableName
function getNumber(...num){//rest prameter
    console.log("Numbers:",num);
    
}
getNumber(10,20,30,40,50); // arguments

// ...varName
// create one function which will accept names
function getNames(...names){
    console.log("Names")
    console.log(names);
    
}
getNames("John","Bob","Thala Ajith");