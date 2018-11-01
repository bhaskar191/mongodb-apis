//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');

// var user = {name: 'bhaskar', Age:'26' ,Add: 'patna(Bihar)'};
// var {Age,name,Add} = user;
// console.log(Age,name,Add);

MongoClient.connect('mongodb://localhost:23516/bhaskar',{ useNewUrlParser: true }, (err, client) =>{

if(err){
 return   console.log('unable to connect MongoDB Server');
}
console.log('Connected to Mongodb Server');
// const db = client.db('bhaskar')

// db.collection('bhaskar').insertOne({
//     company: 'wieland solution pvt ltd',
//     completed: false
// }, (err,result) =>{
//     if(err){
//       return  console.log('unable to insert the data inside BhaskarDB',err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
// });
// const db = client.db('test')
// db.collection('test').insertOne({
//     _id:33376876767,
//     name:'bhaskar kumar sahni',
//     age:'26',
//     location:'jasidih Deoghar'
// }, (err,result) =>{
//     if(err){
//         console.log('Unable to insert into TestDB',err);
//     }
//     console.log((result.ops));
// });

client.close();
});

