import React from 'react'

const ChildComponent = (props) => {
    console.log(props);
    
  return (
    <div>
        <h1>childcomponent</h1>
        <h2>name:{props.name}</h2>
        <h3>Age:{props.age}</h3>
    </div>
  )
}

export default ChildComponent;