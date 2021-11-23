const SendResponse = require("../SendResponse/SendResponse");

const Logout = async (req, res) => {
  try {
    cookie = req.cookies;
    for (let prop in cookie) {
      if (!cookie.hasOwnProperty(prop)) {
        continue;
      }
      res.cookie(prop, "", {
          httpOnly: true,
          sameSite: "none",
          secure: true,
          expires: new Date(0),
      });
    }
    res.status(200).send(SendResponse(true, "Cookie clear success"));
  } catch (err) {
    res.status(500).send(SendResponse(false, "Cookie clear not success"));
  }
};

module.exports = Logout;
