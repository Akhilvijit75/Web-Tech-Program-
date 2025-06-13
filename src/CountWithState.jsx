import React, {useState} from 'react';

const CountWithState = () => {
    // useState ->hook
    let [count,setCount] = useState(0);
    console.log(count);

    let handleIncrement = ()=>{
        setCount(count+1);
    };
    let handleDecrement =()=>{
        setCount(count-1);
    };
    let handleReset = ()=>{
        setCount(count);
    }    

  return (
    <div>
        <h1>Counter with State</h1>
        <h1>Counter:{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>ReSet</button>
    </div>
  )
}

export default CountWithState;