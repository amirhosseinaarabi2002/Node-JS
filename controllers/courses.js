const coursesModel = require("../models/courses")

exports.addCourse = async(req, res) => {
    await coursesModel.create({
        title: "flutter",
        teacher: "68b2de106d99aac1c280cd51"
    })
    res.status(201).json({
        message: "course added!"
    })
}