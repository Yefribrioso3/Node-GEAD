//conexion db
import config from '../config.js';
import sql from 'mssql';
import { Sequelize } from 'sequelize';
import 'dotenv';


const db = new Sequelize(
    process.env.DBDATABASE,
    process.env.DBUSER,
    process.env.DBPASSWORD,
    {
        host: process.env.DBSERVER,
        dialect: 'mssql'
    }
)

export default db



// const db = new Sequelize(
//     config.dbDatabase,
//     config.dbUSer,
//     config.dbPassword,
//     {
//         host: config.dbServer,
//         dialect: 'mssql'
//     }
//     // logging: false,
// );

// export default db



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
        await db.sync({ altrer: true })

        console.log("Database online")
    }catch (error)
    {
        throw new Error( error );
    }
}

export {sql};