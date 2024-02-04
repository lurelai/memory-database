class Database{
    static collections = new Map()

    set newCollection(collectionName){
        Database.collections.set(collectionName) 
    }
}

module.exports = Database;

