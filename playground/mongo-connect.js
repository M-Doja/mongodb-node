
// ES6 FEATURE: OBJ DESTRUCTRING
/*
var user = {name: "micah", age: 37};
var {name} = user;
console.log(name);
*/

const {MongoClient, ObjectID} = require('mongodb');

// CREATE SINGLE OBJECT ID
/*
var obj = new ObjectID();
console.log(obj);
*/


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
  if (err) {
    return console.log("Unable to connect to DB: "+err);
  }
  console.log("Connected to DB server");

  // database.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //   return console.log(err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  // database.collection('Users').insertOne({
  //   name: 'Micah',
  //   age: 37
  // }, (err, result) => {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  database.close();
});
