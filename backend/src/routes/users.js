const createUserUsecase = require("../domain/usecases/createUserUsecase")
const loginUsecase = require("../domain/usecases/loginUsecase")

const userRoute = (fastify, opts, next) => { 
    fastify.post('/create', async(req, reply) => {
        const result = await createUserUsecase(req)
        reply.send(result)
    })
    fastify.post('/login', async(req, reply) => {
        const result = await loginUsecase(req)
        reply.send(result)
    })
    next()
}

module.exports = userRoute