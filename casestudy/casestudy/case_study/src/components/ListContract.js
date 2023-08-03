import { useEffect, useState } from "react";
import { getListContract } from "../service/contract/contract";
import { Link } from "react-router-dom";

function ListContract() {
  const [contracts, setcontracts] = useState([]);

  const showListContract = async () => {
    const data = await getListContract();
    setcontracts(data);
  };

  useEffect(() => {
    showListContract();
  }, []);

  return (
    <div className="body">
      <div className="container">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-5">
                  <h2>
                    Manage <b>Contract</b>
                  </h2>
                </div>
                <div className="col-sm-3">
                  <div className="search-box">
                    <input     
                      type="text"
                      className="form-control"
                      placeholder="Search…"
                    />
                  </div>
                </div>
                <div
                  className="col-sm-1"
                  style={{ marginTop: "10px", marginLeft: "-20px" }}
                >
                  <i className="material-icons"></i>
                </div>
                <div className="col-sm-3">
                  <Link to={"/add-contract"}
                    href="#addEmployeeModal"
                    className="btn"
                    style={{ background: "#ffffff" }}
                  >
                    <i style={{ color: "black" }} className="material-icons">
                      
                    </i>{" "}
                    <Link to={"/add-contract"} style={{ color: "black" }}>Add New Employee</Link>
                  </Link>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead style={{ textAlign: "center" }}>
                <tr>
                  <th>Contract number</th>
                  <th>Start day</th>
                  <th>End date</th>
                  <th>Deposits($)</th>
                  <th style={{ width: "15%" }}>Total payment($)</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {contracts.map((c, index)=>{
                  return (
                    <tr key={index}>
                      <td>{c.contract_id}</td>
                      <td>{c.check_in}</td>
                      <td>{c.check_out}</td>
                      <td>{c.deposit}</td>
                      <td>{c.total}</td>
                    </tr>
                  )
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

export default ListContract;
