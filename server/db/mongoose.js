var mongoose = require ('mongoose');
//so that mongoose can use promise
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp',{ useMongoClient: true });

module.exports = {
  mongoose
}
