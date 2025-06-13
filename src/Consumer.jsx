import React,{useContext} from 'react'
import { myContext } from './Context'

const Consumer = () => {
    // Step-3 consume the data with the help of useContext()
    let dataRecieved=useContext(myContext)
    console.log("Consumer-1 :",dataRecieved);
    return <div>Property for consumer-1 :{dataRecieved}</div>
    
  
  
}

export default Consumer