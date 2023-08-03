function FormCustomer(){
    return(
        <div className="body">
<div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img src="https://i.pinimg.com/736x/00/38/64/003864b2fe7d991ba831bd24436a742e.jpg" alt="" width="100%" /></div>
          </div>
          <div className="col-md-8 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="text-right">Customer</h2>
              </div>
              <div className="row mt-2">
                <div className="col-md-12"><label className="labels">Full name</label><input type="text" className="form-control" /></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6 pb-2"><label className="labels">Day of birth</label><input type="text" className="form-control" /></div>
                <div className="col-md-6 pb-2">
                  <p className="labels mb-1">Gender</p>
                  <input type="radio" name="gender" defaultValue="male" id="male" /> <label style={{marginRight: '10%'}} htmlFor="male">male</label>
                  <input type="radio" name="gender" defaultValue="female" id="female" /> <label htmlFor="female">female</label>
                </div>
                <div className="col-md-6 pb-2"><label className="labels">Id card</label><input type="text" className="form-control" /></div>
                <div className="col-md-6 pb-2"><label className="labels">Phone</label><input type="text" className="form-control" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><label className="labels">Email</label><input type="text" className="form-control" /></div>
                <div className="col-md-3"><label className="labels">Type customer</label>
                  <select className="form-select" aria-label="Default select example">
                    <option value={1}>Diamond</option>
                    <option value={2}>Platinium</option>
                    <option value={3}>Gold</option>
                    <option value={4}>Silver</option>
                    <option value={5}>Member</option>
                  </select>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" /></div>
              </div>
              <div className="mt-5 text-center"><button className="btn btn-primary" type="button">Submit</button></div>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1" />
            <h6>Back to home</h6>
          </div>
        </div>
      </div>
        </div>
    )
}

export default FormCustomer;