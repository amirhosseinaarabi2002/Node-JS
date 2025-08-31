const mongoose = require("mongoose");
const { teachersSchema } = require("./teacher");

const coursesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  teacher: {
    type: teachersSchema,
  },
});

coursesSchema.virtual("comments", {
  ref: "comments",
  localField: "_id",
  foreignField: "courses"
})

const coursesModel = mongoose.model("courses", coursesSchema)

module.exports = coursesModel;
