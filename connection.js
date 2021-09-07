import mongoose from 'mongoose';
import './env.js';

//Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/my_database';
// If your app uses only one database, you should use mongoose.connect. If you need to create additional connections, use mongoose.createConnection
const uri = process.env.URI;

await mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log('Connected to MongoDB...:D');
export { db };