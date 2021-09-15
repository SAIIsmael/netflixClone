const db = require("../models");
const config = require("../config/auth.config");
const Movie = db.movie;
const jwt = require("jsonwebtoken");

exports.newmovie = (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    newMovie
      .save(newMovie)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error while adding a movie",
        });
      });
  } else {
    res.status(403).send("You're not allowed");
  }
};

exports.editmovie = (req, res) => {
  if (req.user.isAdmin) {
    Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error while editing a movie",
        });
      });
  } else {
    res.status(403).send("You're not allowed.");
  }
};

exports.deletemovie = (req, res) => {
  if (req.user.isAdmin) {
    Movie.findByIdAndDelete(req.params.id)
      .then((data) => {
        res.status(200).send("movie has been deleted");
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error while deleting a movie",
        });
      });
  } else {
    res.status(403).send("You're not allowed.");
  }
};

exports.getmovie = (req, res) => {
  Movie.findById(req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while getting a movie",
      });
    });
};

exports.getrandommovie = (req, res) => {
  const type = req.query.type;
  (type === "series"
    ? Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ])
    : Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ])
  )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while getting a random movie",
      });
    });
};

exports.getallmovie = (req, res) => {
  if (req.user.isAdmin) {
    Movie.find()
      .then((data) => {
        res.status(200).send(data.reverse());
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error while getting all movies",
        });
      });
  } else {
    res.status(403).send("You're not allowed.");
  }
};
