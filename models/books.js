const mongoose = require("mongoose");

const booksModel = mongoose.model("books", {
  title: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  author: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 18,
  },
  price: {
    type: Number,
    min: 10000,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 12,
  },
  free: {
    type: Number,
    default: 1,
  },
});

module.exports = booksModel;
