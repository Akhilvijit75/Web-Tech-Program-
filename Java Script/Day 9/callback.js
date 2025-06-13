console.log("Callback Function");

// Functions for order food 
function orderFood(waiter){
    console.log("Chef: Your Chicken is getting cooked");
    waiter();
}
// Function for serveing the food
function ServeOrder(){
    console.log("Waiter: The Chicken is ready");
    
}
function parcelFood(){
    console.log("Please Parcel my food");
    
}
orderFood(parcelFood);
orderFood(ServeOrder);