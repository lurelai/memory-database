const fastify = require('fastify')({
    logger: true
})

const memoryDatabase = require('./memoryDatabase');
const db = new memoryDatabase();
const collection = new db.Collection('teste');

(async ()=>{
    await collection.create({ name: 'simao', idade: 10 })
    await collection.create({ name: 'joao', idade: 15 })
    await collection.create({ name: 'ariel', idade: 12 })
    await collection.create({ name: 'judas', idade: 12 })

    await collection.list((id, values)=>{
        console.log(id, values)
    }) 

    await collection.delete(0)
    await collection.update(1, {name:'lucas', idade: 16})

    await collection.list((id, values)=>{
        console.log(id, values)
    })
})()

fastify.get('/', (req, reply)=>{
    return 'ok'
})

fastify.listen({port: 8080})

