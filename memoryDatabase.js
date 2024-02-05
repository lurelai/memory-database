class Database{
    static documents = new Map() //Collection Name, documents collection [ id, value... id, value... id, value ]

    Collection = class{
        constructor(collectionName = 'myCollection'){
            Database.documents.set(collectionName, new Map())

            this.name = collectionName
            this.currentId = 0
        }

        create(add, message='Document created'){
            return new Promise((resolve, reject)=>{
                try{
                    Database.documents.get(this.name).set(this.currentId, add)
                    this.currentId += 1

                    resolve({message})
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

                    resolve({message});
                }catch(err){
                    throw err
                }
            })
        }

        delete(id, message='Document deleted'){
            return new Promise((resolve, reject)=>{
                try{
                    const tryIt = Database.documents.get(this.name).get(id)

                    if(!tryIt)
                        resolve({message: 'ID not found'})

                    
                    Database.documents.get(this.name).delete(id)
                    resolve({message})
                }catch(err){
                    throw err
                }
            })
        }
    }
}

module.exports = Database;

