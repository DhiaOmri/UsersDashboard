const usersModels = require("../models/users.models");
const UserModel = require("../models/users.models");
const ValidateRegister = require("../validations/Register");
const ValidateLogin = require("../validations/Login");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Register = async (req, res) => {
  // await res.send("ok");
  const { errors, isValide } = ValidateRegister(req.body);
  try {
    if (!isValide) {
      res.status(404).json(errors);
    } else {
      UserModel.findOne({ email: req.body.email }).then(async (exist) => {
        if (exist) {
          errors.email = "user exist";
          res.status(404).json(errors);
        } else {
          const hash = bcrypt.hashSync(req.body.password, 10); //hashed password
          req.body.password = hash;
          req.body.role = "USER";
          await UserModel.create(req.body);
          res.status(200).json({ message: "success" });
        }
      });
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};
const Login = async (req, res) => {
  const { errors, isValide } = ValidateLogin(req.body);

  try {
    if (!isValide) {
      res.status(404).json(errors);
    } else {
      usersModels.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
          errors.email = "note found user";
          res.status(404).json(errors);
        } else {
          // res.send("ok");
          bcrypt.compare(req.body.password, user.password).then((isMatch) => {
            if (!isMatch) {
              errors.password = "incorrect password ! ";
              res.status(404).json(errors);
            } else {
              var token = jwt.sign(
                {
                  id: user._id,
                  name: user.name,
                  email: user.email,
                  role: user.role,
                },
                process.env.PRIVATE_KEY,
                { expiresIn: "1h" }
              );
              res
                .status(200)
                .json({ message: "seccess", token: "Bearer " + token });
            }
          });
        }
      });
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};
const Test = async (req, res) => {
  // res.send("je suis la page test");
  console.log(req);
};
const Admin = async (req, res) => {
  // res.send("je suis la page test");
  console.log(req);
};
module.exports = {
  Register,
  Login,
  Test,
  Admin,
};
