function Base() {
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
                      //   onChange={""}
                    />
                  </div>
                </div>
                <div
                  className="col-sm-1"
                  style={{ marginTop: "10px", marginLeft: "-20px" }}
                  //   onClick={""}
                >
                  <i className="material-icons"></i>
                </div>
                <div className="col-sm-3">
                  <button
                    className="btn"
                    style={{ background: "#ffffff" }}
                    // onClick={""}
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
                <tr>
                  <td>q</td>
                  <td>q</td>
                  <td>q</td>
                  <td>q</td>
                  <td>q</td>
                  <td>
                    <span to={"/add-customer"} className="edit" onClick={""}>
                      <i
                        style={{ color: "#da854d" }}
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        
                      </i>
                    </span>
                    <span className="delete" onClick={""}>
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

export default Base;
