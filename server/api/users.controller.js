import UsersDao from '../dao/users-dao.js';

export default class UsersController {
    static async apiGetUser(req, res) {
        if (!req?.query?.username) {
            res.status(500).json('Invalid request. Username not specified.');
        } else {
            const user = await UsersDao.getUser(req.query.username);
            res.json(user);
        }
    }

    static async apiPostUser(req, res) {
        const wasPostSuccess = await UsersDao.postUser(req.body);
        res.json({ successful: wasPostSuccess });
    }

    static async apiDeleteUser(req, res) {
        const wasDeleteSuccess = await UsersDao.deleteUser(req.body.username);
        res.json({ successful: wasDeleteSuccess });
    }
}
