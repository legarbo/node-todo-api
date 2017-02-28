const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//var id = '68b5a47db073664506b9a50d11';

//if(!ObjectID.isValid(id)) {
  //console.log('ID not valid');
//}

//Todo.find({
  //_id: id
//}).then((todos) => {
  //console.log('Todos', todos);
//});


//Todo.findOne({
  //_id: id
//}).then((todo) => {
  //console.log('Todo', todo);
//});

//Todo.findById(id).then((todo) => {
  //if (!todo) {
    //return console.log('Id not found!')
  //}
  //console.log('Todo by Id',todo);
//}). catch((e) => console.log(e));
var id =  '587c084407fae2f40c70429a';

User.findById(id).then((user) => {
  if(!user) {
    return console.log('Id not found.')
  }
  console.log('User by Id', user);
}).catch((e) => console.log(e))
