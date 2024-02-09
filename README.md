# It is a simple "database" who run in memory made only with JS (Node.js)

### Put in your code
You can use running it in your Database folder
```zsh
curl "https://raw.githubusercontent.com/lurelai/memory-database/main/memoryDatabase.js" --output "memoryDatabase.js"
```

### Usage
First, you can put it in your db.js, image this architecture:
```
yourProject
|  src/
|  |  Database/
|  |  |  memoryDatabase.js (imported by curl)
|  |  |  db.js
|  |  Models
|  |  |  studentModel.js
|  app.js
```

```js
// In your db.js
const memoryDatabase = require('./memoryDatabase.js')
const db = new memoryDatabase();

module.exports = db;

// ===================================================
// In your studentModel.js
const db = require('../Database/db.js')
const studentModel = new db.Collection('student')

module.exports = studentModel;

// ===================================================
// In your app.js
const studentModel = require('./src/Models/studentModel.js');

(async ()=>{
  await studentModel.create({name: "Freddie Mercury", age: -1})

  await studentModel.list((id, value)=>{
    console.log(id, value)
  })
  // output: 0 {name: "Freddie Mercury", age: dead}
})()
```

### It contains four functions, that are: "create", "delete", "update" and "list"
```js
(async ()=>{
  await studentModel.create({name: "me", age: 16})
  await studentModel.create({name: "you", age: "?"})
  await studentModel.list((id, values)=>{
    console.log(id, values)
  })
  // output: 0 {name: "me", age: 16}
  // output: 1 {name: "you", age: "?"}

  // now, pretend that i don't like you
  await studentModel.list(async (id, values)=>{
    if(values.name === "you")
      await studentModel.delete(id)
  })
  
  await studentModel.list((id, values)=>{
    console.log(id, values)
  })
  // output: 0 {name: "me", age: 16}
  
  // i changed my opinion, i like you more then i like me
  await studentModel.update(0, {name: "you", age: "?"})
  
  await studentModel.list((id, values)=>{
    console.log(id, values)  
  }) // output: 0 {name: "you", age: "?"}
  // And now, we are the same
})();
```
