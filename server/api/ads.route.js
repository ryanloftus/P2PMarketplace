import express from 'express';
import AdsController from './ads.controller.js';

const router = express.Router();
router.route('/').get(AdsController.apiGetAds);

export default router;