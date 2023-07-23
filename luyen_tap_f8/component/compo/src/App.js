import "./App.css";
import React, {useState} from "react";




function App() {
  const [todo,setTodo] = useState("")
  const [end,setEnd] = useState([])
  
return(
<>
<input value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
<button onClick={()=> {
  if (todo !== "" && end.includes(todo) === false){
  setEnd([...end,todo]);
  setTodo("");
  }
}}>them</button>
{end.map((e,index)=>
<ul key={index}>
  <li>{e}</li>
</ul>
)}
</>
)
}

export default App;
