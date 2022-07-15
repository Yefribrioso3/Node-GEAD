// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;

import db from '../database/connection.js';

const Areas = db.define("Areas", {
    Id_Areas: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Id_Operations: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    freezeTableName: true,
    tableName: 'Areas',
    schema: 'gead',
    createdAt: false,
    updatedAt: false,
    timestamps: false
}
);

export default Areas;