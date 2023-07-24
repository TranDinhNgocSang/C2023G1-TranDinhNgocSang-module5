import axios from 'axios';

async function showListBooks(){
    const res = await axios.get("http://localhost:8080/books");
    return res.data;
    }
    
    export default showListBooks;
