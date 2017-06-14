var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
    console.log("Unable to save todo: "+err);
  });
});

app.listen(port, () => {
  console.log(`App now active on port ${port}`);
});


module.exports = {app};
