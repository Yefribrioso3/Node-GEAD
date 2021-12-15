// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';


const User = db.define("User", {
    Id_User: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Name: {
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
        is: ["?=.*[a-z]", "?=.*[A-Z]", "?=.*[0-9]"]
    }, 
    roleId: {
        type: DataTypes.INTEGER,
        field: 'RoleID'
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
}
);

let hashed_pass = await bcrypt.hash(req.body.password, 10)

export default User; 