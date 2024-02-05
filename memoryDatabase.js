class Database{
    static collections = new Map()

    constructor(dbName){
        this.name = dbName;
    }

    newCollection(collectionName = 'yourCollection'){
        class Collection{
            static documents = new Map()

            constructor(){
                this.name = collectionName
                this.currentId = 0
            }

            create(obj){
                return new Promise((resolve, reject)=>{
                    try{
                        Collection.documents.set(this.currentId, obj)
                        resolve({message: 'Document added'})

                    }catch(err){
                        console.log(err)
                        reject({message: 'An error'})
                    }
                })

                this.currentId += 1
            }
        }

        // Create a instance of this class
        let collectionInstance = new Collection;

        // Set the instance at the db and return the same instance
        Database.collections.set(collectionName, collectionInstance)
        return collectionInstance
    }
}

module.exports = Database;

