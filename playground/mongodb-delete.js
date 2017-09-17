//obj constructing
const {MongoClient, ObjectID} = require ('mongodB');

//connect to mongodb locally

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error,db)=>{
  if (error)
    return console.log('unable to connect to Todo database',error);
  console.log('successfully connect to Todo datase');

// DELETE MANY
  // db.collection('Users').deleteMany({name:'Huy'}).then((result)=>{
  //   console.log(result);
  // });

// DELETE BY ID
  db.collection('Users').findOneAndDelete ({
    _id: new ObjectID('59be1aad5bdf70268cc45c0a')
    }).then((result)=>{
      console.log('this is the one just deleted',result);
  },(error)=>{
    console.log('unable to delete');
  });
});
