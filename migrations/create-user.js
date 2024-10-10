import { DataTypes } from "sequelize";
import Migration from "../core/Migration.js";
import User from "../models/User.js";

Migration.run({
    model: User,
    props: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
})
