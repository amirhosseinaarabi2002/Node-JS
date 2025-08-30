const express = require("express");
const teacherController = require("../controllers/teacher");
const teacherRouter = express.Router();

teacherRouter.route("/").get(teacherController.register);

module.exports = teacherRouter;
