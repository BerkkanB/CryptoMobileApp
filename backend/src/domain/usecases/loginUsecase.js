const UserRepository = require("../repositories/usersRepository")


const loginUsecase = async(request) => {
    const Repo = new UserRepository(request)
    const result = await Repo.login()
    return result
}
module.exports = loginUsecase