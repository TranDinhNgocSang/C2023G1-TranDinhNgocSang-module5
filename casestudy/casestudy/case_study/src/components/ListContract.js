function ListContract(){
    return(
        <div className="body">
<div className="container">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-5">
                  <h2>Manage <b>Contract</b></h2>
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
                  <th>Contract number</th>
                  <th>Start day</th>
                  <th>End date</th>
                  <th>Customer</th>
                  <th>Deposits($)</th>
                  <th style={{width : "15%"}}>Total payment($)</th>
                </tr>
              </thead>
              <tbody style={{textAlign: 'center'}}>
                <tr>
                  <td>1</td>
                  <td>02/02/2023</td>
                  <td>04/04/2023</td>
                  <td>Thomas Edison</td>
                  <td>500</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>02/02/2023</td>
                  <td>04/04/2023</td>
                  <td>Thomas Edison</td>
                  <td>500</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>02/02/2023</td>
                  <td>04/04/2023</td>
                  <td>Thomas Edison</td>
                  <td>500</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>02/02/2023</td>
                  <td>04/04/2023</td>
                  <td>Thomas Edison</td>
                  <td>500</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>02/02/2023</td>
                  <td>04/04/2023</td>
                  <td>Thomas Edison</td>
                  <td>500</td>
                  <td>2000</td>
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

export default ListContract;