// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';

const EquipmentsTechnicals = db.define("EquipmentsTechnicals", {
    Id_EquipmentsTechnicals: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    Id_Equipment: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Id_TechnicalSpecification: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Value: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    freezeTableName: true,

    tableName: 'EquipmentsTechnicals',
    schema: 'gead',
    createdAt: false,
    updatedAt: false,
    timestamps: false
}
);

export default EquipmentsTechnicals;