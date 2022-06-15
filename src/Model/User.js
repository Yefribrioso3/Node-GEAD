// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';


const User = db.define("User", {
    Id_Usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        isEmail: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        min: 8,
        // is: ["?=.*[a-z]", "?=.*[A-Z]", "?=.*[0-9]"]
    }, 
    roleId: {
        type: DataTypes.INTEGER,
        field: 'RoleID'
    },
    Estado: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Id_Location: {
        type: DataTypes.INTEGER,
        field: 'Id_Location',
        allowNull: true
    },
    LastLogin: {
        type: DataTypes.DATE,
        allowNull: true
    },
    Area: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
}
);

export default User; 