import { Formik, Form, Field, ErrorMessage } from "formik";
import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import * as yub from "yup";
import { useEffect, useState } from "react";
import {getBookById,editBook} from "../service/bookServer";


function EditForm() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [book,setBook] = useState()

  const fetchBookById = async () => {
    const getBook = await getBookById(id);
    setBook(getBook);
  };
      
  useEffect(() => {
    fetchBookById();
  }, [id]);

  if(!book){
    return null
  }
  
  return (
    <> 
      <h2>Edit a book</h2>
      <br />
      {console.log(book)}
      <Formik
        initialValues={{
            id : book.id,
          title: book.title,
          quantity: book.quantity,
        }}
        validationSchema={yub.object({
          title: yub.string().required("tieu de khong được để trống"),
          quantity: yub.string().required("so luong khong được để trống"),
        })}
        onSubmit={(book)=>{
            console.log(book);
            editBook(book);
            navigate("/")
        }}
      >
        <Form>
        <p>Title</p>
        <Field type="text" name="title"></Field>
        <span style={{color: "red"}}><ErrorMessage name="title"/></span>
        <p>Quantity</p>
        <Field type="number" name="quantity"></Field>
        <span style={{color: "red"}}><ErrorMessage name="quantity"/></span>
        <br></br>
        <button type="submit">Submit</button>
        </Form>
      </Formik>
      <Link to={"/"}>back</Link>
    </>
  );
}

export default EditForm;
