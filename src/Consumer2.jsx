import React,{useContext} from 'react'
import { myContext } from './Context'

const Consumer2 = () => {
    // Step-3 consume the data with the help of useContext()
    let dataRecieved=useContext(myContext)
    console.log("Consumer-2 :",data2);
    return <div>Property for consumer-1 :{data2}</div>
    
  
  
}

export default Consumer2;