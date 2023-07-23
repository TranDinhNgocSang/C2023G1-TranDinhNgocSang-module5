function FormContract(){
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
                <h2 className="text-right">Add Contract</h2>
              </div>
              <div className="row mt-2">
                <div className="col-md-12"><label className="labels">Contract number</label><input type="text" className="form-control" /></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6 pb-2"><label className="labels">Start day</label><input type="date" className="form-control" /></div>
                <div className="col-md-6 pb-2"><label className="labels">End day</label><input type="date" className="form-control" /></div>
                <div className="col-md-6 pb-2"><label className="labels">Deposits($)</label><input type="number" className="form-control" /></div>
                <div className="col-md-6 pb-2"><label className="labels">Total payment($)</label><input type="number" className="form-control" /></div>
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

export default FormContract;