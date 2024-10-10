import { Sequelize } from "sequelize";

class DB {
    static #connection

    static {
        this.#connection = new Sequelize({
            dialect: 'sqlite',
            storage: 'db.sqlite'
        });
    }

    static get connection () {
        return this.#connection
    }

    static async sync () {
        await this.connection.sync()
    }

    static async status () {
        try {
            await this.connection.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default DB;