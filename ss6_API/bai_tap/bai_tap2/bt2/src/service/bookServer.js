import axios from "axios";

export async function addBook(book) {
  await axios.post("http://localhost:8080/books", book);
}

export async function deleteBook(id) {
  await axios.delete("http://localhost:8080/books/" + id);
}

export async function editBook(book) {
  await axios.put(`http://localhost:8080/books/${book.id}`, book);
}

export async function showListBooks() {
  const res = await axios.get("http://localhost:8080/books");
  return res.data;
}

export async function getBookById(id) {
  const res = await axios.get("http://localhost:8080/books/" + id);
  return res.data;
}
