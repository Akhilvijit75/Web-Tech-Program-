// //  create one function which will fetch the data

// async function fetchData() {
//     try{
//         // step-1:Fetch the data with the help of fetch API
//         let response = await fetch("https://fakestoreapi.com?");
//         console.log(response);

//         //  step 2: convert these JSON string data into JS object
//         let data = await response.json();

//         // Step 3: use the data
//         console.log(data);
        
//     }
// }
// fetching an api data
async function getresponse(){
    try{
        let response= await fetch("https://fakestoreapi.com/products")
        console.log(response);
        let data= await response.json()
        console.log(data)

    } catch (error) {

        console.error('Error fetching data:', error);
    }
}
getresponse();