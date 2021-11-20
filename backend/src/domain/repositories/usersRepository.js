const UserModel = require("../entities/db_models/userModel")
class UserRepository{
    constructor(request){
        this.request = request
    }
    async createUser(){
        try {
            const user = new UserModel(this.request.body)
            const result = await user.save()
            return result
        } catch (error) {
            return error
        }
    }
}
module.exports = UserRepository