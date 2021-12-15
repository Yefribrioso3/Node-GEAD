//conexion db
import config from '../config.js';
import {confi} from 'dotenv'
import sql from 'mssql';
import { Sequelize } from 'sequelize';

const db = new Sequelize(
    config.dbDatabase,
    config.dbUSer,
    config.dbPassword, {
        host: confi.DB_SERVER,
        dialect: 'mssql'
        // logging: false,
    }
);

export default db



// const dbSettings = {
//     user: config.dbUSer,
//     password: config.dbPassword,
//     server: config.dbServer,
//     database: config.dbDatabase, 
//     options: {
//         encrypt: true,
//         trustServerCertificate: true, //chacge to true for local dev / sel-signed certs
//     }
// }

// export async function getConnection() {   
//     try {
//         const pool = await sql.connect(dbSettings)  //Funcion asincrona 
//         return pool;
//     }catch (error)
//     {
//         console.error();(error)
//     }
// }

export async function getConnection() {   
    try {
        await db.authenticate();
        console.log("Database online")
    }catch (error)
    {
        throw new Error( error );
    }
}

export {sql};