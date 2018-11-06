const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5bdeeec807a94203b4335051';

// if(!ObjectId.isValid(id)){
//     console.log('ObjectId is not Valid');
// }

// // Todo.find({
// //     _id:  id
// // }).then((todos) =>{
// //     console.log('Todos',todos);
// // });

// // Todo.findOne({
// //     _id:  id
// // }).then((todo) =>{
// //     console.log('Todo',todo);
// // });

// Todo.findById(id).then((todo) =>{
//     if(!todo){
//         return console.log('Id not Found');
//     }
//     console.log('Todo by id',todo);
// }).catch((e) => console.log(e));


///CHL
// var id = '5be14635a7908108c8dd48eb';


// User.find({
//     _id: id
// }).then((todos) =>{
//     console.log('User',todos);
// }).catch((e) => (e));

// if(!ObjectId.isValid(id)){
//     console.log('ID is not valid');
// }else if(ObjectId.isValid(id)){
//     console.log('ID Found:',id);
// }


var id = '5be14635a7908108c8dd48eb';
User.findById(id).then((user) =>{
    if(!user){
        return console.log('ID Not Found');
    }
    console.log('User by ID',user);
}).catch((e) => (e));