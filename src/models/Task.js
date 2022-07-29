import { sequelize } from '../database/database.init.js'
import { Comment } from './Comment.js';
import { DataTypes } from 'sequelize';


export const Task = sequelize.define("tasks", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
})

Task.hasMany(Comment, {
    foreignKey: "taskId",
    sourceKey: "id"
})

Comment.belongsTo(Task, {
    foreignKey: "taskId",
    targetId: "id"
})