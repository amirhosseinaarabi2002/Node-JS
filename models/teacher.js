const mongoose = require("mongoose");

const teacherModel = mongoose.model("teacher", {
  fullname: {
    type: String,
    required: true,
  },
});

module.exports = teacherModel;
