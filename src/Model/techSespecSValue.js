// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';

const TechSespecSValue = db.define("TechSespecSValue", {
    Id_TSSV: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Id_TechnicalSpecification: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Id_TechnicalSpecificationValues: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Value: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    freezeTableName: true,

    tableName: 'TechSespecSValue',
    schema: 'gead',
    createdAt: false,
    updatedAt: false,
    timestamps: false
}
);

export default TechSespecSValue;