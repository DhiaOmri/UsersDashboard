var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
var indexRouter = require("./routes/index");
const mongoose = require("mongoose");
const { error } = require("console");
const passport = require("passport");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Passport
app.use(passport.initialize());
require("./security/passport")(passport);
// connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected"))
  .catch((error) => console.log(error));

app.use("/api", indexRouter);

module.exports = app;
