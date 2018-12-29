const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {

  // convert empty fields in empty strings, validator function only accepts strings
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;

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
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
