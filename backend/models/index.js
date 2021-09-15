const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.movie = require("./movie.model");
db.list = require("./list.model");

module.exports = db;
