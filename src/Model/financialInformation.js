import pkg from 'sequelize';
const  { DataTypes } = pkg;
import db from '../database/connection.js';


const FinancialInformation = db.define("FinancialInformation", {
    Id_FinancialInformation: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    EquipmentValueInUSD: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    Activo_fijo: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Soc: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    Concatenar: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Clase: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Centro: {
        type: DataTypes.STRING,
        allowNull: true
    },
    CodPM: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Centro_de_costos: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Fecha_de_capitalizacion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Valor_Adquirido: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    Amortizacion_acumulada: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    Valor_Contable: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    Moneda: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Tipo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Screen: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Nom_Clase: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Nom_Ce: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Encontrado_SI_NO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Estado_del_Activo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Categoria: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Gerencia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Codigo_De_Barras: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DI: {
        type: DataTypes.STRING,
        allowNull: true
    },
    SN: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Depreciacion_acumulada_ajustada: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    Tasa_Cambio_contra_dolar: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    Latitud: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    Longitud: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    Period_Time: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Id_Equipment: {
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

export default FinancialInformation;