const { verifyToken } = require("../middlewares");
const controller = require("../ controllers/movie.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //create
  app.post("/api/movies/new", [verifyToken.verify], controller.newmovie);

  //update
  app.put("/api/movies/edit/:id", [verifyToken.verify], controller.editmovie);

  //delete
  app.delete(
    "/api/movies/delete/:id",
    [verifyToken.verify],
    controller.deletemovie
  );

  //get
  app.get("/api/movies/find/:id", [verifyToken.verify], controller.getmovie);

  //getrandom
  app.get(
    "/api/movies/random",
    [verifyToken.verify],
    controller.getrandommovie
  );

  //getall
  app.get("/api/movies", [verifyToken.verify], controller.getallmovie);
};
