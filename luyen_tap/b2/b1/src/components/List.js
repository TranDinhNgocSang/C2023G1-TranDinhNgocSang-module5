import {
  getListCustomer,
  searchCustomerByName,
  deleteCustomerById
} from "../service/customerService";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function List() {
  const [customers, setCustomer] = useState([]);
  const navigate = useNavigate();
  const limit = 2;
  const totalPage = Math.ceil(customers.length/limit)
  const [page, setPage] = useState(1);
  const [flag,setFlag] = useState(false)
  

  const [search, setSearch] = useState("");

  const showList = async () => {
    const data = await getListCustomer();
    console.log(data);
    setCustomer(data);
  };

  useEffect(() => {
    showList();
  }, [flag]);

  const handleOnChange = (even) => {
    setSearch(even.target.value);
  };

  const handleSearch = async () => {
    const data = await searchCustomerByName(search);
    setCustomer(data);
  };

  const handleDelete = async (id)=>{
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
         deleteCustomerById(id)
          setFlag(!flag);
        Swal.fire("successfully deleted","", "success");
      }
    });


  }

  const handleClickIncrease = () =>{
    if(page< totalPage){
setPage(page+1);
    }
  }
  const handleClickReduce = () =>{
    if(page>1){
      setPage(page-1);
          }
      }

      const updatePage = () =>{
        const begin = (page-1)*limit;
        const end = page*limit;
        return customers.slice(begin,end)
      }

      const list = updatePage();

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
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                <div
                  className="col-sm-1"
                  style={{ marginTop: "10px", marginLeft: "-20px" }}
                    onClick={handleSearch}
                >
                  <i className="material-icons"></i>
                </div>
                <div className="col-sm-3">
                  <button
                    className="btn"
                    style={{ background: "#ffffff" }}
                    onClick={() => {
                      navigate("/add-customer");
                    }}
                  >
                    <i style={{ color: "black" }} className="material-icons">
                      
                    </i>{" "}
                    <Link to={"/add-customer"} style={{ color: "black" }}>
                      Add New Employee
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead style={{ textAlign: "center" }}>
                <tr>
                  <th style={{ width: "200px" }}>Name</th>
                  <th>day of birth</th>
                  <th>gender</th>
                  <th>Customer Type</th>
                  <th style={{ width: "200px" }}>action</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {list.map((c) => {
                  return (
                    <tr key={c.id}>
                      <td>{c.name}</td>
                      <td>{c.dayOfBirth}</td>
                      <td>{c.gender}</td>
                      <td>{c.typeCustomer.nameType}</td>
                      <td>
                        <Link to={"/edit-customer/" + c.id} className="edit">
                          <i
                            style={{ color: "#da854d" }}
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Edit"
                          >
                            . 
                          </i>
                        </Link>
                        <span className="delete" onClick={()=>handleDelete(c.id)}>
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
                <li className="page-item disabled" onClick={handleClickReduce}>
                  <a href="/#">Previous</a>
                </li>
                <li className="page-item" onClick={handleClickIncrease}>
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

export default List;
