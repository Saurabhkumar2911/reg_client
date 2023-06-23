const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");

const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

dotenv.config({ path: "./config.env" });
require("./DB/conn");

// const User = require("./model/userSchema");

app.use(require("./route/auth"));

const PORT = process.env.PORT;

// middleware;
const middleware = (req, res, next) => {
  console.log(`middleware working`);
  next();
};

// app.get("/", async (req, res) => {
//   res.send(`welcome to server backend `);
// });

app.get("/about", middleware, (req, res) => {
  res.send(`welcome to about`);
});

app.get("/contact", (req, res) => {
  // res.cookie("test", "saurabh");
  res.send(`welcome to contact`);
});

app.get("/signin", (req, res) => {
  res.send(`welcome to Login`);
});

app.get("/signup", (req, res) => {
  res.send(`welcome to signup`);
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
