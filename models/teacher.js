const mongoose = require("mongoose");

const teachersSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
});

const teacherModel = mongoose.model("Teacher", teachersSchema);

module.exports = { teachersSchema, teacherModel };
