// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';

const NewServicesInformation = db.define("NewServicesInformation", {
    Id_NewServInfo: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    Id_ServicesInformation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Value: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
});

export default NewServicesInformation;