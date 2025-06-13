import React from 'react'
import Child2 from './Child2'

const Parent2 = () => {
    let employee = {
        eName: "Akhil Benji",
        eSalary: 987654321,
        eId: 100,
        eDesignation: "BusinessMan",
        eDoesExist: true,
        eStatus: undefined,
        eJob: null
    };
    return (
        <div>
            <h1>Parent Component</h1>
            <Child2 employee={employee}/>

        </div>
    )
}

export default Parent2