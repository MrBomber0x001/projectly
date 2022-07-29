import { sequelize } from '../database/database.init.js'
import { Task } from './Task.js';
import { DataTypes } from 'sequelize';


export const Comment = sequelize.define("Comment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    the_comment: {
        type: DataTypes.STRING
    },
    mediaPath: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})

