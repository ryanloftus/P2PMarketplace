import express from 'express';
import AdsController from './ads.controller.js';

const router = express.Router();
router.route('/').get(AdsController.apiGetAds);
router.route('/').post(AdsController.apiPostAd);
router.route('/').put(AdsController.apiUpdateAd);
router.route('/').delete(AdsController.apiDeleteAd);

export default router;