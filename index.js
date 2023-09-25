const { MongoClient } = require('mongodb');

// -------MongoDB connection -------- 
var uri = "mongodb://127.0.0.1:27017";
var client = new MongoClient(uri);

connectDatabase();

async function connectDatabase(){
    try{
        await client.connect();
        await  listDatabases(client);
    }catch(error){
        console.log(error);
    }    
}

async function listDatabases(client){
    console.log(client.db().admin().listDatabases());
    databasesList = await client.db().admin().listDatabases();

    console.log("All Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


