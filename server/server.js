var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var {ObjectId} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var port = 5000;
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

app.get('/todos',(req , res) =>{
    Todo.find().then((todos) =>{
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id',(req,res) =>{
var id  = req.params.id;

if(!ObjectId.isValid(id)){
    res.status(400).send();
}

Todo.findById(id).then((todo) =>{
    if(!Todo){
        res.status(404).send();
    }
    res.send({todo});
}).catch((e) => {
    res.status(400).send();
});
});

app.delete('/todos/:id',(req,res) =>{
    //get the id
    var id = req.params.id;
    //validate id --- if not valid return to 404
    if(!ObjectId.isValid(id)){
        res.status(400).send();
    }
    //remove todo by id 
    Todo.findByIdAndRemove(id).then((todo) =>{
        if(!Todo){
           return res.status(404).send(todo);
        }
        res.status(200).send(todo);
    }).catch((e) =>{
        res.status(400).send();
    });

});

app.post('/users', (req, res) =>{
    var body = _.pick(req.body, ['email','password']);
    var user = new User(body);

    user.save().then((user) =>{
       return user.generateAuthToken();
    //res.send(user)
    }).then((token) =>{
        res.header('X-auth',token).send(user);
    }).catch((e) =>{
        res.status(400).send(e);
    })
});

app.listen(port, () =>{
    console.log('Started Server at:',port);
});



module.exports = {app};