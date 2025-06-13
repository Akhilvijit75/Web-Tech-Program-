import React from 'react';

const Rule4 = () => {
  return (
    <div>
        <h1>RULE-4:The attributes name should be in camelCase</h1>
        <button onClick={()=>alert("Magilchi")}>Aaluthuu</button>

        <h1>Rule-5:class-className</h1>
        <h1 className=''>This is a heading</h1>

        <h1>Rule-6:for-htmlFor</h1>
        <label htmlFor="firstname">FirstName</label>
        <input type="text" id='firstname' />
    </div>
  )
}

export default Rule4;