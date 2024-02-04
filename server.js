const fastify = require('fastify')({
    logger: true
})

fastify.get('/', (req, reply)=>{
    return 'ok'
})

fastify.listen({port: 8080})

