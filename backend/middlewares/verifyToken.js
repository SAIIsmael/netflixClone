const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

verify = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, config.secret, (err, user) => {
      if (err) res.status(403).json("Token is not valid");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authentificated");
  }
};

const verifyToken = {
  verify,
};

module.exports = verifyToken;
