import { DataTypes } from "sequelize";
import Todo from "../models/Todo.js";
import Migration from "../core/Migration.js";

Migration.run({
    model: Todo,
    props: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        body: DataTypes.STRING,
    }
})
