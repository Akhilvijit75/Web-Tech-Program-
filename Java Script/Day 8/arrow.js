// !Syntax - () => {}

    let arr=() =>{
        console.log("This is a arrow function");
        
     };
    // todo calling fun
    arr();
    
    let addNum=(a)=> console.log(a);
    addNum(10);
    
    let num=(a,b)=>{
        console.log(a+b);
        console.log(a-b);
        
    };
    // ? Implicit Return
let greet=name=> name;
console.log(greet("John"));

// ?explicit return
let greet2=(name)=>{
    console.log("Inside the arrow function");
    return name;

    
};
console.log(greet2("John"));