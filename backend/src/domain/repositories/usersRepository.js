const UserModel = require("../entities/db_models/userModel")
const KEY = require("../../static/jwt")
const jwt = require("jsonwebtoken")
class UserRepository{
    constructor(request){
        this.request = request
    }
    async createUser(){
        try {
            const user = new UserModel(this.request.body)
            const result = await user.save()
            const token = jwt.sign({uid:result._id,username:result.username},KEY,{expiresIn:"365 days"})
            return token
        } catch (error) {
            return error
        }
    }
    async login(){
        try {
            const {email,password} = this.request.body
            const user = await UserModel.findOne({email})
            const result = await user.checkPassword(password)
            if(!result) throw "TODO"
            const token = jwt.sign({uid:result._id,username:result.username},KEY,{expiresIn:"365 days"})
            return token
        } catch (error) {
            return error
        }
    }
}
module.exports = UserRepository