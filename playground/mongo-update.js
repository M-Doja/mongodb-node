const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
  if (err) {
    return console.log("Unable to connect to DB: "+err);
  }
  console.log("Connected to DB server");


  // findOneAndUpdate
  // database.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("593f409abd227d0d550aae7c")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  database.collection('Users').findOneAndUpdate({
    name: 'Micah'
  }, {
    $set: {
      name: 'Mic Doja'
    },
    $inc: {
      age: 1
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // database.close();
});
