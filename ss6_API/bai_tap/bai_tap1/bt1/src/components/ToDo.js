import React, { useEffect, useState } from "react";
import {getListToDo,addToDo} from "../service/todoserver"

function ToDo() {
  const [todo, setTodo] = useState([]);
  const [newToDo, setNewToDo] = useState('');

  const getToDo = async () => {
    const data = await getListToDo();
    setTodo(data);
  };

  useEffect(() => {
    getToDo();
  },[newToDo]);

  const handleInputChange = (e) => {
    setNewToDo(e.target.value);
  };

  const handleSubmit = async() => {
    await addToDo({
      name: newToDo,
    });
    setNewToDo('');
  };

  return (
    <>
      <h1>Todo List</h1>
      <input onChange={handleInputChange} value={newToDo} />
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
