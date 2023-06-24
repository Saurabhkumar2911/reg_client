import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    // e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    // const data = res.json();
    if (res.status === 400 || !res) {
      window.alert("Invalid Details");
    } else {
      window.alert("Login Successfully");
      navigate("/");
    }
  };

  return (
    <div>
      <div className=" border border-white shadow bg-white mt-5 mb-5 w-50 p-3 mx-auto">
        <div className="text-center pt-5">
          <h3>Signin</h3>
        </div>

        <div className="containner-fluid ">
          <div className="row justify-content-center my-5">
            <div className="col-lg-8">
              <div>
                <label className="form-label">Email address:</label>

                <input
                  type="email"
                  className="form-control mb-3"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />

                <label className="form-label">Enter password:</label>
                <input
                  type="password"
                  className="form-control mb-5"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={loginUser}
                  >
                    Login
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

export default Signin;
