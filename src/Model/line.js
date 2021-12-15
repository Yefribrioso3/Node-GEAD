// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';

const Line = db.define("Line", {
    Id_Line: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Id_LineTypes: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
}
);

export default Line;