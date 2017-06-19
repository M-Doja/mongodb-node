const bcrypt = require('bcryptjs');

var password = 'abc123!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$DvRpG7jgNUaJtstuC63A2uSVq/6hTCA4T/q5l2lW/.ooCWJGly0qm';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
