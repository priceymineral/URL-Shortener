import mongodb from 'mongodb';
import './env.js';

const { MongoClient } = mongodb;
const uri = process.env.URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export { client };














//   .then(async _ => {
//     console.log("Connected to MongoDB successfully :)");
//   })
//   .catch(err => {
//   console.log(err)
//   });;

// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));