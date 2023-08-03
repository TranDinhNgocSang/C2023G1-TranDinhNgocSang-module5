function BaseForm() {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-4 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              src="https://i.pinimg.com/564x/ff/f3/ed/fff3ed3cae0ad73a82e422a482a88749.jpg"
              alt=""
              width="100%"
            />
          </div>
        </div>
        <div className="col-md-4 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-right">Edit your profile</h6>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                  defaultValue="John"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Doe"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Headline</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="headline"
                  defaultValue="UI/UX Developer"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Current position</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="headline"
                  defaultValue="UI/UX Developer at Boston"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Education</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="education"
                  defaultValue="Boston University"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Country</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="country"
                  defaultValue="USA"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">State/Region</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Boston"
                  placeholder="state"
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              src="https://i.pinimg.com/564x/ff/f3/ed/fff3ed3cae0ad73a82e422a482a88749.jpg"
              alt=""
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseForm;
