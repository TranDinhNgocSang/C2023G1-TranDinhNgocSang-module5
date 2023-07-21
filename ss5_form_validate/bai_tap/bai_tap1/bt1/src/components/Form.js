import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function ContacForm() {
  return (
    <>
      <h2>Contact form</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("khong duoc de trong"),
          email: Yup.string().required("khong duoc de trong").email(),
          phone: Yup.string()
            .required("khong duoc de trong")
            .length(10, "phai du 10 so"),
          message: Yup.string()
            .required("khong duoc de trong")
            .max(50, "mess khong duoc qua dai"),
        })}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field id="name" type="text" name="name"></Field>
            <ErrorMessage
              name="name"
              component="div"
              className="text-red"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" type="text" name="email"></Field>
            <ErrorMessage
              name="email"
              component="div"
              className="text-red"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <Field id="phone" type="text" name="phone"></Field>
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="message">Messeage</label>
            <Field id="message" type="text" name="message"></Field>
            <ErrorMessage
              name="message"
              component="div"
              className="text-red"
            ></ErrorMessage>
          </div>
          <button type="submit">submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default ContacForm;
