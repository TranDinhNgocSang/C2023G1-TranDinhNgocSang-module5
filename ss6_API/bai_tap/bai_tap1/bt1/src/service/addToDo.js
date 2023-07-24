import axios from "axios";

async function addToDo(todo){
await axios.post("http://localhost:8080/todoList", todo)
};

export default addToDo;