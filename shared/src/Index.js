import const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://bernard652000_db_user:WCo2R3aewJvqTc85@christcircle.tff6xjl.mongodb.net/?appName=ChristCircle";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");

    const db = client.db("test"); // change to your DB name
    const collection = db.collection("example");

    const result = await collection.insertOne({ message: "Hello Atlas!" });
    console.log("Insert result:", result);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();

