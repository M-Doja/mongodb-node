var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT;

if (env === 'development') {
  port = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
  port = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}
