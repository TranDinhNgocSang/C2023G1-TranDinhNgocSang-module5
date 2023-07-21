import React, { useState } from "react";

function Textarea() {
  const [state, setState] = useState({
    description: "The content of a textarea goes in the value attribute"
  });

  const [car, setCar] = useState({
    mycar: 'Fiat'
    })
  return (
    <form>
        <br></br>
        <hr></hr>
      <textarea style={{width:"100%"}} value={state.description} />
      <select value={car.mycar}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  );
}


export default Textarea;