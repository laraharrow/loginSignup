const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // convert empty fields in empty strings, validator function only accepts strings
  data.name = isEmpty(data.name) ? "" : data.name;
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;

  // validating name
  if (Validator.isEmpty(data.name)) {
    error.name = "Name field is required";
  }

  // validating email
  if(Validator.isEmpty(data.email)) {
    error.email = "Email is required";
  } else if (!Validator.isEmail(data.email)) {
    error.email = "Invalid email format";
  }

  // validating password
  if (Validator.isEmpty(data.password)) {
    error.password = "Password field is required";
  }

  // confirm password length
  if (!Validator.isLength(data.password, {min: 6, max: 30})) {
    error.password = "Password length must be between 6 - 30"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
