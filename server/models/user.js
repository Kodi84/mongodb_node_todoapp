var mongoose = require ('mongoose');

var User = mongoose.model('User',{
  email: {
    type: String,
    trim: true
  }
});

module.exports = {User};
