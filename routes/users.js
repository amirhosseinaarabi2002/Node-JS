const express = require("express");
require("mongoose");
const usersRouter = express.Router();
const usersController = require("../controllers/users");

usersRouter
  .route("/")
  .get(usersController.getAll)
  .post(usersController.register);

usersRouter.route("/:id").get(usersController.getOne).delete(usersController.remove);

module.exports = usersRouter;
