import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import { showListCustomer,deleteCustomer, getCustomerByName } from "../service/customer/customer";

function ListCustomer() {
  const [customers, setCustomer] = useState([]);
  const [flag, steFlag] = useState(false);
  const [search,setSearch] = useState("");
  const navigate = useNavigate();

  const getList = async () => {
    const data = await showListCustomer();
    setCustomer(data);
  };

  useEffect(() => {
    getList();
  }, [flag]);

  const handelButtonAddCustomer = ()=>{
    navigate("/add-customer")
  }

  const handelButtonEditCustomer = (id)=>{
    navigate("/edit-customer/"+id)
  }

  const handelButtonSearch = async ()=>{
    const data = await getCustomerByName(search);
    setCustomer(data)
  }

  const handelButtonDelete= (id)=>{
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
        deleteCustomer(id)
          steFlag(!flag);
        Swal.fire("successfully deleted","", "success");
      }
    });
  }

  return (
    <div className="body">
      <div className="container">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-5">
                  <h2>
                    Manage <b>Employees</b>
                  </h2>
                </div>
                <div className="col-sm-3">
                  <div className="search-box">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search…"
                      onChange={(e)=>{
                        setSearch(e.target.value)
                      }}
                    />
                  </div>
                </div>
                <div
                  className="col-sm-1"
                  style={{ marginTop: "10px", marginLeft: "-20px" }}
                  onClick={handelButtonSearch}
                >
                  <i className="material-icons"></i>
                </div>
                <div className="col-sm-3">
                  <button
                    className="btn"
                    style={{ background: "#ffffff" }}
                    onClick={handelButtonAddCustomer}
                  >
                    <i style={{ color: "black" }} className="material-icons">
                      
                    </i>{" "}
                    <span style={{ color: "black" }}>Add New Employee</span>
                  </button>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead style={{ textAlign: "center" }}>
                <tr>
                  <th style={{ width: "200px" }}>Name</th>
                  <th>Email</th>
                  <th>position</th>
                  <th>Customer Type</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {customers.map((ct) => {
                  return (
                    <tr key={ct.id}>
                      <td>{ct.name}</td>
                      <td>{ct.email}</td>
                      <td>{ct.address}</td>
                      <td>{ct.customer_type.nameType}</td>
                      <td>{ct.phone_number}</td>
                      <td>
                        <span to={"/add-customer"}  className="edit" onClick={()=>handelButtonEditCustomer(ct.id)}>
                          <i
                            style={{ color: "#da854d" }}
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Edit"
                          >
                            
                          </i>
                        </span>
                        <span  className="delete" onClick={()=>handelButtonDelete(ct.id)}>
                          <i
                            className="material-icons"
                            data-toggle="tooltip"
                            style={{ color: "#c51010" }}
                            title="Delete"
                          >
                            
                          </i>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a href="/#">Previous</a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a href="/#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListCustomer;
