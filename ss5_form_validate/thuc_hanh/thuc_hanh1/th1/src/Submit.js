import React, { useState } from "react";
function Submit() {
    const [username, setUsername] = useState("");
  

    const submitHandler = event => {
        event.preventDefault();  
      alert("You are submitting " + username);
    };
    const handleChange = event => setUsername(event.target.value);
    return (
      <form onSubmit={submitHandler}>
        <hr></hr>
        <h1>Hello {username}</h1>
        <p>Enter your name, and submit:</p>
        <input type="text" defaultValue={""} onChange={handleChange} />
        <input type="submit" />
      </form>
    );
  }

export default Submit;