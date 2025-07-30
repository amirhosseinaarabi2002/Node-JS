const mongoose = require("mongoose");

const usersModel = mongoose.model("users", {
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  },
  username: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 15,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
    // min: 18,
    required: false,
    default: 18,
  },
});

module.exports = usersModel;