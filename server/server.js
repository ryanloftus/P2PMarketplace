import express from 'express';
import cors from 'cors';
import ads from './api/ads.route.js';
import users from './api/users.route.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/ads', ads);
app.use('/api/v1/users', users);
app.use('*', (req, res) => res.status(404).json('Error: Not Found'));

export default app;
