

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
  if (err) {
    return console.log("Unable to connect to DB: "+err);
  }
  console.log("Connected to DB server");

  // FIND ALL TODOS
  // database.collection('Todos').find().toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Cound not fetch Todos');
  // });

  // FIND BY COMPLETED
  // database.collection('Users').find({completed: true}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Cound not fetch Todos');
  // });

  // FIND BY ID
  // database.collection('Todos').find({_id: new ObjectID('593f409abd227d0d550aae7c')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Cound not fetch Todos');
  // });


  // FIND Todo count
  // database.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ` );
  //   console.log(JSON.stringify(count, undefined, 2));
  // }, (err) => {
  //   console.log('Cound not fetch Todos');
  // });

  // FIND BY NAME
  database.collection('Users').find({name: 'Micah'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Cound not fetch Todos');
  });


  // database.close();
});
