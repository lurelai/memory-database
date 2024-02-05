class Database{
    static documents = new Map() //Collection Name, documents collection [ id, value... id, value... id, value ]

    Collection = class{
        constructor(collectionName = 'myCollection'){
            this.name = collectionName
            this.currentId = 0

            Database.documents.set(collectionName, new Map())
        }

        create(add, message='document created'){
            return new Promise((resolve, reject)=>{
                try{
                    Database.documents.get(this.name).set(this.currentId, add)
                    this.currentId += 1

                    return resolve({message})
                }catch(err){
                    throw err
                }
            })
        }

        list(callBack, message='okay'){
            return new Promise((resolve, reject)=>{
                try{
                    let a = Array.from(Database.documents.get(this.name).entries())

                    for(let value of a){
                        callBack(value[0], value[1])
                    }

                    return resolve({message});
                }catch(err){
                    throw err
                }
            })
        }

        delete(id, message='document deleted'){
            return new Promise((resolve, reject)=>{
                try{
                    const tryIt = Database.documents.get(this.name).get(id)

                    if(!tryIt)
                        return resolve({message: 'invalid id'})

                    
                    Database.documents.get(this.name).delete(id)
                    return resolve({message})
                }catch(err){
                    throw err
                }
            })
        }

        update(id, newValue, message='document updated'){
            return new Promise((resolve, reject)=>{
                let tryIt = Database.documents.get(this.name).get(id)

                if(!tryIt)
                    return resolve({message: 'invalid id'})

                Database.documents.get(this.name).set(id, newValue)
                return resolve({message})
            })
        }
    }
}

module.exports = Database;

