class Database{
    static documents = new Map() //Collection Name, documents collection [ id, value... id, value... id, value ]

    Collection = class{
        constructor(collectionName = 'myCollection'){
            Database.documents.set(collectionName, new Map())

            this.name = collectionName
            this.currentId = 0
        }

        create(add){
            return new Promise((resolve, reject)=>{
                try{
                    Database.documents.get(this.name).set(this.currentId, add)
                    this.currentId += 1

                    resolve({message: 'user add', documents: Database.documents})
                }catch(err){
                    throw err
                }
            })
        }

        find(callBack){
            return new Promise((resolve, reject)=>{
                try{
                    let a = Array.from(Database.documents.get(this.name).entries())

                    for(let value of a){
                        callBack(value[0], value[1])
                    }

                    resolve({mesage: 'okay'});
                }catch(err){
                    throw err
                }
            })
        }
    }
}

module.exports = Database;

