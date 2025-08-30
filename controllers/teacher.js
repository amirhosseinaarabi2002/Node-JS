const teacherModel = require("../models/teacher")

exports.register = async(req, res) => {
    await teacherModel.create({
        fullname: "pouya"
    })
    res.status(201).json({
        message: "teacher added!"
    })
}