const fastify = require('fastify')({
    logger: true
})

const memoryDatabase = require('./memoryDatabase')
const db = new memoryDatabase('Escola')

const collection = db.newCollection();

(async ()=>{
    let msg = await collection.create('isso')
    console.log(msg)
})()

console.log('Database: ', db, '\nCollection: ', collection)

fastify.get('/', (req, reply)=>{
    return 'ok'
})

fastify.listen({port: 8080})

