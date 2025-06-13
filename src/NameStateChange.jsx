import React, { useState } from 'react'

const NameStateChange = () => {
    let[name,setName] = useState("Benji");
    let[age,setAge] = useState(20);

    let changeData = () =>{
        setName("Kunjii");
        setAge(25);
    };
  return (
    <div>
        <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
        <button onClick={changeData}>Change Data</button>
    </div>
  )
}

export default NameStateChange