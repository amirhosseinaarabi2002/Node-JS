const fs = require("fs");
const { dbConnection } = require("../configs/db");
const { ObjectId } = require("mongodb");

const find = async () => {
  const db = await dbConnection();
  const booksCollection = db.collection("books");
  const books = booksCollection.find({}).toArray();

  return books;
};

const remove = async (bookID) => {
  const db = await dbConnection();
  const booksCollection = db.collection("books");
  const result = await booksCollection.deleteOne({ _id: new ObjectId(bookID) });

  if (result.deletedCount) {
    return { message: "Book Removed Successfully" };
  } else {
    return { message: "Book Not Found" };
  }

};

module.exports = {
  find,
  remove,
};
