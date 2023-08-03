import { useEffect, useState } from "react";
import { addCustomer } from "../service/customer/customer";
import {
  getListTypeCustomer,
  getTypeCustomerById,
} from "../service/customer/typeCustomer";
import { Field, Formik, Form, ErrorMessage, validateYupSchema } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function FormAddCustomer() {
  const [typeCustomer, setTypeCustomer] = useState([]);
  const navigate = useNavigate();

  const getListTypeCus = async () => {
    const data = await getListTypeCustomer();
    setTypeCustomer(data);
  };

  useEffect(() => {
    getListTypeCus();
  });

  return (
    <>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                src="https://i.pinimg.com/736x/00/38/64/003864b2fe7d991ba831bd24436a742e.jpg"
                alt=""
                width="100%"
              />
            </div>
          </div>
          <div className="col-md-8 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="text-right">Add Customer</h2>
              </div>
              <Formik
                initialValues={{
                  id: "",
                  name: "",
                  date_of_birth: "",
                  gender: "",
                  id_card: "",
                  phone_number: "",
                  email: "",
                  customer_type: "",
                  address: "",
                }}
                validationSchema={yup.object({
                  name: yup.string().required("name can't be empty"),
                  date_of_birth: yup
                    .string()
                    .required("date of birth can't be empty"),
                  gender: yup
                    .string()
                    .required("gender of birth can't be empty"),
                  id_card: yup
                    .string()
                    .required("id card of birth can't be empty"),
                  phone_number: yup
                    .string()
                    .required("phone number of birth can't be empty"),
                  email: yup.string().required("email of birth can't be empty"),
                  customer_type: yup
                    .string()
                    .required("customer type can't be empty"),
                  address: yup
                    .string()
                    .required("address of birth can't be empty"),
                })}
                onSubmit={async (value) => {
                  const typeCustomer = await getTypeCustomerById(
                    value.customer_type
                  );
                  const newCustomer = {
                    ...value,
                    customer_type: typeCustomer,
                  };
                 await addCustomer(newCustomer);
                  navigate("/customer");
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
                      <label className="labels">Full name</label>
                      <Field type="text" className="form-control" name="name" />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="name" />
                      </p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6 pb-2">
                      <label className="labels">Day of birth</label>
                      <Field
                        type="date"
                        className="form-control"
                        name="date_of_birth"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="date_of_birth" />
                      </p>
                    </div>
                    <div className="col-md-6 pb-2">
                      <p className="labels mb-1">Gender</p>
                      <Field
                        type="radio"
                        name="gender"
                        value="Male"
                        id="male"
                      />
                      <label style={{ marginRight: "10%" }} htmlFor="male">
                        Male
                      </label>
                      <Field
                        type="radio"
                        name="gender"
                        value="Female"
                        id="female"
                      />
                      <label htmlFor="female">Female</label>
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="gender" />
                      </p>
                    </div>
                    <div className="col-md-6 pb-2">
                      <label className="labels">Id card</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="id_card"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="id_card" />
                      </p>
                    </div>
                    <div className="col-md-6 pb-2">
                      <label className="labels">Phone</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="phone_number"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="phone_number" />
                      </p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="labels">Email</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="email"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="email" />
                      </p>
                    </div>
                    <div className="col-md-4">
                      <label className="labels">Type customer</label>
                      <Field
                        as="select"
                        className="form-select"
                        aria-label="Default select example"
                        name="customer_type"
                      >
                        <option value={""}>--choose--</option>
                        {typeCustomer.map((t) => {
                          return (
                            <option key={t.id} value={t.id}>
                              {t.nameType}
                            </option>
                          );
                        })}
                      </Field>
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="customer_type" />
                      </p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <label className="labels">Address</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="address"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="address" />
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center back">
            <i className="fa fa-long-arrow-left mr-1 mb-1" />
            <h6>Back to home</h6>
          </div>
        </div>
      </div>
    </>
  );
}
export default FormAddCustomer;
