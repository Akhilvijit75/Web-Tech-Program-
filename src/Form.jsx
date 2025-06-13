import React from 'react';

const Form = () => {
    let handleSubmit=(e) =>{
        e.preventDefault();
        console.log(e);
        console.log(e.target);
        alert("Form submitted successfully");
    };
    let handleChange=(e)=> {
        console.log(e.target.value);
    };
  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleChange}>
            <input type="text" onChange={handleSubmit} />
            <button>Submit</button>
        </form>
    </div>
  );
};

export default Form;