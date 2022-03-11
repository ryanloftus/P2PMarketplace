let users;

export default class UsersDao {
    static async injectDB(connection) {
        if (users) return;
        try {
            users = await connection.db(process.env.DB_NAME).collection('users');
        } catch (err) {
            console.error(`Unable to connect to users collection. ${err}`)
        }
    }

    static async getUser(id) {
        const query = { _id: { $eq: id } };
        let user;
        try {
            user = await users.findOne(query);
        } catch (err) {
            user = {};
            console.error(`Could not issue query. ${err}`);
        }
        return user;
    }

    static async postUser(user) {
        const newUser = {
            _id: user.username,
            password: user.password,
        }
        try {
            await users.insertOne(newUser);
            return true;
        } catch (err) {
            console.error(`Create new user failed. ${err}`);
            return false;
        }
    }

    static async deleteUser(id) {
        try {
            await users.deleteOne({ _id: { $eq: id } });
            return true;
        } catch (err) {
            console.error(`Delete user failed. ${err}`);
            return false;
        }
    }
}