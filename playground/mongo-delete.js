const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
  if (err) {
    return console.log("Unable to connect to DB: "+err);
  }
  console.log("Connected to DB server");



  // deleteMany
// database.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });

  // deleteOne
// database.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
//   console.log(result);
// });

  // findOneAndDelete
// database.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

database.collection('Users').deleteOne({_id: new ObjectID("593f47519062b70ecca6d17e")}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});

  // database.close();
});
