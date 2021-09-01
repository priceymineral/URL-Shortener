import mongodb from 'mongodb';
import './env.js';

const { MongoClient } = mongodb;
const uri = process.env.URI;
// console.log('uri:', uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function main(code, req, res) {

  try {
    await client.connect();
    await createListing(client, {
      url: req.body.url,
      code: code
    })
    res.status(200).send({
      code: code
    });

  } catch (e) {
    console.error(e);

  } finally {
    await client.close();

  }
}

// main().catch(console.error);

async function createListing(client, newListing) {
  const result = await client.db().collection('test_collection').insertOne(newListing);

  console.log(`New listing inserted with id: ${result.insertedId}`);
}

export { main };
















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