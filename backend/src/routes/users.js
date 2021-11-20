const UserRepository = require("../domain/repositories/usersRepository")

const userRoute = (fastify, opts, next) => { 
    fastify.post('/', async(req, reply) => {
        const request = req
        const Repo = new UserRepository(request)
        const result = await Repo.createUser()
        reply.send(result)
    })
    
    next()
}

module.exports = userRoute