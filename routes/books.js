const express = require("express");
const booksController = require("../controllers/books");

const booksRouter = express.Router();

// booksRouter.route("/").get(booksController.getAll);
booksRouter.route("/:id").get(booksController.getBook);

module.exports = booksRouter;
