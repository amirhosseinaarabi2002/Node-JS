const mongoose = require("mongoose");

const coursesModel = mongoose.model("courses", {
  title: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: "teacher",
  },
});

module.exports = coursesModel;
