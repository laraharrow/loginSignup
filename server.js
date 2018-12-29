const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// bodyParser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// connect to MongoDB
mongoose
  .connect(
    db, { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch( err => console.log(err));

const port = process.env.PORT || 5000;
// process.env.PORT is the setup for future deployment with Heroku

app.listen(port, () => console.log(`Server is running on port ${port}`));
