const express = require("express");
const registerValidator = require("../validators/register");
const { isValidObjectId } = require("mongoose");
const usersModel = require("../models/users");
const usersRouter = express.Router();
const usersController = require("../controllers/users");

usersRouter
  .route("/")
  .get(usersController.getAll)
  .post(usersController.register);

usersRouter.route("/:id").get(usersController.getOne).delete(usersController.remove);

module.exports = usersRouter;
