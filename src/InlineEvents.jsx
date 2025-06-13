import React from 'react'

const InlineEvents = () => {
    // Externl Events
    let handleClick = () =>{
        alert("Buttons Clicked");
    }
  return (
    <div>
        {/* onclick = {FunctionName or eventHandlerName} */}
        <button onClick={handleClick}>Click mEE</button>
    </div>
  )
}

export default InlineEvents