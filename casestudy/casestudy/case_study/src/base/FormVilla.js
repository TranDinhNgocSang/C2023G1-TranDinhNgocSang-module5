function FormVilla(){
    return(
        <div className="body">
<div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Han_River_Bridge_in_Vietnam_Night_View.jpg" alt="" width="100%" /></div>
          </div>
          <div className="col-md-8 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="text-right">Edit service (Villa)</h2>
              </div>
              <div className="row mt-2">
                <div className="col-md-12"><label className="labels">Name Service</label><input type="text" className="form-control" /></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6 pb-2"><label className="labels">Maximum number of people</label><input type="number" className="form-control" /></div>
                <div className="col-md-6 pb-2"><label className="labels">Area (m2)</label><input type="number" className="form-control" placeholder="m2" /></div>
                <div className="col-md-6 pb-2"><label className="labels">Price</label><input type="number" className="form-control" /></div>
                <div className="col-md-6 pb-2"><label className="labels">Standard</label><input type="text" className="form-control" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><label className="labels">Pool area</label><input type="number" className="form-control" /></div>
                <div className="col-md-6"><label className="labels">Number of floors</label><input type="number" className="form-control" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><label className="labels">image</label><input type="file" className="form-control" /></div>
                <div className="col-md-3"><label className="labels">rental type</label>
                  <select className="form-select" aria-label="Default select example">
                    <option value={1}>Year</option>
                    <option value={2}>Month</option>
                    <option value={3}>Day</option>
                    <option value={4}>Hour</option>
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">describe</label>
                  <textarea rows={5} className="form-control" placeholder="describe" defaultValue={""} />
                </div>
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
export default FormVilla;