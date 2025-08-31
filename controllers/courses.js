const coursesModel = require("./../models/courses");
const commentsModel = require("./../models/comments");

exports.getAll = async (req, res) => {
  const courses = await coursesModel.find({}).populate("comments").select("-__v -teacher.__v");
  res.json(courses);
};

exports.setComment = async (req, res) => {
  const { body, courseId } = req.body;

  const comment = await commentsModel.create({
    body, // body: body
  });

  await coursesModel.findOneAndUpdate(
    { _id: courseId.toString() },
    {
      $push: {
        comments: comment._id,
      },
    }
  );

  res.json({ message: "Comment Set Successfully :))" });
};