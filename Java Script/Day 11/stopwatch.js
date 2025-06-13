// setInterval()
let counter = 50;
let interval = setInterval(() =>{
    console.log(counter);
    counter--;
    if(counter<0){
        console.log("Time's up 🐭");
        clearInterval(interval);
        
    }
    
}, 1000);