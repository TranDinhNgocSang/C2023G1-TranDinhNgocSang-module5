import axios from "axios";

async function deleteBook(id){
await axios.delete("http://localhost:8080/books/"+ id)
};

export default deleteBook;