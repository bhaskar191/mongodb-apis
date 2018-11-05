var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req , res ) =>{
    var todo = new Todo({
        name: req.body.name,
        RegistrationNo: req.body.RegistrationNo,
        ContactNo: req.body.ContactNo
    });

    todo.save().then((doc) =>{
        res.send(doc);
    }, (e) =>{
    res.status(400).send(e);
    });
});

app.listen(5000, () =>{
    console.log('Started Server at:5000')
});



