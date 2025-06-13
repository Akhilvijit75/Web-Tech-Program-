import React from 'react'
// Step1- create context
export let myContext = createContext();


const Context = ({children}) => {
    // create the data
    let property = "2CR";
  return (
    <myContext.Provider value={property}>{children}</myContext.Provider>
  )
}

export default Context