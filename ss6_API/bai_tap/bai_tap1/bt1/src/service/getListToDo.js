import axios from "axios";

async function getListToDo(){
const res = await axios.get("http://localhost:8080/todoList");
return res.data;
}

export default getListToDo;