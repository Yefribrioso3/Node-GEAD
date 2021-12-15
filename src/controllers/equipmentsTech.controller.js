// CONSULTAS A LA BASE DE DATOS

// import { getConnection, sql, queries } from "../database";
import EquipmentsTechnicals from "../Model/equipmentsTechnicals.js";

// Obtener listado de EquipmentTechnical  ----  Consulta  ----------------
export const getEquipmentTechnical = async (req, res) => {
    const equipmentTech = await EquipmentsTechnicals.findAll();

    res.json({ equipmentTech });
};

// ------   ADD Area   ----- Insertar --------------------------
export const createNewEquipmentTechnical = async (req, res) => {
    const { body } = req;

    try {

        const equipmentTech = new EquipmentsTechnicals(body);
        await equipmentTech.save();

        res.json(equipmentTech);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
};

// ------------   Get a Area by Id ---------------------
export const getEquipmentTechnicalById = async (req, res) => {
    const { id } = req.params;
    const equipmentTech = await EquipmentsTechnicals.findByPk(id);

    if (equipmentTech) {

        res.json(equipmentTech);

    } else {

        res.status(404).json({
            msg: `No existe equipment Technicals con el id ${id}`
        })

    }
};

// --------------------   Delete   ------------------------
export const deleteEquipmentTechnicalById = async (req, res) => {

    const { id } = req.params;

    const equipmentTech = await EquipmentsTechnicals.findByPk(id);
    if (!equipmentTech) {
        return res.status(404).json({  //No existe
            msg: 'No existe equipments Technicals con el id: ' + id
        });
    }

    //Eliminacion fisica borrando los datos desde la db
    await equipmentTech.destroy();

    res.json('Equipment Technicals Eliminado');
};

// -----------------   Update Area  ----------------------- 
export const updateEquipmentTechnicalById = async (req, res) => {
    
    const { id } = req.params;
    const { body } = req;

    try {

        const equipmentTech = await EquipmentsTechnicals.findByPk(id);
        if (!equipmentTech) {
            return res.status(404).json({  //No existe
                msg: 'No existe equipment Technicals con el id: ' + id
            });
        }

        // await bu.update( countrie ); //Forma directa de actualizar los datos

        await equipmentTech.update({ //Tomamos solo los datos que deseamos actualizar
            Id_Equipment: body.Id_Equipment,
            Id_TechnicalSpecification: body.Id_TechnicalSpecification,
            Value: body.Value
        });

        res.json(equipmentTech);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}




























// // Obtener listado de Area  ----  Consulta  ----------------
// export const getEquipmentTechnical = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getAllEquipmentTechnicals) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------   ADD Area   ----- Insertar --------------------------
// export const createNewEquipmentTechnical = async (req, res) => {
//     const { id_Equipment, id_TechnicalSpec, value } = req.body;
//     // Validar campos vacios
//     if (id_Equipment == null || id_TechnicalSpec == null ) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     try {
//         const pool = await getConnection(); // instanciamos la conexion

//         await pool
//             .request()
//             .input("id_Equipment", sql.Int, id_Equipment) // Creamos un input con el valor que envia el cliente
//             .input('id_TechnicalSpec', sql.Int, id_TechnicalSpec)
//             .input("value", sql.VarChar, value) 
//             .query( queries.AddNewEquipmentTechnicals )  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New EquipmentTechnical')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------------   Get a Area by Id ---------------------
// export const getEquipmentTechnicalById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getEquipmentTechnicals_ById )

//     res.send(result.recordset[0])
// };

// // --------------------   Delete   ------------------------
// export const deleteEquipmentTechnicalById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_EquipmentTechnicals)

//     res.sendStatus(204) //Envia respuesta vacia
// };

// // -----------------   Update Area  ----------------------- 
// export const updateEquipmentTechnicalById = async (req, res) => {
//     const {id_Equipment, id_TechnicalSpec, value} = req.body;
//     const { id } = req.params;

//     if ((id_Equipment == null || id_TechnicalSpec == null )) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     const pool = await getConnection();
//     await pool
//         .request()
//         .input('id_Equipment', sql.Int, id_Equipment)
//         .input('id_TechnicalSpec', sql.Int, id_TechnicalSpec)
//         .input('value', sql.VarChar, value)
//         .input('Id', sql.Int, id)
//         .query(queries.updateEquipmentTechnicalsByID);

//     res.json({ id_Equipment, id_TechnicalSpec, value });
// }
