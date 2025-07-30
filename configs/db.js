const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/library";
mongoose
  .connect(dbUrl)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));
