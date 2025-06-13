console.log("String Methods");
// 1.toUppercase()=>
let str1 = "Hello World";
console.log(str1.toUpperCase());

// 2.toLowerCase()=>
let str2 = "HELLO WORLD";
console.log(str2.toLowerCase());
 
// 3. Substring()=>
// Syntax -> substring(startIndex, endIndex);
let str3 = "String in JavaScript ";
let extractedString = str3.substring(0,7);
console.log(extractedString);




//4.Concat()->
let str4 = "Hello World";
let str5 = "Bye World";
let mergedString = str4.concat(str5);
console.log(mergedString);

// 5.trim()->
let str6 = "  Thala Rasigan nu soluven da gethuah  ";
console.log(str6.length);
let removeSpace = str6.trim();
console.log(removeSpace.length);

// 6.Split()->
// syntax -> split(seperator -> ""," ","  ")
let str7 = "OOruu uuka ash aravind uuka avadi bernad";
console.log(str7);
let splitString = str7.split(" ");
console.log(splitString);

// 7.CharAt()-> 
// syntax-> charAt(index -> number)
let str8 = "Thala pola Varuma";
console.log(str8.charAt(9));

// 8,Includes()->
// Syntax -> includes("String") -> boolean value
// -boolean -> present -> true; not present -> False
let str9 = "Tharuku thakita Tharuku Thakita";
let isPresent = str9.includes("a T");
console.log(isPresent);
let isNotPresent = str9.includes("T h");
console.log(isNotPresent);

// 9.Slics()->
// syntax -> slice(startIndex, endIndex);
let str10 = "Otha Ena Valka da Ithu Omala";
let slicedString = str10.slice(0,4);
console.log(slicedString);

// 10.Replace()->

let str11 = "Simbu My Arse"
let replaced = str11.replace("Simbu","Dhanush")
console.log(replaced);










      