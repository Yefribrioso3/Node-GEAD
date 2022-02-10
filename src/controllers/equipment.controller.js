// CONSULTAS A LA BASE DE DATOS

import Equipment from "../Model/equipment.js";
// import { getConnection, sql, queries } from "../database";
// import Areas from "../Model/areas";
// import BU from "../Model/BU";
// import Countries from "../Model/countries";
// import Line from "../Model/line";
// import LineTypes from "../Model/linetype";
// import Operations from "../Model/operations";
// import Procedencia from "../Model/procedencia";
// import ServicesInformation from "../Model/servicesInformation";
// import SubAreas from "../Model/subareas";

// Obtener listado de Area  ----  Consulta  ----------------
export const getEquipment = async (req, res) => {

    const equipment = await Equipment.findAll();

    res.json({equipment} );
};

export const getAllEquipmentRelations = async (req, res) => {

    // const equipment = await Equipment.findAll({
    //     where: { Estado: true },
    //     include: [
    //         {
    //             model: Procedencia,
    //             as: 'Procedencia',
    //             include: [
    //                 {
    //                     model: Line,
    //                     as: 'line',
    //                     include: [
    //                         {
    //                             model: LineTypes,
    //                             as: 'lineTypes'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     model: Areas,
    //                     as: 'areas',
    //                     include: [
    //                         {
    //                             model: SubAreas
    //                         },
    //                         {
    //                             model: Operations,
    //                             as: 'operations',
    //                             include: [
    //                                 {
    //                                     model: Countries,
    //                                     as: 'countries',
    //                                     include: [
    //                                         {
    //                                             model: BU,
    //                                             as: 'bu'
    //                                         }
    //                                     ]
    //                                 }
    //                             ]
    //                         }
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             model: ServicesInformation,
    //             as: 'ServicesInformation',
    //             include: { all: true }
    //         }
    //     ],
    // })

    const equipment = await Equipment.findAll({ where: { Estado : true} ,include: { all: true, nested: true } })

    res.json({equipment});
};




// ------   ADD Area   ----- Insertar --------------------------
export const createNewEquipment = async (req, res) => {

    const { body } = req;

    try {

        // const existeEquipo = await Equipment.findOne({
        //     where: {
        //         Name: body.Name
        //     }
        // });

        // if (existeEquipo) {
        //     return res.status(400).json({  // 400 Bad request
        //         msg: 'Ya existe un equipo con el nombre: ' + body.Name
        //     });
        // }

        const equipment = new Equipment(body);
        await equipment.save();

        res.json(equipment);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
};

// ------------   Get a Area by Id ---------------------
export const getEquipmentById = async (req, res) => {

    const { id } = req.params;
    const equipment = await Equipment.findByPk(id);

    if (equipment) {

        res.json(equipment);

    } else {

        res.status(404).json({
            msg: `No existe equipo con el id ${id}`
        })

    }
};

// --------------------   Delete   ------------------------
export const deleteEquipmentById = async (req, res) => {

    const { id } = req.params;

    const equipment = await Equipment.findByPk(id);
    if (!equipment) {
        return res.status(404).json({  //No existe
            msg: 'No existe equipo con el id: ' + id
        });
    }

    //Eliminacion fisica borrando los datos desde la db
    await equipment.destroy();

    res.json('Equipo Eliminado');
};

// -----------------   Update Area  ----------------------- 
export const updateEquipmentById = async (req, res) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const equipment = await Equipment.findByPk(id);
        if (!equipment) {
            return res.status(404).json({  //No existe
                msg: 'No existe equipo con el id: ' + id
            });
        }

        // await bu.update( countrie ); //Forma directa de actualizar los datos

        await equipment.update({ //Tomamos solo los datos que deseamos actualizar
            Name: body.Name,
            code: body.code, // Para obtener el correo
            img: body.img,
            Id_Procedencia: body.Id_Procedencia,
            Estado: body.Estado,
        });

        res.json(equipment);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}
































// // Obtener listado de Area  ----  Consulta  ----------------
// export const getEquipment = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getAllEquipment) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------   ADD Area   ----- Insertar --------------------------
// export const createNewEquipment = async (req, res) => {
//     const { name, code, id_Procedencia, Estado } = req.body;
//     // Calidar campos vacias
//     if (name == null || id_Procedencia == null || Estado == null ) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     try {
//         const pool = await getConnection(); // instanciamos la conexion

//         await pool
//             .request()
//             .input("Name", sql.VarChar, name) // Creamos un input con el valor que envia el cliente
//             .input('code', sql.VarChar, code)
//             .input("id_Procedencia", sql.Int, id_Procedencia) 
//             .input("Estado", sql.Int, Estado) 
//             .query( queries.AddNewEquipment )  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New Equipment')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------------   Get a Area by Id ---------------------
// export const getEquipmentById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getEquipment_ById )

//     res.send(result.recordset[0])
// };

// // --------------------   Delete   ------------------------
// export const deleteEquipmentById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_Equipment)

//     res.sendStatus(204) //Envia respuesta vacia
// };

// // -----------------   Update Area  ----------------------- 
// export const updateEquipmentById = async (req, res) => {
//     const {name, code, id_Procedencia, Estado} = req.body;
//     const { id } = req.params;

//     if ((name == null || code == null || id_Procedencia == null || Estado == null)) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     const pool = await getConnection();
//     await pool
//         .request()
//         .input('Name', sql.VarChar, name)
//         .input('code', sql.VarChar, code)
//         .input('id_Procedencia', sql.Int, id_Procedencia)
//         .input("Estado", sql.Int, Estado) 
//         .input('Id', sql.Int, id)
//         .query(queries.updateEquipmentByID);

//     res.json({ name, code, id_Procedencia, Estado });
// }
