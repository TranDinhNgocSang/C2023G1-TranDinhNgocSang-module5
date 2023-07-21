import React, { useState } from "react";

 function App() {
  const [username, setUsername] = useState("");
  const handleChange = event => setUsername(event.target.value);
  let header;
  if (username) {
    header = <h1 style={{color: "red"}}>Hello {username}</h1>;
  } else header = "";
  return (
    <div>
      <form>
        {header}
        <p>Enter your name:</p>
        <input type="text" value={username} onChange={handleChange} />
      </form>
    </div>
  );
}


export default App;