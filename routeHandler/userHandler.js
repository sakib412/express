const express = require("express");
const Login = require("../controller/User/Login");
const OneUser = require("../controller/User/OneUser");
const Register = require("../controller/User/Register");
const Update = require("../controller/User/Update");
const LoginGuard = require("../middleware/LoginGuard");
const router = express.Router();

// User Register
router.post("/register", Register);
// User Login
router.post("/login", Login);
// User Data Update
router.post("/update", LoginGuard, Update);

router.get("/check",OneUser);

router.get("/test", (req, res) => {
  res.send(`Token:${req?.cookies?.jwt}`);
});

module.exports = router;
