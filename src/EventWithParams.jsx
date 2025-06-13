import React from 'react'

const EventWithParams = () => {
    let handleClick = (name) =>{
        alert(`Hello How are YOU Mate ${name}`);
    }
  return (
    <div>
        <button onClick={()=>handleClick("BENJII")}>Click MEe</button>
    </div>
  )
}

export default EventWithParams;