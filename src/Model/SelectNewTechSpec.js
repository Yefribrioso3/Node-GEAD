// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';

const SelectNewTechSpec = db.define("SelectNewTechSpec", {
    Id_SelectNewTechSpec: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    Id_TechnicalSpecification: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Id_NewTechSpec: {
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

export default SelectNewTechSpec;