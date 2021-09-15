const { verifyToken } = require("../middlewares");
const controller = require("../ controllers/list.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //create
  app.post("/api/lists/new", [verifyToken.verify], controller.newlist);

  //delete
  app.delete(
    "/api/lists/delete/:id",
    [verifyToken.verify],
    controller.deletelist
  );

  //getall
  app.get("/api/lists", [verifyToken.verify], controller.getalllist);
};
