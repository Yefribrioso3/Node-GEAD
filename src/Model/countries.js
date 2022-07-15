// import { DataTypes } from 'sequelize';

import pkg from 'sequelize';
const  { DataTypes } = pkg;

import db from '../database/connection.js';
// import BU from "../Model/BU";

const Countries = db.define("Countries", {
    Id_Countries: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Id_BU: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    freezeTableName: true,
    tableName: 'Countries',
    schema: 'gead',
    createdAt: false,
    updatedAt: false,
    timestamps: false
}
);


export default Countries;









Countries.associations = function(models) {
    Countries.belongsTo(models.BU);
    return Countries;
}