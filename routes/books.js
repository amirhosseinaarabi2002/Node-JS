const express = require("express");
const booksController = require("../controllers/books");
const isAdminMiddleware = require("../middlewares/isAdmin");

const booksRouter = express.Router();

// booksRouter.use(isAdminMiddleware); // global

booksRouter.route("/").get(isAdminMiddleware, booksController.getAll);
booksRouter.route("/:id").get(booksController.getBook);

module.exports = booksRouter;
