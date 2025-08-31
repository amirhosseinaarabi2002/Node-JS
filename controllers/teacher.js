const coursesModel = require("../models/courses");
const { teacherModel } = require("../models/teacher");

exports.register = async (req, res) => {
  //   const teacher = await teacherModel.findOne({
  //     _id: "68b2dd4c94342031fb5437a8",
  //   });

  //   coursesModel.create({
  //     title: "react js",
  //     teacher: teacher,
  //   });
  //   res.status(201).json({
  //     message: "teacher added!",
  //   });

  await coursesModel.findOneAndUpdate(
    {
      _id: "68b2eaa129e8e49bbe6e1f0e",
    },
    {
      $set: {
        Comments: [],
      },
    }
  );

  res.json({
    message: "new comment added!",
  });
};
