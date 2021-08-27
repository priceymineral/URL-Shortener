import mongodb from 'mongodb';
const { MongoClient } = mongodb;

async function main() {
  const uri = "mongodb+srv://sirocular:node1234@cluster0.cbo3l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();

    // await listDatabases(client);
    await createListing(client, {
      name: 'Lovely Loft',
      summary: 'A lovely loft in Fresno',
      bedrooms: 1,
      bathrooms: 1
    })

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function createListing(client, newListing) {
  const result = await client.db().collection('test_collection').insertOne(newListing);

  console.log(`New listing inserted: ${result.insertedId}`);
}

// Get a list of all the databases in mongo client
async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log('Databases:');
  databasesList.databases.forEach(db => {
    console.log(` - ${db.name}`);
  })
}