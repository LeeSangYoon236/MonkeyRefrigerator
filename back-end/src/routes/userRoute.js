//userRoute.js

module.exports = function (app) {
  const user = require("../controller/UserController");
  const jwtMiddleware = require("../config/jwt");

  app.route("/login").post(user.findUser);
  app.route("/idChk").post(user.idDoubleChk);
  //app.route("/user").get(user.);
};
