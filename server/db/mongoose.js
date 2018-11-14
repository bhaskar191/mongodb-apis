var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:23516/todos',{
    
    useNewUrlParser: true,
    useCreateIndex:true
});


module.exports = {mongoose};