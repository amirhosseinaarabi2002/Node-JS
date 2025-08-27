const usersModel = require("../models/users")

module.exports = async(req, res, next) => {
    const { id } = req.body

    const user = await usersModel.findOne({ _id: id }).lean()

    if(user) {
        if(user.role === "ADMIN") {
             next()
        }else{
            return res.status(403).json({
                message: "this route is only for admins"
            })
        }

    }else{
        return res.status(404).json({
            message: "user not defined!"
        })
    }
}