import axios from "axios";

async function editBook(book){
    await axios.put(`http://localhost:8080/books/${book.id}`, book);
};

export default editBook;