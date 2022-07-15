import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';

const role = db.define("Roles", {
    roleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'Role',
    schema: 'gead',
    createdAt: false,
    updatedAt: false,
    timestamps: false
}
);

export default role; 