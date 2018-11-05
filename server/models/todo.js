var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    name:{
        type: String,
        required: true,
        trim:true,
        minlength:8
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    RegistrationNo:{
        type: Number,
        required: true,
        trim:true,
        minlength:8
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    ContactNo:{
        type: Number,
        required: true,
        trim:true,
        minlength:8
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


module.exports = {Todo};