const {ObjectId} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
mongoose.set('useFindAndModify', false);
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

Todo.findByIdAndRemove('5bdeeefe07a94203b4335053').then((todo) =>{
    console.log(todo);
});