const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://next-app-sandy-beta.vercel.app",
      "https://next-jst-est-pied.vercel.app",
    ],
    credentials: true,
    secure: true,
    sameSite: "None",
  })
);
app.use(cookieParser());

const userHandler = require("./routeHandler/userHandler");
const taskHandler = require("./routeHandler/taskHandler");
const SendResponse = require("./controller/SendResponse/SendResponse");

const port = process.env.PORT || 3001;
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

// Test
app.get("/", (req, res) => {
  res.send("Api is worikng");
});

// Error handling
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send(SendResponse(false, "Internal server error"));
  }
});

app.listen(port, () => console.log("Server runing is port", port));
