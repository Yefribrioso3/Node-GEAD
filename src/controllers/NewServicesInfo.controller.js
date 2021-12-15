// CONSULTAS A LA BASE DE DATOS

import { getConnection } from "../database/connection.js";
// import { sql } from "../database/connection";
import { queries } from "../database/querys.js";
import NewServicesInformation from "../Model/newServicesInformation.js";

// Obtener listado de NewServInfo  ----  Consulta  ----------------
export const getNewServInfo = async (req, res) => {

    const newServicesInformation = await NewServicesInformation.findAll();

    res.json({ newServicesInformation });
};

// ------   ADD NewServicesInformation   ----- Insertar --------------------------
export const createNewServInfo = async (req, res) => {
    const { body } = req;

    try {

        const newServicesInformation = new NewServicesInformation(body);
        await newServicesInformation.save();

        res.json(newServicesInformation);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
};

// ------------   Get a NewServicesInformation by Id ---------------------
export const getNewServInfoById = async (req, res) => {

    const { id } = req.params;
    const newServicesInformation = await NewServicesInformation.findByPk(id);

    if (newServicesInformation) {

        res.json(newServicesInformation);

    } else {

        res.status(404).json({
            msg: `No existe newServicesInformation con el id ${id}`
        })

    }
};

// --------------------   Delete   ------------------------
export const deleteNewServInfoById = async (req, res) => {

    const { id } = req.params;

    const newServicesInformation = await NewServicesInformation.findByPk(id);
    if (!newServicesInformation) {
        return res.status(404).json({  //No existe
            msg: 'No existe newServicesInformation con el id: ' + id
        });
    }

    //Eliminacion fisica borrando los datos desde la db
    await newServicesInformation.destroy();

    res.json('New Services Information Eliminado');
};

// -----------------   Update NewServicesInformation  ----------------------- 
export const updateNewServInfoById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const newServicesInformation = await NewServicesInformation.findByPk(id);
        if (!newServicesInformation) {
            return res.status(404).json({  //No existe
                msg: 'No existe newServicesInformation con el id: ' + id
            });
        }

        // await bu.update( countrie ); //Forma directa de actualizar los datos

        await newServicesInformation.update({ //Tomamos solo los datos que deseamos actualizar
            Id_ServicesInformation: body.Id_ServicesInformation,
            Name: body.Name,
            Value: body.Value
        });

        res.json(newServicesInformation);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}






// ------------   Get all New ServicesInformation by Equipment Id ---------------------


export const getAllNewServiInfoByEquipmentId = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input('Id', id)
        .query(queries.getAllNewServicesInfo_ByEquipmentId)

    res.send(result.recordset)
};





































// // Obtener listado de NewServInfo  ----  Consulta  ----------------
// export const getNewServInfo = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getNewServInfo) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------   ADD NewServicesInformation   ----- Insertar --------------------------
// export const createNewServInfo = async (req, res) => {
//     const {  Id_ServicesInformation, Name, Value } = req.body;
//     // Calidar campos vacias
//     if ( Id_ServicesInformation == null || Name == null || Value == null ) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     try {
//         const pool = await getConnection(); // instanciamos la conexion

//         await pool
//             .request()
//             .input("Id_ServicesInformation", sql.Int, Id_ServicesInformation)
//             .input("Name", sql.VarChar, Name) // Creamos un input con el valor que envia el cliente
//             .input('Value', sql.VarChar, Value)
//             .query( queries.AddNewServInfo )  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New Sercives Information')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------------   Get a NewServicesInformation by Id ---------------------
// export const getNewServInfoById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getNewServInfo_ById )

//     res.send(result.recordset[0])
// };

// // ------------   Get all New ServicesInformation by Equipment Id ---------------------
// export const getAllNewServiInfoByEquipmentId = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getAllNewServicesInfo_ByEquipmentId )

//     res.send(result.recordset)
// };


// // --------------------   Delete   ------------------------
// export const deleteNewServInfoById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_NewServInfo)

//     res.sendStatus(204) //Envia respuesta vacia
// };

// // -----------------   Update NewServicesInformation  ----------------------- 
// export const updateNewServInfoById = async (req, res) => {
//     const {Id_ServicesInformation, Name, Value} = req.body;
//     const { id } = req.params;

//     if (( Id_ServicesInformation == null || Name == null || Value == null )) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     const pool = await getConnection();
//     await pool
//         .request()
//         .input('Id_ServicesInformation', sql.Int, Id_ServicesInformation)
//         .input('Name', sql.VarChar, Name)
//         .input('Value', sql.VarChar, Value)
//         .input('Id', sql.Int, id)
//         .query(queries.updateNewServInfoByID);

//     res.json({ Id_ServicesInformation, Name, Value });
// }
