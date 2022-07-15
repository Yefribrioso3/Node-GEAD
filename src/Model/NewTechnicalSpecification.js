// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';

const NewTechnicalSpecification = db.define("NewTechnicalSpecification", {
    Id_NewTechSpec: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    Id_TechnicalSpecification: {
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

    tableName: 'NewTechnicalSpecification',
    schema: 'gead',
    createdAt: false,
    updatedAt: false,
    timestamps: false
});

export default NewTechnicalSpecification;