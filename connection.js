import './env.js';
//Import the mongoose module
// var mongoose = require('mongoose');
import mongoose from 'mongoose';

const uri = process.env.URI;
//Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/my_database';
// If your app uses only one database, you should use mongoose.connect. If you need to create additional connections, use mongoose.createConnection
await mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export { db };

// import mongodb from 'mongodb';
// import './env.js';

// const { MongoClient } = mongodb;
// const uri = process.env.URI;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Exporting to the controller, but, should I be exporting to the model?
// export { client };