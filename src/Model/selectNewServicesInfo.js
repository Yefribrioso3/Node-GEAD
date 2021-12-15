// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';

const SelectNewServicesInfo = db.define("SelectNewServicesInfo", {
    Id_SelectNewServInfo: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    Id_ServicesInformation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Id_NewServInfo: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
}
);

export default SelectNewServicesInfo;