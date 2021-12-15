// CONSULTAS A LA BASE DE DATOS

// import { getConnection, sql, queries } from "../database";
import Procedencia from "../Model/procedencia.js";

// Obtener listado de Procedencia  ----  Consulta  ----------------
export const getProcedencia = async (req, res) => {

    const procedencia = await Procedencia.findAll();

    res.json({ procedencia });
};

// ------------   Get a Procedencia by Id ---------------------
export const getProcedenciaById = async (req, res) => {

    const { id } = req.params;
    const procedencia = await Procedencia.findByPk(id);

    if (procedencia) {

        res.json(procedencia);

    } else {

        res.status(404).json({
            msg: `No existe procedencia con el id ${id}`
        })

    }
};

// ------   ADD Procedencia   ----- Insertar --------------------------
export const createNewProcedencia = async (req, res) => {

    const { body } = req;

    try {

        const procedencia = new Procedencia(body);
        await procedencia.save();

        res.json(procedencia);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
};

// -----------------   Update Procedencia  ----------------------- 
export const updateProcedenciaById = async (req, res) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const procedencia = await Procedencia.findByPk(id);
        if (!procedencia) {
            return res.status(404).json({  //No existe
                msg: 'No existe procedencia con el id: ' + id
            });
        }

        await procedencia.update(body); //Forma directa de actualizar los datos

        res.json(procedencia);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}

// --------------------   Delete   ------------------------
export const deleteProcedenciaById = async (req, res) => {

    const { id } = req.params;

    const procedencia = await Procedencia.findByPk(id);
    if (!procedencia) {
        return res.status(404).json({  //No existe
            msg: 'No existe procedencia con el id: ' + id
        });
    }

    //Eliminacion fisica borrando los datos desde la db
    await procedencia.destroy();

    res.json('Procedencia Eliminado');
};




























// // Obtener listado de Procedencia  ----  Consulta  ----------------
// export const getProcedencia = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getAllProcedencia) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------   ADD Procedencia   ----- Insertar --------------------------
// export const createNewProcedencia = async (req, res) => {
//     const { id_Line, id_Areas } = req.body;
//     // Calidar campos vacias
//     if (id_Line == null || id_Areas == null) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     try {
//         const pool = await getConnection(); // instanciamos la conexion

//         await pool
//             .request()
//             .input("id_Line", sql.Int, id_Line) // Creamos un input con el valor que envia el cliente
//             .input("id_Areas", sql.Int, id_Areas) 
//             .query( queries.AddNewProcedencia )  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New Procedencia')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------------   Get a Procedencia by Id ---------------------
// export const getProcedenciaById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getProcedencia_ById )

//     res.send(result.recordset[0])
// };

// // --------------------   Delete   ------------------------
// export const deleteProcedenciaById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_Procedencia)

//     res.sendStatus(204) //Envia respuesta vacia
// };

// // -----------------   Update Procedencia  ----------------------- 
// export const updateProcedenciaById = async (req, res) => {
//     const {id_Line, id_Areas} = req.body;
//     const { id } = req.params;

//     if ((id_Line == null || id_Areas == null)) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     const pool = await getConnection();
//     await pool
//         .request()
//         .input('id_Line', sql.Int, id_Line)
//         .input('id_Areas', sql.Int, id_Areas)
//         .input('Id', sql.Int, id)
//         .query(queries.updateProcedenciaByID);

//     res.json({ id_Line, id_Areas });
// }