import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="text-center">
        <h1>Error</h1>
        <h2>We are sorry, page not found!</h2>
        <p className="mb-5">
          The page you are looking for might have een removed had its name
          changed or is temporirly unavailable.
        </p>
        <NavLink to="/">Back to Homepage</NavLink>
      </div>
    </div>
  );
};

export default Error;
