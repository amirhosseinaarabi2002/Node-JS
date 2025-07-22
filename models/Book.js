const fs = require("fs");
const db = require("./../db.json");

const find = () => {
  return new Promise((resolve, reject) => {
    resolve(db.books);
  });
};

const remove = (bookID) => {
  return new Promise((resolve, reject) => {
    const newBooks = db.books.filter((book) => book.id !== Number(bookID));

    if (newBooks.length === db.books.length) {
      reject({ message: "Book Not Found" });
    } else {
      fs.writeFile(
        `${process.cwd()}/db.json`,
        JSON.stringify({ ...db, books: newBooks }),
        (err) => {
          if (err) {
            reject(err);
          }

          resolve({ message: "Book Removed Successfully" });
        }
      );
    }
  });
};

module.exports = {
  find,
  remove,
};
