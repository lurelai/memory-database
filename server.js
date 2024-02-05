const fastify = require('fastify')({
    logger: true
})

const memoryDatabase = require('./memoryDatabase');
const db = new memoryDatabase();
const collection = new db.Collection;

(async ()=>{
    let a = await collection.create({ name: 'lucas', idade: 10 })
    let c = await collection.create({ name: 'pedro', idade: 10 })

    await collection.find((id, values)=>{
        if(values.name === 'lucas' && values.idade === 12)
            console.log('ok')
    })
})()

fastify.get('/', (req, reply)=>{
    return 'ok'
})

fastify.listen({port: 8080})

