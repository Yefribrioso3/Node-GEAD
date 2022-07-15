// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';


const TechnicalSpecification = db.define("TechnicalSpecification", {
    Id_TechnicalSpecification: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    EquipmentType: {
        type: DataTypes.STRING,
        allowNull: true
    },
    CurrentConditions: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Weight: {
        type: DataTypes.STRING,
        allowNull: true
    },
    OEM: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ModelNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    SerialNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    vendor: {
        type: DataTypes.STRING,
        allowNull: true
    },
    currentWorking: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Id_Equipment: {
        type: DataTypes.STRING,
        allowNull: true
    },
},{
    freezeTableName: true,
    tableName: 'TechnicalSpecification',
    schema: 'gead',
    createdAt: false,
    updatedAt: false,
    timestamps: false
}
);

export default TechnicalSpecification;