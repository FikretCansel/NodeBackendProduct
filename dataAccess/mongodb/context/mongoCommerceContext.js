const mongodb= require('mongodb');

const MongoClient=mongodb.MongoClient;

let _db;

const mongoConnect=(callback)=>{
    MongoClient.connect('mongodb+srv://fikret:fikret@cluster0.ko3tm.mongodb.net/Commerce?retryWrites=true&w=majority')
    .then((client)=>{
        console.log("Connected");
        callback(client);
        _db=client.db();
    }).catch(err=>console.log("Detected error. "+err));
}

const getDb=()=>{
    if(_db){
        return _db;
    }
    console.log("No database");
    throw "No database";
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;