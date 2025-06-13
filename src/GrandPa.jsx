import React from 'react';
// Step1-Create Global context
export let secretProperty = createContext();

const GrandPa = ({children}) => {
    let grandpatreasure = {
        House:"Big Resort",
        gold:"100 soverign",
        wisdom:"Sogusuu"
    };
  return (
    <secretProperty.Provider value={grandpaTreasure}>{children}</secretProperty.Provider>
  );
};

export default GrandPa;