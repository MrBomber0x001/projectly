import { sequelize } from '../database/database.init.js';
import { DataTypes } from 'sequelize';
import { Project } from './Project.js';

export const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    isVerified: {
        type: DataTypes.BOOLEAN
    }
})


User.hasMany(Project, {
    foreignKey: "userId",
    sourceKey: "id"
})

Project.belongsTo(User, {
    foreignKey: "userId",
    targetId: "id"
})