const fastify = require('fastify')({
    logger: true
})

const memoryDatabase = require('./memoryDatabase');
const db = new memoryDatabase('Escola');

const collection = db.newCollection()
collection.create = 'ok'

console.log('Database: ', db, '\nCollection: ', collection)

fastify.get('/', (req, reply)=>{
    return 'ok'
})

fastify.listen({port: 8080})

