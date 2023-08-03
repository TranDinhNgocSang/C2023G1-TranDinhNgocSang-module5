import { Formik, Form, Field, ErrorMessage } from "formik";
import { getListTypeCustomer , getTypeCustomerById } from "../service/typeCustomer";
import {addCustomer} from "../service/customerService"
import { useState, useEffect } from "react";
import * as yup from "yup";
import {Link, useNavigate} from "react-router-dom"
import Swal from "sweetalert2";

function FormAddCustomer() {
  const [typeCustomer, setTypeCustomer] = useState();

  const navigate = useNavigate();

  const showTypeCustomer = async () => {
    const data = await getListTypeCustomer();
    console.log(data);
    setTypeCustomer(data);
  };

  useEffect(() => {
    showTypeCustomer();
  }, []);

  if(!typeCustomer){
    return null;
  }

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-4 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              src="https://i.pinimg.com/564x/ff/f3/ed/fff3ed3cae0ad73a82e422a482a88749.jpg"
              alt=""
              width="100%"
            />
          </div>
        </div>
        <div className="col-md-4 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-right">Edit your profile</h6>
            </div>
            <Formik
              initialValues={{
                name: "",
                dayOfBirth: "",
                gender: "",
                typeCustomer: "",
              }}
              validationSchema={yup.object({
                name: yup.string().required("khong duoc de trong"),
                dayOfBirth: yup.string().required("khong duoc de trong"),
                gender: yup.string().required("khong duoc de trong"),
                typeCustomer: yup.number().required("khong duoc de trong"),
              })}
              onSubmit={async(data)=>{
                const type = await getTypeCustomerById(data.typeCustomer);
                const customer = {
                  ... data,
                  typeCustomer : type
                }
                await addCustomer(customer);
                navigate("/")
                Swal.fire({
                  title: "successfully added new!",
                  text: "!",
                  icon: "success",
                  button: "Aww yiss!",
                });
              }}
            >
              <Form>
                <div className="row mt-2">
                    
                  <div className="col-md-12">
                    <label className="labels">Name</label>
                    <Field type="text" className="form-control" name="name" />
                    <p style={{color:"red"}}><ErrorMessage name="name"></ErrorMessage></p>
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Day of birth</label>
                    <Field
                      type="date"
                      className="form-control"
                      name="dayOfBirth"
                    />
                    <p style={{color:"red"}}><ErrorMessage name="dayOfBirth"></ErrorMessage></p>
                  </div>
                </div>
                <div className="row mt-3" >
                  <div className="col-md-12" >
                    <label > Gender: </label> <br></br>
                    <Field
                      type="radio"
                      style = {{margin : "10px" }}
                      name="gender"
                      value="male"
                      id="male"
                    />
                    <label htmlFor="male">Male</label>
                    <Field
                      type="radio"
                      name="gender"
                      value="female"
                      id="female"
                      style = {{margin : "10px" }}
                    
                    />
                    <label htmlFor="female">Female</label>
                    <p style={{color:"red"}}><ErrorMessage name="gender"></ErrorMessage></p>
                  </div>
                </div>
                <div className="col-md-12">
                  <label className="labels">Type customer</label>
                  <Field as="select" name="typeCustomer">
                    <option value={""}>--choose--</option>
                    {typeCustomer.map((tc) => {
                      return (
                        <option key={tc.id} value={tc.id}>
                          {tc.nameType}
                        </option>
                      );
                    })}
                  </Field>
                  <p style={{color:"red"}}><ErrorMessage name="typeCustomer"></ErrorMessage></p>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="submit"
                  >
                    Add Customer
                  </button>
                </div>
              </Form>
            </Formik>           
          </div>
          <Link to={"/"}>Back to home</Link>
        </div>
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              src="https://i.pinimg.com/564x/ff/f3/ed/fff3ed3cae0ad73a82e422a482a88749.jpg"
              alt=""
              width="100%"
            />
          </div>         
        </div>
      </div>
    </div>
   
  );
}

export default FormAddCustomer;
