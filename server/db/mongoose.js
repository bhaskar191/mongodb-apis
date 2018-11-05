var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:23516/todos',{ useNewUrlParser: true });


module.exports = {mongoose};