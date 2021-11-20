const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const userHandler = require("./routeHandlers/userHandler");
const taskHandler = require("./routeHandlers/taskHandler");
const SendResponse = require("./controller/SendResponse/SendResponse");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lwdhb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// Connect with databse
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

  // Routes
app.use("/user", userHandler);

// Routes
app.use("/task", taskHandler);

// Error handling
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send(SendResponse(false, "Internal server error"));
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App runing is 3000 port");
});
