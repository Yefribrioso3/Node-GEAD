// CONSULTAS A LA BASE DE DATOS

// import { getConnection, sql, queries } from "../database";
import SelectNewServicesInfo from "../Model/selectNewServicesInfo.js";

// Obtener listado de SelectNewServicesInformation  ----  Consulta  ----------------
export const getSelectNewServInfo = async (req, res) => {
    const selectNewServicesInfo = await SelectNewServicesInfo.findAll();

    res.json({ selectNewServicesInfo });
};

export const getSelectNewServInfoById = async (req, res) => {

    const { id } = req.params;
    const selectNewServicesInfo = await SelectNewServicesInfo.findByPk(id);

    if (selectNewServicesInfo) {

        res.json(selectNewServicesInfo);

    } else {

        res.status(404).json({
            msg: `No existe selectNewServicesInfo con el id ${id}`
        })

    }
};

// ------   ADD SelectNewServicesInformation   ----- Insertar --------------------------
export const createNewSelectNewServInfo = async (req, res) => {
    const { body } = req;

    try {

        const selectNewServicesInfo = new SelectNewServicesInfo(body);
        await selectNewServicesInfo.save();

        res.json(selectNewServicesInfo);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
};

// ------------   Get a SelectNewServicesInformation by Id ---------------------


// --------------------   Delete   ------------------------
export const deleteSelectNewServInfoById = async (req, res) => {
    const { id } = req.params;

    const selectNewServicesInfo = await SelectNewServicesInfo.findByPk(id);
    if (!selectNewServicesInfo) {
        return res.status(404).json({  //No existe
            msg: 'No existe selectNewServicesInfo con el id: ' + id
        });
    }

    //Eliminacion fisica borrando los datos desde la db
    await selectNewServicesInfo.destroy();

    res.json('selectNewServicesInfo Eliminado');
};

// -----------------   Update SelectNewServicesInformation  ----------------------- 
export const updateSelectNewServInfoById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const selectNewServicesInfo = await SelectNewServicesInfo.findByPk(id);
        if (!selectNewServicesInfo) {
            return res.status(404).json({  //No existe
                msg: 'No existe selectNewServicesInfo con el id: ' + id
            });
        }

        // await bu.update( countrie ); //Forma directa de actualizar los datos

        await selectNewServicesInfo.update({ //Tomamos solo los datos que deseamos actualizar
            Id_ServicesInformation: body.Id_ServicesInformation,
            Id_NewServInfo: body.Id_NewServInfo
        });

        res.json(selectNewServicesInfo);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}


















































// // Obtener listado de SelectNewServicesInformation  ----  Consulta  ----------------
// export const getSelectNewServInfo = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getAllSelectNewServInfo) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------   ADD SelectNewServicesInformation   ----- Insertar --------------------------
// export const createNewSelectNewServInfo = async (req, res) => {
//     const { Id_ServicesInformation, Id_NewServInfo } = req.body;
//     // Calidar campos vacias
//     if (Id_ServicesInformation == null || Id_NewServInfo == null) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     try {
//         const pool = await getConnection(); // instanciamos la conexion

//         await pool
//             .request()
//             .input("Id_ServicesInformation", sql.Int, Id_ServicesInformation) // Creamos un input con el valor que envia el cliente
//             .input("Id_NewServInfo", sql.Int, Id_NewServInfo) 
//             .query( queries.AddNewSelectNewServInfo )  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New Procedencia')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------------   Get a SelectNewServicesInformation by Id ---------------------
// export const getSelectNewServInfoById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getSelectNewServInfo_ById )

//     res.send(result.recordset[0])
// };

// // --------------------   Delete   ------------------------
// export const deleteSelectNewServInfoById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_SelectNewServInfo)

//     res.sendStatus(204) //Envia respuesta vacia
// };

// // -----------------   Update SelectNewServicesInformation  ----------------------- 
// export const updateSelectNewServInfoById = async (req, res) => {
//     const { Id_ServicesInformation, Id_NewServInfo } = req.body;
//     const { id } = req.params;

//     if ((Id_ServicesInformation == null || Id_NewServInfo == null)) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     const pool = await getConnection();
//     await pool
//         .request()
//         .input('Id_ServicesInformation', sql.Int, Id_ServicesInformation)
//         .input('Id_NewServInfo', sql.Int, Id_NewServInfo)
//         .input('Id', sql.Int, id)
//         .query(queries.updateSelectNewServInfoByID);

//     res.json({ id_Line, id_Areas });
// }
