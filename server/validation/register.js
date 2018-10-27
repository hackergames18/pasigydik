"use strict";
const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // using our custom isEmpty(value) function, because validator.isEmpty only supports string validation (so, if it's an empty object etc., we'll convert it into an empty string for validator to work):
  // // data.username = isEmpty(data.username) ? "" : data.username;
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;
  // // data.password2 = isEmpty(data.password2) ? "" : data.password2;

  // // if (!validator.isLength(data.username, { min: 2, max: 32 }))
  // //   errors.username = "Username must contain at least 2 characters";

  // // if (validator.isEmpty(data.username)) errors.username = "Username is required";

  if (validator.isEmpty(data.email)) errors.email = "Email field is required";

  if (!validator.isEmail(data.email)) errors.email = "Email is invalid";

  if (validator.isEmpty(data.password)) errors.password = "Password field is required";

  if (!validator.isLength(data.password, { min: 6, max: 64 }))
    errors.password = "Password must be at least 6 characters";

  // // if (validator.isEmpty(data.password2)) errors.password2 = "Confirm password is required";

  // // if (!validator.equals(data.password, data.password2)) errors.password2 = "Passwords must match";

  return { errors: errors, isValid: isEmpty(errors) };
};
