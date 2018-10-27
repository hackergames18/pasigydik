"use strict";
const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // using our custom isEmpty(value) function, because validator.isEmpty only supports string validation (so, if it's an empty object etc., we'll convert it into an empty string for validator to work):
  // data.name = isEmpty(data.name) ? "" : data.name;
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;

  if (validator.isEmpty(data.email)) errors.email = "email is required";
  if (validator.isEmpty(data.password)) errors.password = "password is required";

  return { errors: errors, isValid: isEmpty(errors) };
};
