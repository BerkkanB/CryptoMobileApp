const UserRepository = require("../repositories/usersRepository")

const createUserUsecase = async(request) => {
    const Repo = new UserRepository(request)
    const result = await Repo.createUser()
    return result
}
module.exports = createUserUsecase