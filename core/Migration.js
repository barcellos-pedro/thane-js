import DB from "./Database.js";

export default class Migration {
    static UP = '--up'
    static DOWN = '--down'

    static run ({ model, props }) {
        this.#option === this.UP ?
            this.#up(model, props) :
            this.#down(model)
    }

    static get #option () {
        const [arg] = process.argv.slice(2)
        return arg
    }

    static async #up (model, props) {
        model.init({ ...props }, { sequelize: DB.connection })
        await DB.sync();
        console.log('All models were updated successfully.');
    }

    static async #down (table) {
        try {
            console.log(table)
            await table.drop()
            console.log(`[${table.name}] table dropped!`)
        }
        catch (error) {
            console.error(`Error dropping [${table.name}]: `, error)
        }
    }
}