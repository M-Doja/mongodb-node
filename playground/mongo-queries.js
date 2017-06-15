const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');


var id = '5941e955112a52049c1cebda';
var id2 = '594099fe24b5743b2ddb2b42';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findById(id).then((todos) => {
//   if (!todos) {
//     return console.log('ID not found');
//   }
//   console.log('Todo By ID', todos);
// }).catch((e) => console.log(e));

User.findById(id2).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log(user);
}).catch((e) => {
  console.log(e);
})
