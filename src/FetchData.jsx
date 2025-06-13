import React, { useEffect, useState } from 'react'

const FetchData = () => {
    let [data,setData] = useState([]);
    let fetchProducts = async ()=>{
        let response = await fetch("https:/fakestoreapi.com/products");
        let jsonDate = await response.json();
        console.log(jsonDate);
        setData(jsonDate);
        
    };
    // useEffect()->hook
    // syntax -> useEffect(callbackFunction,dependency_array)
    useEffect(()=>{
        fetchProducts();
    },[]);
  return (
    <div>FetchData</div>
  )
}

export default FetchData