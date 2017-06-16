const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');


// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove().then((result) => {
//   console.log(reuslt);
// });


Todo.findByIdAndRemove('594329c5159437d0c1e281fe').then((todo) => {
  console.log(todo);
});
