const fastify = require('fastify')({
    logger: true
})

const memoryDatabase = require('./memoryDatabase');

(async ()=>{
    console.log('ok')
})()

fastify.get('/', (req, reply)=>{
    return 'ok'
})

fastify.listen({port: 8080})

