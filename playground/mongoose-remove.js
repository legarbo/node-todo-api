const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//  console.log(result);
// });

// Todo.findOneAndRmove
// Todo.findByIdAndRemove

//Todo.findOneAndRemove({_id: ''}).then((todo) => {

//});

Todo.findByIdAndRemove('').then((todo) => {
  console.log(todo);
});
