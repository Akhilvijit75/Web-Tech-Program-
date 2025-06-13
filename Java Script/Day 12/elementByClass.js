// getElementsByName("className")

let paraElements = document.getElementsByClassName("para")
console.log(paraElements); // HTML Collection
console.log(Array.isArray(paraElements)); //False

// Style
// paraElements.style.color="blue";
 
// Firts convert html collection into an array
// 1.Array.from(html collection);
let newArray = Array.from(paraElements);
console.log(newArray);
console.log(Array.isArray(newArray));
// 2.By using spread operator(...varName)
let newArray2 = [...paraElements];
console.log(newArray2);
console.log(Array.isArray(newArray2));

// now we successfully converted html collection into an array
// So now you can iterate on the array

newArray.map((ele,index)=>{
    ele.style.color="blue";
    if(index == 1){
        ele.style.backgroundcolor = "yellow";
    }
});




