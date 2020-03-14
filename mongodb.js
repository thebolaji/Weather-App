const { MongoClient, ObjectID } = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'weather_app';

// Use connect method to connect to the server
MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log("Not Sucessfully Connected");
    }
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    db.collection("users").updateOne({
        _id: new ObjectID("5e695974c1a2791c40081e28")
    }, {
        $set: {
            name: 'Jide'
        }
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
})