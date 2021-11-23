const SendResponse = require("../SendResponse/SendResponse");

const Logout = async (req, res) => {
  try {
    res.clearCookie("jwt", {
      path: "/",
      domain: "user-taskapi.herokuapp.com",
      sameSite: "none",
      secure: true,
      httpOnly: true,
    });
    res.status(200).send(SendResponse(true, "Cookie clear success"));
  } catch (err) {
    res.status(500).send(SendResponse(false, "Cookie clear not success"));
  }
};

module.exports = Logout;
