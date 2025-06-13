console.log("Destructing in JS");

let movies=["Billa","Veram","Vedalam","Mankatha","Vidamuyarchi"];
    console.log(movies);
    console.log(movies[3]);

    let [a, b, c, d, e, f] = movies;
    console.log(a);
    console.log(e);





// Object destruction =>
let hero = {
    name:"Ajith",
    age:53,
    job:"racer"

};
console.log(hero);
console.log(hero.name);

// destructure
let { name , age , job } = obj;
console.log(name);
console.log(age);



