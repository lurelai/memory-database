class Database{
    static documents = new Map() //Collection Name, documents collection [ id, value... id, value... id, value ]

    Collection = class{
        constructor(collectionName = 'myCollection', messages={}){
            const {
                _create = 'document created', // define the default message to when you create an document
                _delete = 'document deleted', // define the default message to when you delete an document
                _update = 'document updated', // define the default message to when you update an document
                _list = 'collection listed',  // define the default message to when you list an collection
            } = messages

            this.name = collectionName
            this.currentId = 0
            this.messages = {
                _create,
                _delete,
                _update,
                _list,
            }

            Database.documents.set(collectionName, new Map())
        }

        create(add){
            return new Promise((resolve, reject)=>{
                try{
                    Database.documents.get(this.name).set(this.currentId, add)
                    this.currentId += 1

                    return resolve({message: this.messages._create})
                }catch(err){
                    throw err
                }
            })
        }

        list(callBack){
            return new Promise((resolve, reject)=>{
                try{
                    let a = Array.from(Database.documents.get(this.name).entries())

                    for(let value of a){
                        callBack(value[0], value[1])
                    }

                    return resolve({message: this.messages._list});
                }catch(err){
                    throw err
                }
            })
        }

        delete(id){
            return new Promise((resolve, reject)=>{
                try{
                    const tryIt = Database.documents.get(this.name).get(id)

                    if(!tryIt)
                        return resolve({message: 'invalid id'})

                    
                    Database.documents.get(this.name).delete(id)
                    return resolve({message: this.messages._delete})
                }catch(err){
                    throw err
                }
            })
        }

        update(id, newValue){
            return new Promise((resolve, reject)=>{
                let tryIt = Database.documents.get(this.name).get(id)

                if(!tryIt)
                    return resolve({message: 'invalid id'})

                Database.documents.get(this.name).set(id, newValue)
                return resolve({message: this.messages._update})
            })
        }
    }
}

module.exports = Database;

