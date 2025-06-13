// document.querySelector("css_selector");
// Targeting h1 with the help of id selector(#head)
let heading = document.querySelector("#head");
console.log(heading);
// Targeting p with the help of class selector(.para)
let paraElements = document.querySelector(".para");
console.log(paraElements);
// document.querySelectorAll()
let allElements = document.querySelectorAll("p");
console.log(allElements);

// let allElements1 = document.querySelectorAll(".para");
// console.log(allElements1);

// allElements.style

// First convert nodelist into an array
let arr = Array.from(allElements);
console.log(arr);
console.log(Array.isArray(arr));

arr.map((ele,index)=>{
    ele.style.color="red";
    if(index==2){
        ele.style.backgroundColor="yellow";
        ele.style.fontSize="30px";
    }
});






