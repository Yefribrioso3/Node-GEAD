// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';

const TechnicalSpecificationValues = db.define("TechnicalSpecificationValues", {
    Id_TechnicalSpecificationValues: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Value: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Id_TechnicalSpecification: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    freezeTableName: true,
    
    tableName: 'TechnicalSpecificationValues',
    schema: 'gead',
    createdAt: false,
    updatedAt: false,
    timestamps: false
}
);

export default TechnicalSpecificationValues;