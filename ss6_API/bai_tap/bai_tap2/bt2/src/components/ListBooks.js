import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom"
import {showListBooks,deleteBook} from "../service/bookServer";
function ListBooks() {
const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [flag,setFlag] = useState(false);

  const getBooks = async () => {
    const data = await showListBooks();
    setBooks(data);
  };

  useEffect(() => {
    getBooks();
  },[flag]);

const handelButtonAdd = ()=>{
navigate("/add")
}

const handelButondelete = async(id)=>{
  const confirm = window.confirm("ban co muon xoa");
  if(confirm){
    await deleteBook(id);
    await setFlag(!flag);
    navigate("/")
  }

}

const handelButonEdit =(id)=>{
  navigate("/edit/"+id)
}

  return(
    <>
    <h2>Library</h2>
    <button onClick={handelButtonAdd}>Add new a book</button>
    <table border={1} cellSpacing={0}>
        <thead>
        <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
            {books.map((b)=>{
                return(
                <tr key={b.id}>
                    <td>{b.title}</td>
                    <td>{b.quantity}</td>
                    <td>
                        <button onClick={()=>handelButonEdit(b.id)} >Edit</button>
                        <button onClick={()=>handelButondelete(b.id)}>Delete</button>
                    </td>
                </tr>
                )
            })}
        </tbody>
    </table>
    </>
  )
}

export default ListBooks;
