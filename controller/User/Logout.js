const SendResponse = require("../SendResponse/SendResponse");

const Logout = async (req, res) => {
  try {
    res.clearCookie('jwt');
    res.status(200).send(SendResponse(true, "Cookie clear success"));
  } catch (err) {
    res.status(500).send(SendResponse(false, "Cookie clear not success"));
  }
};

module.exports = Logout;