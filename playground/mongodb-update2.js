//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  // findOneAndUpdate
  db.collection('Users').findOneAndUpdate({_id: new ObjectID("587056f97f3e0fa241fbbe57")
  }, {
    $set: {
      name: 'Leopoldo'
    }
    ,
    $inc: {
      age: 30
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

//  db.close();
});
