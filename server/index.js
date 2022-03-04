import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import app from './server.js';
import AdsDao from './dao/ads-dao.js';
import UsersDao from './dao/users-dao.js';

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
    UsersDao.injectDB(client);
    app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
});
