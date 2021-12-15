// CONSULTAS A LA BASE DE DATOS

// import { getConnection, sql, queries } from "../database";
import TechnicalSpecification from "../Model/technicalSpecification.js";

// Obtener listado de Bu   ---- consulta ----------------
export const getTechnicalSpec = async (req, res) => {
    const technicalSpecification = await TechnicalSpecification.findAll();

    res.json({ technicalSpecification });
};

// Crear BU   ----- Insertar --------------------------
export const createNewTechnicalSpec = async (req, res) => {

    const { body } = req;

    try {

        const technicalSpecification = new TechnicalSpecification(body);
        await technicalSpecification.save();

        res.json(technicalSpecification);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
};

export const getTechnicalSpecById = async (req, res) => {

    const { id } = req.params;
    const technicalSpecification = await TechnicalSpecification.findByPk(id);

    if (technicalSpecification) {

        res.json(technicalSpecification);

    } else {

        res.status(404).json({
            msg: `No existe informacion tecnica con el id ${id}`
        })

    }
};


export const deleteTechnicalSpecById = async (req, res) => {

    const { id } = req.params;

    const technicalSpecification = await TechnicalSpecification.findByPk(id);
    if (!technicalSpecification) {
        return res.status(404).json({  //No existe
            msg: 'No existe informacion tecnica con el id: ' + id
        });
    }

    //Eliminacion fisica borrando los datos desde la db
    await technicalSpecification.destroy();

    res.json('Informacion Tecnica Eliminada');
};


export const updateTechnicalSpecById = async (req, res) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const technicalSpecification = await TechnicalSpecification.findByPk(id);
        if (!technicalSpecification) {
            return res.status(404).json({  //No existe
                msg: 'No existe informacion tecnica con el id: ' + id
            });
        }

        // await bu.update( countrie ); //Forma directa de actualizar los datos

        await technicalSpecification.update({ //Tomamos solo los datos que deseamos actualizar
            EquipmentType: body.EquipmentType,
            CurrentConditions: body.CurrentConditions,
            Weight: body.Weight,
            OEM: body.OEM,
            Description: body.Description,
            ModelNumber: body.ModelNumber,
            SerialNumber: body.SerialNumber,
            vendor: body.vendor,
            currentWorking: body.currentWorking,
            Id_Equipment: body.Id_Equipment
        });

        res.json(technicalSpecification);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}









































// import { getConnection, sql, queries } from "../database";

// // Obtener listado de Bu   ---- consulta ----------------
// export const getTechnicalSpec = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getAllTechnicalSpec) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // Crear BU   ----- Insertar --------------------------
// export const createNewTechnicalSpec = async (req, res) => {
//     const { name } = req.body;
//     // Calidar campos vacias
//     if (name == null) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     try {
//         const pool = await getConnection(); // instanciamos la conexion

//         await pool
//             .request()
//             .input("Name", sql.VarChar, name) // Creamos un input con el valor que envia el cliente
//             .query( queries.AddNewTechnicalSpec)  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New Technical Specification')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// export const getTechnicalSpecById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getTechnicalSpec_ById )

//     res.send(result.recordset[0])
// };


// export const deleteTechnicalSpecById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_TechnicalSpec)

//     res.sendStatus(204) //Envia respuesta vacia
// };


// export const updateTechnicalSpecById = async (req, res) => {
//     const {name} = req.body;
//     const { id } = req.params;

//     if ((name == null)) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     const pool = await getConnection();
//     await pool
//         .request()
//         .input('Name', sql.VarChar, name)
//         .input('Id', sql.Int, id)
//         .query(queries.updateTechnicalSpecByID);

//     res.json({ name });
// }
