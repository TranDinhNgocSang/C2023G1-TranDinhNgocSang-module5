import { Formik, Form, Field, ErrorMessage } from "formik";
import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import addBook from "../service/addBook";
import * as yub from "yup";
function AddForm() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Add new a book</h2>
      <br />
      <Formik
        initialValues={{
          title: "",
          quantity: "",
        }}
        validationSchema={yub.object({
          title: yub.string().required("khong được để trống"),
          quantity: yub.string().required("khong được để trống"),
        })}
        onSubmit={(book)=>{
            addBook(book);
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

export default AddForm;
