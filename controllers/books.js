const { isValidObjectId } = require("mongoose");
const booksModel = require("../models/books");

exports.getAll = async (req, res) => {
  const books = await booksModel.find({}).lean();
  res.json(books);
};

exports.getBook = async (req, res) => {
  if (req.params.id) {
    const { id } = req.params;

    let book = null;
    if (isValidObjectId(id)) {
      // user = await usersModel.findOne({ _id: id }, "-createdAt -updatedAt -_id");
      book = await booksModel.findOne({ _id: id });

      if (!book) {
        return res.status(404).json({
          message: "There is not book !!",
        });
      }
    } else {
      return res.status(422).json({
        message: "BookID is not valid !!",
      });
    }

    res.json(book);
  } else {
    const books = await booksModel.find({}).lean();
    res.json(books);
  }
};
