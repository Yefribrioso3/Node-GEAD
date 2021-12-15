//configurar variables de entorno para asegurar datos sencibles como usuarios
import {config} from 'dotenv'

// import pkg from './database/connection.js';
// const { getConnection } = pkg;
config();

export default {
    dbUSer: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDatabase: process.env.DB_DATABASE || ''
};

