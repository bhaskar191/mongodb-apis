//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:23516/bhaskar',{ useNewUrlParser: true }, (err, client) =>{

if(err){
 return   console.log('unable to connect MongoDB Server');
}
console.log('Connected to Mongodb Server');
const db = client.db('bhaskar');

// db.collection('bhaskar').find({
//     _id: new ObjectID("5bd95aa0174f333164cd9e29")
// }).toArray().then((docs) =>{
// console.log('bhaskar');
// console.log(JSON.stringify(docs, undefined , 2));
// }, (err) => {
//     console.log('unable to fetch the data from BHASKAR',err);
// });

db.collection('bhaskar').find({company: "microsoft corporation"}).toArray().then((docs) =>{
    console.log(JSON.stringify(docs,undefined,2));
}, (err) =>{
    console.log('unable to fetch the Bhaskar database',err);
});



db.collection('bhaskar').find().count().then((count) =>{
    console.log(`Bhaskar Count: ${count}`);

}, (err) =>{
    console.log('Unable to count Bhaskar',err);
});


client.close();
});

