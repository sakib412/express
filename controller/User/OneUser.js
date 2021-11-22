const mongoose = require("mongoose");
const userSchema = require("../../schemas/userSchema");
const Users = new mongoose.model("users", userSchema);
const SendResponse = require("../SendResponse/SendResponse");
const jwt = require("jsonwebtoken");

const OneUser = async (req, res) => {
  try {
    const tokenVerify = jwt.verify(req.cookies?.jwt, process.env.JWT_SECRET);
    // Find The user and get only email
    const findUser = await Users.findOne(
      { email: tokenVerify?.email },
      { password: 0 }
    );
    if (findUser) {
      res
        .status(200)
        .send(SendResponse(true, "User verify successful", findUser));
    } else {
      res.status(401).send(SendResponse(false, "Authentication failed"));
    }
  } catch (error) {
    res.status(401).send(SendResponse(false, "Authentication failed"));
  }
};

module.exports = OneUser;
