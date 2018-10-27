"use strict";
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

// Routes
const userAuth = require("./api/userAuth");
const user = require("./api/user");

// Port
const port = process.env.SERVER_PORT || 5000;

// Passport Config:
// require("./config/passport.js")(passport);

// Passport middleware:
// app.use(passport.initialize());

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const db = process.env.MONGODB_URI;
const db = "mongodb://server:server123@ds143293.mlab.com:43293/daktaras";

// Connect to mongoDB through mongoose:
// `autoIndex` option: https://mongoosejs.com/docs/guide.html#indexes
mongoose
  .connect(
    db,
    {
      useNewUrlParser: true,
      autoIndex: process.env.NODE_ENV === "production" ? false : true,
    }
  )
  .then(() => console.log("~Connected to mongoDB"))
  .catch((err) => console.log("~Error occured while connecting to mongoDB: ", err));

/** Use static directory (./public) folder for serving public files
 * (more info /public/README) */
// app.use(express.static(path.join(__dirname, "public")));

/** Routing - accessable by homepage:server_port/api/<theRoute> */
// app.use("/api/userAuth", userAuth);
app.use("/api/userAuth", userAuth);
app.use("/api/user", user);

app.listen(port, () => console.log(`~Server started on port ${port}`));
