import React from "react";

const contacts = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 gx-5 mt-3 ms-5 me-5 p-3 ">
        <div className="col">
          <div className="card h-100 w-60 shadow bg-white rounded border border-white">
            <div className="card-body ">
              <h5 className="card-title">Phone</h5>
              <p className="card-text">+91 123456789</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 w-60 shadow bg-white rounded border border-white">
            <div className="card-body">
              <h5 className="card-title">Email</h5>
              <p className="card-text">username@example.com</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 w-60 shadow bg-white border border-white">
            <div className="card-body">
              <h5 className="card-title">Address</h5>
              <p className="card-text">Dhanbad, Jhrkhand</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-white shadow p-3 mb-5 bg-white w-50  mt-5 mx-auto col-10 col-md-8 col-lg-6">
        <div className="containner-fluid  m-3 p-3">
          <h3>Get in Touch</h3>
          <div className="row justify-content-center my-5">
            <div className="col-lg-10">
              <form>
                <input
                  type="name"
                  className="form-control mb-3"
                  id="name"
                  autoComplete="off"
                  placeholder="Your name"
                />

                <input
                  type="email"
                  className="form-control mb-3"
                  id="email"
                  autoComplete="off"
                  placeholder="Your email"
                />

                <input
                  type="number"
                  className="form-control mb-3"
                  id="phone"
                  autoComplete="off"
                  placeholder="Your Phone No."
                />

                <textarea
                  className="form-control mb-3"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  rows="10"
                  cols="30"
                ></textarea>

                <div class="text-center">
                  <button type="submit" class="btn btn-primary">
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

export default contacts;
