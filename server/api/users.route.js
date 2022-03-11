import express from 'express';
import UsersController from './users.controller.js';

const router = express.Router();
router.route('/').get(UsersController.apiGetUser);
router.route('/').post(UsersController.apiPostUser);
router.route('/').delete(UsersController.apiDeleteUser);

export default router;