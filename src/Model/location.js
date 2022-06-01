// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';

const Location = db.define("Location", {
    Id_Location: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ShortName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Estado: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    FechaCreación: {
        type: DataTypes.DATE,
        allowNull: true
    },
},{
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
}
);

export default Location;