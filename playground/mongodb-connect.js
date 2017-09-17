// const MongoClient = require ('mongodb').MongoClient;

//obj constructing
const {MongoClient, ObjectID} = require ('mongodB');

//connect to mongodb locally
MongoClient.connect ('mongodb://localhost:27017/TodoApp', (error, db)=>{
  if(error){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'cung something to do 3',
  //   completed: false
  // },(error, result)=>{
  //   if(error){
  //     return console.log('unable to insert into Todos');
  //   }
  //   console.log('successfully insert', JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name: 'Huy',
    age: 28,
    location: 'California'
  },(error,result)=>{
    if (error)
      return console.log('unable to insert into Users');
    console.log('successfully inserted', JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
