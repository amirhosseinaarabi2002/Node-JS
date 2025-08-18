const { isValidObjectId } = require("mongoose");
const usersModel = require("../models/users");
const registerValidator = require("../validators/register");

exports.register = async (req, res) => {
  const validationResult = registerValidator(req.body);

  if (validationResult !== true) {
    return res.status(422).json(validationResult);
  }

  let { name, username, email, age, password } = req.body;

  const result = await usersModel.create({
    name,
    email,
    username,
    age,
    password,
  });

  res.status(201).json({
    message: "New user create successfully",
    result,
  });
};

exports.remove = async (req, res) => {
  const { id } = req.params;

  if (isValidObjectId(id)) {
    const deletedUser = await usersModel.findByIdAndDelete({ _id: id });

    if (!deletedUser) {
      return res.status(404).json({
        message: "There is not user !!",
      });
    }
  } else {
    return res.status(422).json({
      message: "UserID is not valid !!",
    });
  }

  res.status(200).json({
    message: "User Deleted Successfully",
  });
};

exports.getAll = async (req, res) => {
  const getAllUsers = await usersModel.find({}).lean();
  res.json(getAllUsers);
};

exports.getOne = async (req, res) => {
  const { id } = req.params;

  let getUser = null;

  if (isValidObjectId(id)) {
    getUser = await usersModel.findOne({ _id: id }, "-_id").select("name username email password");

    if (!getUser) {
      return res.status(404).json({
        message: "There is not user !!",
      });
    }
  } else {
    return res.status(422).json({
      message: "UserID is not valid !!",
    });
  }

  res.json(getUser);
};
