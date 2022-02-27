import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import app from './server.js';
import AdsDao from './dao/ads-dao.js';

dotenv.config();

const port = process.env.PORT || 5000;

MongoClient.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).catch(err => {
    console.error(err);
    process.exit(1);
}).then(async client => {
    AdsDao.injectDB(client);

    // // get a list of ads matching the filter criteria
    // app.get('/api/v1/ads', (request, response) => {
    //     response.json(adsCollection.find(request));
    // });

    // // post/update an ad to the DB
    // app.post('/api/v1/ads', (request, response) => {
    //     // TODO: use upsert to post/update the ad described in request to DB
    //     response.json({ message: 'ad post failed' });
    // });

    // // delete an ad from the DB
    // app.delete('/api', (request, response) => {
    //     response.json({ message: 'ad delete failed' });
    // });

    app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
});
