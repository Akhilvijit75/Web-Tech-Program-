// create function which will fetch the data
async function fetchProducts(){
    // Step1-fetch the data by using fetch('api')api
    let response = await fetch("https://fakestoreapi.com/products")
    // console.log(response);

    // Step2-Convert data into JSON format
    let data = await response.json();
    console.log(data);

    // Access the main container
    let container = document.getElementById("product-container");
    // console.log(container);

    // Display teh products
    container.innerHTML = data
    .map((product) => {
        return  `<div class="product-item">
        <img src="${product.image}" alt="${product.title}" class="product-image" />
        <h1 class="product-title">${product.title}</h1>
        <p class="product-cat">${product.category}</p>
        <p class="product-price">${product.price}</p>
        <button class="buy-btn btns">Buy</button>
    </div>`


    });
    
    
    
}