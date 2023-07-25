import axios from "axios";

 export async function addToDo(todo){
await axios.post("http://localhost:8080/todoList", todo)
};

export async function getListToDo(){
    const res = await axios.get("http://localhost:8080/todoList");
    return res.data;
    }
