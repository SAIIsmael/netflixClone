const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.edituser = (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 8);
    }
    const updatedUser = User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error while editing a user",
        });
      });
  } else {
    res.status(403).send("You're not allowed to edit this user");
  }
};

exports.deleteuser = (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    User.findByIdAndDelete(req.params.id)
      .then((data) => {
        res.status(200).send("User has been deleted");
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error while deleting a user",
        });
      });
  } else {
    res.status(403).send("You're not allowed to edit this user");
  }
};

exports.getuser = (req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      const { password, ...info } = data._doc;
      res.status(200).send(info);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while getting a user",
      });
    });
};

exports.getalluser = (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    (query ? User.find().sort({ _id: -1 }).limit(10) : User.find())
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error while getting all users",
        });
      });
  } else {
    res.status(403).send("You're not allowed to see all users");
  }
};

exports.getstats = (req, res) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() - 1);
  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  User.aggregate([
    {
      $project: {
        month: { $month: "$createdAt" },
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: 1 },
      },
    },
  ])
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while getting stats",
      });
    });
};
