const mongoose = require("mongoose");
const commentsModel = mongoose.model(
  "Comment",
  new mongoose.Schema({
    body: {
      type: String,
      required: true,
    },
    courses: {
      type: mongoose.Types.ObjectId,
      ref: "courses"
    }
  })
);

module.exports = commentsModel;
