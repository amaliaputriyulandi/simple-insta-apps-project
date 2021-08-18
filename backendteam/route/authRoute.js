const Router = require("express").Router();
const validate = require("../middleware/validateRequest");
const { userAuthorization } = require("../middleware/tokenAuth");
const authController = require("../controller/authController");

Router.post("/signup", validate.signUp, authController.signup);

Router.post("/login", validate.login, authController.login);

Router.get("/logout", userAuthorization, authController.logout);

module.exports = Router;
