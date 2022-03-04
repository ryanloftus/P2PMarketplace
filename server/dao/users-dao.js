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

    static async getUser() {
        // TODO
    }

    static async postUser() {
        // TODO
    }

    static async updateUser() {
        // TODO
    }

    static async deleteUser() {
        // TODO
    }
}