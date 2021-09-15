const { verifyToken } = require("../middlewares");
const controller = require("../ controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //update
  app.put("/api/users/edit/:id", [verifyToken.verify], controller.edituser);

  //delete
  app.delete(
    "/api/users/delete/:id",
    [verifyToken.verify],
    controller.deleteuser
  );

  //get
  app.get("/api/users/find/:id", controller.getuser);

  //getall
  app.get("/api/users", [verifyToken.verify], controller.getalluser);

  //stats
  app.get("/api/users/stats", controller.getstats);
};
