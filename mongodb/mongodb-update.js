const {MongoClient,ObjectId,db} = require('mongodb');


MongoClient.connect('mongodb://localhost:23516/bhaskar',{ useNewUrlParser: true },(err,client) =>{
    if(err){
       return console.log('Unable to Connect MongoDb Server');
    }
    console.log('Connected To Mongodb Server');
    const db = client.db('bhaskar');
    //const ObjectId = client.ObjectId;
   
    db.collection('test').findOneAndUpdate({
        _id: new ObjectId('5bdc117edb2db603acaabc6d') 
    },{
        $set: {
           company: 'zomato'
        },$inc:{
            street: 1
        }
    },{
        returnOriginal: false
    }).then((result) =>{
        console.log(result);
    })

client.close();
});
