import React from 'react'

const TernaryRender = () => {
    let num = 10;
    let isLoggedInUser = false;
  return (
    <div>
        <h1>Conditional Rendering with the help of Ternary Operator </h1>
        {isLoggedInUser ? <Login/> : <Register/>}
    </div>
  )
}

export default TernaryRender