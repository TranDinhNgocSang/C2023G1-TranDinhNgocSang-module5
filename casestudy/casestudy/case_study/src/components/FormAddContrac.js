import { ErrorMessage, Field, Form, Formik } from "formik";
import { addContract } from "../service/contract/contract";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function FormAddContract() {
  const navigate = useNavigate();

  return (
    <div className="body">
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
                <h2 className="text-right">Add Contract</h2>
              </div>
              <Formik
                initialValues={{
                  contract_id: "",
                  check_in: "",
                  check_out: "",
                  deposit: "",
                  total: "",
                }}
                validationSchema={yup.object({
                  // contract_id: yup
                  //   .string()
                  //   .required("contract number can't be empty"),
                  check_in: yup.string().required("Start day can't be empty"),
                  check_out: yup.string().required("End day can't be empty"),
                  deposit: yup.number().required("Deposit can't be empty"),
                  total: yup.number().required("Total paymen can't be empty"),
                })}
                onSubmit={async (value) => {
                    console.log(value);
                  await addContract(value);
                  navigate("/contract");
                  Swal.fire({
                    title: "successfully added new!",
                    text: "",
                    icon: "success",
                    button: "Aww yiss!",
                  });
                }}
              >
                <Form>
                  {/* <div className="row mt-2">
                    <div className="col-md-12">
                      <label className="labels">Contract number</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="contract_id"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="contract_id" />
                      </p>
                    </div>
                  </div> */}
                  <div className="row mt-2">
                    <div className="col-md-6 pb-2">
                      <label className="labels">Start day</label>
                      <Field
                        type="date"
                        className="form-control"
                        name="check_in"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="check_in" />
                      </p>
                    </div>
                    <div className="col-md-6 pb-2">
                      <label className="labels">End day</label>
                      <Field
                        type="date"
                        className="form-control"
                        name="check_out"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="check_out" />
                      </p>
                    </div>
                    <div className="col-md-6 pb-2">
                      <label className="labels">Deposits($)</label>
                      <Field
                        type="number"
                        className="form-control"
                        name="deposit"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="deposit" />
                      </p>
                    </div>
                    <div className="col-md-6 pb-2">
                      <label className="labels">Total payment($)</label>
                      <Field
                        type="number"
                        className="form-control"
                        name="total"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="total" />
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
        </div>
      </div>
    </div>
  );
}

export default FormAddContract;
