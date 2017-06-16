var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI , (err, db) => {
  if (err) {
    return console.log("Unable to connect to DB: "+err);
  }
  db = db;
  console.log('Connected to TodoApp Database');
});

module.exports = {mongoose}
