import React, { useState } from "react";
// import Axios from "axios";
const Signup = () => {
  // const url = "";
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Axios.post("http://localhost:5000/register", {
    //   name: user.name,
    //   email: user.email,
    //   phone: user.phone,
    //   work: user.work,
    //   password: user.password,
    //   cpassword: user.cpassword,
    // }).then((res) => {
    console.log(user);
    // });
  };

  return (
    <div>
      <div className="border border-white shadow mb-3 bg-white w-50 mt-3  mx-auto">
        <div className="containner-fluid">
          <div className="text-center mt-3">
            <h3>Registration</h3>
          </div>
          <div className="row justify-content-center my-5">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit}>
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  value={user.name}
                  name="name"
                  onChange={handleChnage}
                  autoComplete="off"
                />

                <label className="form-label">Email address:</label>
                <input
                  type="email"
                  className="form-control mb-3"
                  value={user.email}
                  name="email"
                  onChange={handleChnage}
                  autoComplete="off"
                />

                <label className="form-label">Phone Number:</label>
                <input
                  type="number"
                  className="form-control mb-3"
                  value={user.phone}
                  name="phone"
                  onChange={handleChnage}
                  autoComplete="off"
                />

                <label className="form-label">Your Profession:</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="e.g. Web Developer, Data Anaylst, etc."
                  value={user.work}
                  name="work"
                  onChange={handleChnage}
                  autoComplete="off"
                />

                <label className="form-label">Enter password:</label>
                <input
                  type="password"
                  className="form-control mb-3"
                  value={user.password}
                  name="password"
                  onChange={handleChnage}
                  autoComplete="off"
                />

                <label className="form-label">Confirm your password:</label>
                <input
                  type="password"
                  className="form-control mb-5"
                  value={user.cpassword}
                  name="cpassword"
                  onChange={handleChnage}
                  autoComplete="off"
                />

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
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

export default Signup;
