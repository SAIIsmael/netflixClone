const db = require("../models");
const config = require("../config/auth.config");
const List = db.list;
const jwt = require("jsonwebtoken");

exports.newlist = (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    newList
      .save(newList)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error while adding a list",
        });
      });
  } else {
    res.status(403).send("You're not allowed");
  }
};

exports.deletelist = (req, res) => {
  if (req.user.isAdmin) {
    List.findByIdAndDelete(req.params.id)
      .then((data) => {
        res.status(200).send("List has been deleted");
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error while deleting a list",
        });
      });
  } else {
    res.status(403).send("You're not allowed.");
  }
};

exports.getalllist = (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;

  (typeQuery
    ? genreQuery
      ? List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ])
      : List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ])
    : List.aggregate([{ $sample: { size: 10 } }])
  )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while deleting a list",
      });
    });
};
