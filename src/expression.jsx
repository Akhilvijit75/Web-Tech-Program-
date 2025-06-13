import React from 'react'

const expression = () => {
    let food = "spicy Chicken";
    console.log(food);

    let foodIsGood = false;
    let iceCreamIsThere = null;
    let areYouCream = undefined;
    console.log(foodIsGood);
    
    console.log(iceCreamIsThere);
    
    console.log(areYouCream);
    
    
  return (
    <>
    <h1>JSX EXPRESSION</h1>
    <h2>FOOD:{food}</h2>
    <h2>foodIsGood:{foodIsGood}</h2>
    <h2>iceCreamIsThere:{iceCreamIsThere}</h2>
    <h2>areYouCream:{areYouCream}</h2>

    </>
  );
};

export default expression;