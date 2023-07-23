function ListCustomer(){
return(
  <div className="body">
<div className="container">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-5">
                  <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-3">
                  <div className="search-box">
                    <input width type="text" className="form-control" placeholder="Search…" />
                  </div>
                </div>
                <div className="col-sm-1" style={{marginTop: '10px', marginLeft: '-20px'}}><i className="material-icons"></i></div>
                <div className="col-sm-3">
                  <a href="#addEmployeeModal" className="btn" style={{background: '#ffffff'}}><i style={{color: 'black'}} className="material-icons"></i> <span style={{color: 'black'}}>Add New Employee</span></a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead style={{textAlign: 'center'}}>
                <tr>
                  <th style={{width: '200px'}}>Name</th>
                  <th>Email</th>
                  <th>position</th>
                  <th>Customer Type</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody style={{textAlign: 'center'}}>
                <tr>
                  <td>Thomas Hardy</td>
                  <td>thomashardy@mail.com</td>
                  <td>89 Chiaroscuro Rd, Portland, USA</td>
                  <td>Gold</td>
                  <td>(171) 555-2222</td>
                  <td>
                    <a href="#editEmployeeModal" className="edit"><i style={{color: '#da854d'}} className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                    <a href="#deleteEmployeeModal" className="delete"><i className="material-icons" data-toggle="tooltip" style={{color: '#c51010'}} title="Delete"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>Dominique Perrier</td>
                  <td>dominiqueperrier@mail.com</td>
                  <td>Obere Str. 57, Berlin, Germany</td>
                  <td>Gold</td>
                  <td>(313) 555-5735</td>
                  <td>
                    <a href="#editEmployeeModal" className="edit"><i style={{color: '#da854d'}} className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                    <a href="#deleteEmployeeModal" className="delete"><i className="material-icons" data-toggle="tooltip" style={{color: '#c51010'}} title="Delete"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>Maria Anders</td>
                  <td>mariaanders@mail.com</td>
                  <td>25, rue Lauriston, Paris, France</td>
                  <td>Gold</td>
                  <td>(503) 555-9931</td>
                  <td>
                    <a href="#editEmployeeModal" className="edit"><i style={{color: '#da854d'}} className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                    <a href="#deleteEmployeeModal" className="delete"><i className="material-icons" data-toggle="tooltip" style={{color: '#c51010'}} title="Delete"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>Fran Wilson</td>
                  <td>franwilson@mail.com</td>
                  <td>C/ Araquil, 67, Madrid, Spain</td>
                  <td>Gold</td>
                  <td>(204) 619-5731</td>
                  <td>
                    <a href="#editEmployeeModal" className="edit"><i style={{color: '#da854d'}} className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                    <a href="#deleteEmployeeModal" className="delete"><i className="material-icons" data-toggle="tooltip" style={{color: '#c51010'}} title="Delete"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>Martin Blank</td>
                  <td>martinblank@mail.com</td>
                  <td>Via Monte Bianco 34, Turin, Italy</td>
                  <td>Gold</td>
                  <td>(480) 631-2097</td>
                  <td>
                    <a href="#editEmployeeModal" className="edit"><i style={{color: '#da854d'}} className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                    <a href="#deleteEmployeeModal" className="delete"><i className="material-icons" data-toggle="tooltip" style={{color: '#c51010'}} title="Delete"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
              <ul className="pagination">
                <li className="page-item disabled"><a href="/#">Previous</a></li>
                <li className="page-item"><a href="/#" className="page-link">1</a></li>
                <li className="page-item"><a href="/#" className="page-link">2</a></li>
                <li className="page-item active"><a href="/#" className="page-link">3</a></li>
                <li className="page-item"><a href="/#" className="page-link">4</a></li>
                <li className="page-item"><a href="/#" className="page-link">5</a></li>
                <li className="page-item"><a href="/#" className="page-link">Next</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
)
}
export default ListCustomer;