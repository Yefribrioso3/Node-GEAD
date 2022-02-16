import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';


const OptionalTechInfo = db.define("OptionalTechInfo", {
    Id_OptionalTechInfo: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    NominalCapacity: {
        type: DataTypes.STRING,
        allowNull: true
    },
    YearOfConstruction: {
        type: DataTypes.STRING,
        allowNull: true
    },
    EquipmentCurrentConditionsComments: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    NotesAboutEquipment: {
        type: DataTypes.STRING,
        allowNull: true
    },
    AssambledDissambled: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PlantTechnicalInformationContact: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PlantFinancialInformationContact: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Width: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Height: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Depth: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ConstructionMaterials: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ExternalCoating: {
        type: DataTypes.STRING,
        allowNull: true
    },
    CommunicationProtocol: {
        type: DataTypes.STRING,
        allowNull: true
    },
    MeasurementVariable: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ElectricalConsumption: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ProtectionGrade: {
        type: DataTypes.STRING,
        allowNull: true
    },
    SanitaryGrade: {
        type: DataTypes.STRING,
        allowNull: true
    },
    AvailableWarranty: {
        type: DataTypes.STRING,
        allowNull: true
    },
    RemainingWarrantyYears: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PeripheralDevicesAccesories: {
        type: DataTypes.STRING,
        allowNull: true
    },
    WorkingHours: {
        type: DataTypes.STRING,
        allowNull: true
    },
    LaboratoryEquipment: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Id_TechnicalSpecification: {
        type: DataTypes.STRING,
        allowNull: true
    },
},{
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
}
);

export default OptionalTechInfo;