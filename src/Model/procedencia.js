// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';

const Procedencia = db.define("Procedencia", {
    Id_Procedencia: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    Id_Line: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Id_Areas: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    freezeTableName: true,
    tableName: 'Procedencia',
    schema: 'gead',
    createdAt: false,
    updatedAt: false,
    timestamps: false
}
);

export default Procedencia;