const express = require("express");
const coursesController = require("../controllers/courses");
const coursesRouter = express.Router();

coursesRouter.route("/").get(coursesController.addCourse);

module.exports = coursesRouter;