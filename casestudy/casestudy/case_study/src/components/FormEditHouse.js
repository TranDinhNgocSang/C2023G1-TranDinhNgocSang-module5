import { Formik, Form, Field, ErrorMessage } from "formik";
import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useEffect, useState } from "react";
import {
  showListTypeRental,
  getTypeRentalById,
} from "../service/service/typeRental";
import {
  addService,
  editService,
  getServiceById,
} from "../service/service/serviceService";
import Swal from "sweetalert2";

function FormEditHouse() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [typeRental, setTypeRental] = useState([]);
  const [service, setService] = useState();

  const handelButtonAddVilla = () => {
    navigate("/add-villa");
  };

  const handelButtonAddRoom = () => {
    navigate("/add-room");
  };

  const getListTypeRental = async () => {
    const data = await showListTypeRental();
    setTypeRental(data);
  };

  const getService = async () => {
    const service = await getServiceById(id);
    setService(service);
  };

  useEffect(() => {
    getListTypeRental();
    getService();
  }, []);

  if (!service) {
    return null;
  }

  return (
    <div className="body">
      <div className="container rounded bg-white mt-5 mb-5">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={handelButtonAddVilla}
          >
            Villa
          </button>
          <button type="button" class="btn btn-warning">
            House
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={handelButtonAddRoom}
          >
            Room
          </button>
        </div>
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/4/4c/Han_River_Bridge_in_Vietnam_Night_View.jpg"
                }
                alt=""
                width="100%"
              />
            </div>
          </div>
          <div className="col-md-8 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="text-right">Service: House</h2>
              </div>
              <Formik
                initialValues={{
                  id: service.id,
                  price: service.price,
                  typeService: service.typeService,
                  nameService: service.nameService,
                  maxPeople: service.maxPeople,
                  area: service.area,
                  typeRental: service.typeRental.id,
                  Standard: service.Standard,
                  describe: service.describe,
                  poolArea: service.poolArea,
                  numberFloors: service.numberFloors,
                  accompaniedService: service.accompaniedService,
                  image: service.image,
                }}
                validationSchema={yup.object({
                  price: yup.number().required("price can't be empty"),
                  //   typeService: yup.number(). ("type service can't be empty"),
                  nameService: yup
                    .string()
                    .required("name Service can't be empty"),
                  maxPeople: yup.number().required("max people can't be empty"),
                  area: yup.number().required("area can't be empty"),
                  typeRental: yup
                    .number()
                    .required("type rental can't be empty"),
                  Standard: yup.string().required("standard can't be empty"),
                  describe: yup.string().required("describe can't be empty"),
                  // poolArea: yup.number().required("pool area can't be empty"),
                  numberFloors: yup
                    .number()
                    .required("pool area can't be empty"),
                  //   accompaniedService: "",
                  image: yup.string().required("describe can't be empty"),
                  Standard: yup.string(),
                })}
                onSubmit={async (service) => {
                  console.log(service.typeRental);
                  const typeRentalById = await getTypeRentalById(service.typeRental);
                  const newService = {
                    ...service,
                    typeService: {
                      id: 2,
                      nameTypeService: "House",
                    },
                    typeRental: typeRentalById,
                  };
                  editService(newService).then(() => {
                    console.log(newService);
                    navigate("/");
                    Swal.fire({
                      title: "successfully",
                      text: "",
                      icon: "success",
                      button: "Ok",
                    });
                  });
                }}
              >
                <Form>
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <label className="labels">Name Service</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="nameService"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="nameService" />
                      </p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6 pb-2">
                      <label className="labels">Maximum number of people</label>
                      <Field
                        type="number"
                        className="form-control"
                        name="maxPeople"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="maxPeople" />
                      </p>
                    </div>
                    <div className="col-md-6 pb-2">
                      <label className="labels">Area (m2)</label>
                      <Field
                        type="number"
                        className="form-control"
                        placeholder="m2"
                        name="area"
                      />
                    </div>
                    <p style={{ color: "red" }}>
                      <ErrorMessage name="area" />
                    </p>
                    <div className="col-md-6 pb-2">
                      <label className="labels">Price</label>
                      <Field
                        type="number"
                        className="form-control"
                        name="price"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="price" />
                      </p>
                    </div>
                    <div className="col-md-6 pb-2">
                      <label className="labels">Standard</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="Standard"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="Standard" />
                      </p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="labels">Number of floors</label>
                      <Field
                        type="number"
                        className="form-control"
                        name="numberFloors"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="numberFloors" />
                      </p>
                    </div>
                    <div className="col-md-3">
                      <label className="labels">rental type</label>
                      <Field as="select"
                        className="form-select"
                        aria-label="Default select example"
                        name="typeRental"
                      >
                        <option value={""}>select</option>
                        {typeRental.map((t) => {
                          return (
                            <option key={t.id} value={t.id}>
                              {t.nameTypeRental}
                            </option>
                          );
                        })}
                      </Field>
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="typeRental" />
                      </p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="labels">image</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="image"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="image" />
                      </p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">describe</label>
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="describe"
                        name="describe"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="describe" />
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

export default FormEditHouse;
