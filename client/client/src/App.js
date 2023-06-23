import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
