const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:23516/bhaskar',{ useNewUrlParser: true },(err,client) =>{
    if(err){
        console.log('Unable to Connect the Mongodb Server',err);
    }
    console.log('Connected to Mongodb Server');

    const db = client.db('bhaskar');
    //Delete Many                                                                                               
    // db.collection('bhaskar').deleteMany({company:'microsoft'}).then((result) =>{
    //     console.log(result);
    // });

    //Delete One
    // db.collection('bhaskar').deleteOne({company: '123'}).then((result) =>{
    //     console.log(JSON.stringify(result,undefined,2));
    //     });
    
    // //findOneAndDelete
    db.collection('test').deleteMany({company:'zomato'}).then((result) =>{
        console.log(JSON.stringify(result));
    }); 
    client.close();
});

