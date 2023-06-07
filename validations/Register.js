const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validatorRegister(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirm = !isEmpty(data.confirm) ? data.confirm : "";
  if (validator.isEmpty(data.name)) {
    errors.name = "required name";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "required email";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "required format email";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "required password";
  }
  if (!validator.equals(data.password, data.confirm)) {
    errors.confirm = "password not matches";
  }
  if (validator.isEmpty(data.confirm)) {
    errors.confirm = "required confirm";
  }

  return { errors, isValide: isEmpty(errors) };
};
