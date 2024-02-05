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

            set create(obj){
                console.log(Collection)
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

