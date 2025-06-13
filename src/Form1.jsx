import React, { useState } from 'react'

const form1 = () => {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let handleChangeForFirstName = (e) => {
        let value = e.target.value;
        setFirstName(value);
    };
    let handleChangeForLastName = (e) => {
        let value = e.target.value;
        setLastName(value);
    };
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);


    };
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">First Name</label>
                <input type="text" className="border" value={firstName} name="firstName" onChange={handleChangeForFirstName} />
                <br />
                <label htmlFor="">Last Name:</label>
                <input type="text" className="border" value={lastName} name="lastName" onChange={handleChangeForLastName} />
                <button className="border ml-2">Submit</button>
            </form>
        </div>
    )
}

export default form1;