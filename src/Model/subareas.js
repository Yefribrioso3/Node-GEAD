// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';

const SubAreas = db.define("SubAreas", {
    Id_SubAreas: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Id_Areas: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    freezeTableName: true,
    tableName: 'SubAreas',
    schema: 'gead',
    createdAt: false,
    updatedAt: false,
    timestamps: false
}
);

export default SubAreas;