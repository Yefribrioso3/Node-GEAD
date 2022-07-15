// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;

import db from '../database/connection.js';

const Equipment = db.define("Equipment", {
    Id_Equipment: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {     // Para obtener el correo
        type: DataTypes.STRING,
        allowNull: true
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Id_Procedencia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
},{
    freezeTableName: true,
    tableName: 'Equipments',
    schema: 'gead',
    timestamps: false,
    createdAt: false,
    updatedAt: false
}
);

export default Equipment;