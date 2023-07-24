import React, { useEffect, useState } from "react";
import getListToDo from "../service/getListToDo";
import addToDo from "../service/addToDo";

function ToDo() {
  const [todo, setTodo] = useState([]);
  const [newToDo, setNewToDo] = useState('');

  useEffect(() => {
    const getToDo = async () => {
      const data = await getListToDo();
      setTodo(data);
    };
    getToDo();
  },[]);

  const handleInputChange = (e) => {
    setNewToDo(e.target.value);
  };

  const handleSubmit = async() => {
    await addToDo({
      name: newToDo,
    });
    setNewToDo('');
    const data = await getListToDo();
    setTodo(data);
  };

  return (
    <>
      <h1>Todo List</h1>
      <input onChange={handleInputChange} value={newToDo} />
      <p>{newToDo}</p>
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {todo.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
    </>
  );
}

export default ToDo;
