//obj constructing
const {MongoClient, ObjectID} = require ('mongodB');

//connect to mongodb locally

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error,db)=>{
  if (error)
    return console.log('unable to connect to Todo database',error);
  console.log('successfully connect to Todo datase');

  db.collection('Users').findOneAndUpdate(
  {
      _id: new ObjectID("59bdfe97d3a5311dec377475")
  },
  {
    $set: {
      name : "e",
    },
    $inc : {
      age : 8
    }
  },
  {
    returnOriginal: false
  }).then((result)=>{
    console.log('this is result',result);
  });
});
