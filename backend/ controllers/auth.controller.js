const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    profilePic: req.body.profilePic,
  });

  user
    .save(user)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while creating a new user",
      });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    var accessToken = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      config.secret,
      {
        expiresIn: 86400, // 24 hours
      }
    );

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      profilePic: user.profilePic,
      accessToken: accessToken,
    });
  });
};
