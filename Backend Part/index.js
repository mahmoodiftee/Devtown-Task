require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fc0zsls.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const PhonesCollection = client.db('Mobile-Shop').collection('Phones');
   
    // Get all data from PhonesCollection
    app.get('/phones', async (req, res) => {
      const cursor = PhonesCollection.find();
      res.send(await cursor.toArray());
    })

  


    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Phone Shop server is running');
});

app.listen(port, () => {
  console.log(`Phone Shop server server is running on port ${port}`);
});