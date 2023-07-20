import React,{useState}from"react";
function UseIncrement(){
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
return(
  <>
  <p>Count: {count1}</p>
  <button onClick={()=> setCount1((previousSate)=> previousSate+1)}>Add1</button>
  <p>Count: {count2}</p>
  <button onClick={()=> setCount2((previousSate)=> previousSate+2)}>Add2</button>
  </>
)
}

export default UseIncrement;