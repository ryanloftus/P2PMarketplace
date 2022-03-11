import UsersDao from '../dao/users-dao.js';

export default class UsersController {
    static async apiGetUser(req, res) {
        const user = UsersDao.getUser(req.body.username);
        res.json(user);
    }

    static async apiPostUser(req, res) {
        const wasPostSuccess = UsersDao.postUser(req.body);
        res.json({ successful: wasPostSuccess });
    }

    static async apiDeleteUser(req, res) {
        const wasDeleteSuccess = UsersDao.deleteUser(req.body.username);
        res.json({ successful: wasDeleteSuccess });
    }
}
