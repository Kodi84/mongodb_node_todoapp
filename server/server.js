var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  console.log(req.body);
  var newTodo = new Todo({
    text: req.body.text
  });

  newTodo.save().then((doc)=>{
    res.send(doc);
  },(err) => {
    res.status(400).send(err);
  });

});
app.listen(3000,()=>{
  console.log('server started on port 3000');
});
