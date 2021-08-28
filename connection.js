//Import the mongoose module
import mongoose from 'mongoose';

//Set up default mongoose connection
const mongoDB = process.env.MONGODB;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');

  const kittySchema = new mongoose.Schema({
    name: String
  });

  const Kitten = mongoose.model('Kitten', kittySchema);

  const fluffy = new Kitten({ name: 'fluffy' });

  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    console.log('saved fluffy to MongoDB')
  });
});




















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