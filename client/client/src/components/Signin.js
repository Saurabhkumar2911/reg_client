import React from "react";

const Signin = () => {
  return (
    <div>
      <div className=" border border-white shadow bg-white mt-5 mb-5 w-50 p-3 mx-auto">
        <div className="text-center pt-5">
          <h3>Signin</h3>
        </div>

        <div className="containner-fluid ">
          <div className="row justify-content-center my-5">
            <div className="col-lg-8">
              <form>
                <label className="form-label">Email address:</label>

                <input
                  type="email"
                  className="form-control mb-3"
                  id="email"
                  autoComplete="off"
                />

                <label className="form-label">Enter password:</label>
                <input
                  type="password"
                  className="form-control mb-5"
                  id="password"
                  autoComplete="off"
                />

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
