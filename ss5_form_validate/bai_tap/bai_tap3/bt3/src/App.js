import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import {Form, Formik,Field,ErrorMessage} from 'formik'
import * as yub from 'yup'
import { useState, useEffect } from "react";
const students = [
  {
    id: 1,
    name: "Sang",
    age: 25,
  },
  {
    id: 2,
    name: "Phin",
    age: 25,
  },
];

function ListStudens() {
  return (
    <>
      <h2>List Student</h2>
      <Link to="/add">Create student</Link>
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((st) => (
            <tr key={st.id}>
              <td><Link to={`/view/${st.id}`}>{st.name}</Link></td>
              <td>{st.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function View (){
  const {id}= useParams();
  const [st,setSt] = useState();
useEffect(()=>{
const aa = students.filter((studen)=>{
return studen.id === +id})[0];
setSt(aa);
},[id])

if(!st){
  return null;
}
return(
  <>
  <h2>View</h2>
  <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
              <td>{st.name}</td>
              <td>{st.age}</td>
        </tbody>
      </table>
      <Link to="/">Home</Link>
  </>
)
}

function AddStudent() {
  const navigate = useNavigate();
  return (
    <>
    <h2>thêm mới</h2>
    <Formik
    initialValues={
      {
        name : "",
        age : "",
      }
    }
    validationSchema={yub.object({
      name : yub.string().required("khong dc trong"),
      age : yub.number("phai la so").min(0,"phai lon hon 0").required("khong dc rong")
    })}
    onSubmit={(values)=>
      {
    students.push({
      id : students.length+1,
      name : values.name,
      age : values.age
    });
    navigate("/")
    console.log(students);
  }
  }
    >
<Form>
  <div>
    <label htmlFor="name">name</label>
    <Field id="name" type = "text" name="name"></Field>
    <p style={{color:"red"}}><ErrorMessage name="name"/></p>
  </div>
  <div>
    <label htmlFor="age">age</label>
    <Field id="age" type = "text" name="age"></Field>
    <p style={{color:"red"}}><ErrorMessage name="age"/></p>
  </div>
  <button type="submit">Submit</button>
</Form>
    </Formik>
    </>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListStudens />}></Route>
        <Route path="/add" element={<AddStudent />}></Route>
        <Route path="/view/:id" element={<View />}></Route>
      </Routes>
    </>
  );
}

export default App;
