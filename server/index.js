import express from 'express';
import { MongoClient } from 'mongodb';

const PORT = process.env.PORT || 3001;

const app = express();
const uri = 'mongodb+srv://ryanL:m3rNProj@cluster0.virgn.mongodb.net/sample_mflix?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db('sample_mflix').collection('comments');
    // perform actions on the collection object
    app.get('/api', (request, response) => {
        response.json({ message: 'Hello from the server!' });
    });
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
    client.close();
});


