import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import {addMusic} from "../service/nhacService"

function FormAdd() {
  const navigate = useNavigate();
  return (
    <>
    <div className="container rounded  mt-5 mb-5">
      <div className="row " >
        <div className="col-md-5">
          <div className="p-3 py-5 bg-white" >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="text-right">Add Mucsic</h2>
            </div>
            <Formik
              initialValues={{
                id: "",
                tenBai: "",
                caSi: "",
                nhacsi: "",
                thoiGian: "",
                luotThich : 0,
                trangThai : "Lưu Trữ" 
              }}
              validationSchema={yup.object({
                tenBai: yup.string().required("tên bài hát không được để trống"),
                caSi: yup.string().required("tên ca sĩ không được để trống").max(30,"Tên ca sĩ tối đa 30 ký tự"),
                nhacsi: yup.string().required("tên nhạc sĩ không được để trống").max(30,"Tên ca sĩ tối đa 30 ký tự"),
                thoiGian: yup.string().required("thời gian không được để trống").matches(),
              })}
              onSubmit={ async(value) => {
                await addMusic(value);
                navigate("/")
                Swal.fire({
                  title: "successfully added new!",
                  text: "",
                  icon: "success",
                  button: "Ok",
                });      
              }}
            >
              <Form>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <label className="labels">Tên bài hát</label>
                    <Field type="text" className="form-control" name="tenBai" />
                    <p style={{ color: "red" }}>
                      <ErrorMessage name="tenBai"></ErrorMessage>
                    </p>
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Ca sĩ</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="caSi"
                    />
                    <p style={{ color: "red" }}>
                      <ErrorMessage name="caSi"></ErrorMessage>
                    </p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <label className="labels">Nhạc sĩ</label>
                    <Field type="text" className="form-control" name="nhacsi" />
                    <p style={{ color: "red" }}>
                      <ErrorMessage name="nhacsi"></ErrorMessage>
                    </p>
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Thời gian phát</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="thoiGian"
                    />
                    <p style={{ color: "red" }}>
                      <ErrorMessage name="thoiGian"></ErrorMessage>
                    </p>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="submit"
                  >
                    Add Customer
                  </button>
                </div>
                <Link to={"/"}>Back to home</Link>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default FormAdd;
