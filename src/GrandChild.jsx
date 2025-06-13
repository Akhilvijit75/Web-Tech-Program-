import React from 'react'
import { secretProperty } from './GrandPa'

const GrandChild = () => {
    let data = useContext(secretProperty);
    console.log(data);
    
  return (
    <div>
        <h1>Grand Child</h1>
        <h1>House:{data.House}</h1>
        <h1>Gold:{data.gold}</h1>
        <h1>Wisdom:{data.wisdom}</h1>
    </div>
  )
}

export default GrandChild