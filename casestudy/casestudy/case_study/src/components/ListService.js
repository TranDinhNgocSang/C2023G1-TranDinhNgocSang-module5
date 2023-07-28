import {
  showListService,
  deleteService,
} from "../service/service/serviceService";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";


function ListService() {
  const [services, setServices] = useState([]);
  const [flag, steFlag] = useState(false);
  const navigate = useNavigate();

  const getList = async () => {
    const data = await showListService();
    setServices(data);
  };

  useEffect(() => {
    getList();
  }, [flag]);

  const handelButtonAddService = () => {
    navigate("/add-villa");
  };

  const handelButtonDelete = async (id) => {
    Swal.fire({
      title: "Are you sure you want to delete?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
    }). then((result) => {
      if (result.isConfirmed) {
        deleteService(id).then(()=>{
          steFlag(!flag);
        });
        Swal.fire("successfully deleted","", "success");
      }
    });
  };

  const handelButtonEdit = (id,typeId) =>{
    if (typeId == 1) {
      navigate("/edit-villa/" + id);
    } else if (typeId == 2) {
      navigate("/edit-house/" + id);
    } else if(typeId==3){
      navigate("/edit-house/" + id);
    }else{}
  }

  return (
    <main>
      <div className="slider-area ">
        <div className="slider-active">
          <div
            className="single-slider hero-overly  slider-height d-flex align-items-center"
            style={{ backgroundImage: "url(assets/img/hero/h1_hero.jpg" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-10 col-lg-10 col-md-10">
                  <div className="hero__caption">
                    <h1>Dream it. Wish it. Do it.</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="favourite-place place-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle text-center">
                <h2>Service list</h2>
              </div>
              <h3>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handelButtonAddService}
                >
                  Add new service
                </button>
              </h3>
              <br></br>
            </div>
          </div>
          <div className="row">
            {services.map((sv) => {
              return (
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-place mb-30">
                    <div className="place-img">
                      <img height="300px" src={sv.image} alt="" />
                    </div>
                    <div className="place-cap">
                      <div className="place-cap-top">
                        <h3>{sv.nameService}</h3>
                        <p className="dolor">
                          ${sv.price} <span>/ max people: {sv.maxPeople}</span>
                        </p>
                        <p>{sv.typeService.nameTypeService}</p>
                      </div>
                      <div className="place-cap-bottom">
                        <button type="button" className="btn btn-primary">
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => handelButtonDelete(sv.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pagination-area pb-100 text-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="single-wrap d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-start">
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            <span className="flaticon-arrow roted left-arrow" />
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="/#">
                            01
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            02
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            03
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            <span className="flaticon-arrow right-arrow" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="video-area video-bg pt-200 pb-200"
        style={{ backgroundImage: "url(assets/img/service/video-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="video-caption text-center">
                <p className="pera1">
                  Love where you're going in the perfect time
                </p>
                <p className="pera2">Tripo is a World Leading Online</p>
                <p className="pera3"> Tour Booking Platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default ListService;
