import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const PostData = async () => {
    // e.preventDefault();
    // console.log("hellooooo");
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (data.status === 422 || !data) {
      console.log("hello");
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration successfull");
      console.log("Registration sucessfull");

      navigate("/signin");
    }
  };

  // const handleSubmit = (e) => {
  // e.preventDefault();
  // const { name, email, phone, work, password, cpassword } = user;

  // Axios.post("http://localhost:5000/register", user).then((res) => {
  //   console.log(res);
  // });

  //   Axios.post("http://127.0.0.1:5000/register", {
  //     name: user.name,
  //     email: user.email,
  //     phone: user.phone,
  //     work: user.work,
  //     password: user.password,
  //     cpassword: user.cpassword,
  //   }).then((res) => {
  // console.log(user);
  //   });
  // };

  return (
    <div>
      <div className="border border-white shadow mb-3 bg-white w-50 mt-3  mx-auto">
        <div className="containner-fluid">
          <div className="text-center mt-3">
            <h3>Registration</h3>
          </div>
          <div className="row justify-content-center my-5">
            <div className="col-lg-8">
              <div>
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  value={user.name}
                  name="name"
                  onChange={handleChange}
                  autoComplete="off"
                />

                <label className="form-label">Email address:</label>
                <input
                  type="email"
                  className="form-control mb-3"
                  value={user.email}
                  name="email"
                  onChange={handleChange}
                  autoComplete="off"
                />

                <label className="form-label">Phone Number:</label>
                <input
                  type="number"
                  className="form-control mb-3"
                  value={user.phone}
                  name="phone"
                  onChange={handleChange}
                  autoComplete="off"
                />

                <label className="form-label">Your Profession:</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="e.g. Web Developer, Data Anaylst, etc."
                  value={user.work}
                  name="work"
                  onChange={handleChange}
                  autoComplete="off"
                />

                <label className="form-label">Enter password:</label>
                <input
                  type="password"
                  className="form-control mb-3"
                  value={user.password}
                  name="password"
                  onChange={handleChange}
                  autoComplete="off"
                />

                <label className="form-label">Confirm your password:</label>
                <input
                  type="password"
                  className="form-control mb-5"
                  value={user.cpassword}
                  name="cpassword"
                  onChange={handleChange}
                  autoComplete="off"
                />

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={PostData}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
