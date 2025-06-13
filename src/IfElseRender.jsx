import React from 'react'

const IfElseRender = () => {
    let isLoggedInUser = true;
    if(isLoggedInUser){
        return <h1>Vanakam da Mapla</h1>
    } else{
        return <h1>Veliya poda pooluu</h1>
    }
  return (
    <div></div>
  )
}

export default IfElseRender