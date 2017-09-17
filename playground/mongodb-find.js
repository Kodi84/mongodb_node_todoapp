// const MongoClient = require ('mongodb').MongoClient;

//obj constructing
const {MongoClient, ObjectID} = require ('mongodB');

//connect to mongodb locally
MongoClient.connect ('mongodb://localhost:27017/TodoApp', (error, db)=>{
  if(error){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').find({name:'Huy'}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
  },(error)=>{
    console.log('unable to fetch data from Users');
  });

  // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(error)=>{
  //   console.log('unable to fetch data from Todos',error);
  // });

  // db.close();
});
