// CONSULTAS A LA BASE DE DATOS

// import { getConnection, sql, queries } from "../database";
import TechSespecSValue from "../Model/techSespecSValue.js";

// Obtener listado de Select Technical Specification Value  ----  Consulta  ----------------
export const getTechSpecSValue = async (req, res) => {

    const techSespecSValue = await TechSespecSValue.findAll();

    res.json({ techSespecSValue });
};

// ------  POST ADD TechSpecSValue   ----- Insertar --------------------------
export const createNewTechSpecSValue = async (req, res) => {

    const { body } = req;

    try {

        const techSespecSValue = new TechSespecSValue(body);
        await techSespecSValue.save();

        res.json(techSespecSValue);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
};

// ------------   Get a TechSpecSValue by Id ---------------------
export const getTechSpecSValueById = async (req, res) => {

    const { id } = req.params;
    const techSespecSValue = await TechSespecSValue.findByPk(id);

    if (techSespecSValue) {

        res.json(techSespecSValue);

    } else {

        res.status(404).json({
            msg: `No existe techSespecSValue con el id ${id}`
        })

    }
};

// --------------------   Delete   ------------------------
export const deleteTechSpecSValueById = async (req, res) => {

    const { id } = req.params;

    const techSespecSValue = await TechSespecSValue.findByPk(id);
    if (!techSespecSValue) {
        return res.status(404).json({  //No existe
            msg: 'No existe techSespecSValue con el id: ' + id
        });
    }

    //Eliminacion fisica borrando los datos desde la db
    await countrie.destroy();

    res.json('País Eliminado');
};

// -----------------   Update TechSpecSValue  ----------------------- 
export const updateTechSpecSValueById = async (req, res) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const techSespecSValue = await TechSespecSValue.findByPk(id);
        if (!techSespecSValue) {
            return res.status(404).json({  //No existe
                msg: 'No existe techSespecSValue con el id: ' + id
            });
        }

        // await bu.update( countrie ); //Forma directa de actualizar los datos

        await techSespecSValue.update({ //Tomamos solo los datos que deseamos actualizar
            Id_TechnicalSpecification: body.Id_TechnicalSpecification,
            Id_TechnicalSpecificationValues: body.Id_TechnicalSpecificationValues
        });

        res.json(techSespecSValue);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}

















































// // Obtener listado de Select Technical Specification Value  ----  Consulta  ----------------
// export const getTechSpecSValue = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getAllTechSpecSValue) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------  POST ADD TechSpecSValue   ----- Insertar --------------------------
// export const createNewTechSpecSValue = async (req, res) => {
//     const { Id_TechnicalSpecification, Id_TechnicalSpecValues, value } = req.body;
//     // Validar campos vacios
//     if (Id_TechnicalSpecification == null || Id_TechnicalSpecValues == null ) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     try {
//         const pool = await getConnection(); // instanciamos la conexion

//         await pool
//             .request()
//             .input("Id_TechnicalSpecification", sql.Int, Id_TechnicalSpecification) // Creamos un input con el valor que envia el cliente
//             .input('Id_TechnicalSpecValues', sql.Int, Id_TechnicalSpecValues)
//             .input("value", sql.VarChar, value) 
//             .query( queries.AddNewTechSpecSValue )  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New STechSpecValue')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------------   Get a TechSpecSValue by Id ---------------------
// export const getTechSpecSValueById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getTechSpecSValue_ById )

//     res.send(result.recordset[0])
// };

// // --------------------   Delete   ------------------------
// export const deleteTechSpecSValueById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_TechSpecSValue)

//     res.sendStatus(204) //Envia respuesta vacia
// };

// // -----------------   Update TechSpecSValue  ----------------------- 
// export const updateTechSpecSValueById = async (req, res) => {
//     const {Id_TechnicalSpecification, Id_TechnicalSpecValues, value } = req.body;
//     const { id } = req.params;

//     if ((Id_TechnicalSpecification == null || Id_TechnicalSpecValues == null )) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     const pool = await getConnection();
//     await pool
//         .request()
//         .input('Id_TechnicalSpecification', sql.Int, Id_TechnicalSpecification)
//         .input('Id_TechnicalSpecValues', sql.Int, Id_TechnicalSpecValues)
//         .input('value', sql.VarChar, value)
//         .input('Id', sql.Int, id)
//         .query(queries.updateTechSpecSValueByID);

//     res.json({ Id_TechnicalSpecification, Id_TechnicalSpecValues, value });
// }

