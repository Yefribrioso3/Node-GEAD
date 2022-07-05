// import { DataTypes } from 'sequelize';
import pkg from 'sequelize';
const { DataTypes } = pkg;
import db from '../database/connection.js';

const ServicesInformation = db.define("ServicesInformation", {
    Id_ServicesInformation: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    DateOfInstallation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DateOfDesintallation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DesuseReason: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DesinstallationReason: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ProcurementOrder: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Id_Equipment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ResponsableEquipo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PlantaResponsable: {
        type: DataTypes.STRING,
        allowNull: true
    },
    AreaResponsable: {
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

export default ServicesInformation;