import React from 'react'
import ChildComponent from './childcomponent';

const ParentComponent = () => {
  return (
    <div>
        <h1>parentcomponent</h1>
        <ChildComponent name="Akhil" age={19}/>
    </div>
    
  )
}

export default ParentComponent;