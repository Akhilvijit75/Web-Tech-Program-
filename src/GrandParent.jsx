import React from 'react'
import Parent from './Parent';

const GrandParent = () => {
    let property="2cr";

  return (
    <div>
        <h1>GrandParents</h1> 
        <hr />
        <Parent data={property}/> 
    </div>
  )
}

export default GrandParent