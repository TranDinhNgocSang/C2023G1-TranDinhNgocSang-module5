import axios from "axios";

async function addBook(book){
await axios.post("http://localhost:8080/books", book)
};

export default addBook;