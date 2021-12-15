// CONSULTAS A LA BASE DE DATOS

// import { getConnection, sql, queries } from "../database";
import TechnicalSpecificationValues from "../Model/technicalSpecificationValues.js";

// Obtener listado de Technical Specification Values  ----  Consulta  ----------------
export const getTechnicalSpecValues = async (req, res) => {
    const technicSpecValues = await TechnicalSpecificationValues.findAll();

    res.json({ technicSpecValues });
};

// ------   ADD Technical Specification Values   ----- Insertar --------------------------
export const createNewTechnicalSpecValues = async (req, res) => {

    const { body } = req;

    try {

        const existetechnicSpecValues = await TechnicalSpecificationValues.findOne({
            where: {
                Value: body.Value
            }
        });

        if (existetechnicSpecValues) {
            return res.status(400).json({  // 400 Bad request
                msg: 'Ya existe Technical Specification Values con el nombre: ' + body.Name
            });
        }

        const technicSpecValues = new TechnicalSpecificationValues(body);
        await countries.save();

        res.json(technicSpecValues);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
};

// ------------   Get a Technical Specification Values by Id ---------------------
export const getTechnicalSpecValuesById = async (req, res) => {

    const { id } = req.params;
    const technicSpecValues = await TechnicalSpecificationValues.findByPk(id);

    if (technicSpecValues) {

        res.json(technicSpecValues);

    } else {

        res.status(404).json({
            msg: `No existe Technical Specification Values con el id ${id}`
        })

    }
};

// --------------------   Delete   ------------------------
export const deleteTechnicalSpecValuesById = async (req, res) => {
    
    const { id } = req.params;
        
    const technicSpecValues = await TechnicalSpecificationValues.findByPk( id );
    if ( !technicSpecValues ) {
        return res.status(404).json({  //No existe
            msg: 'No existe Technical Specification Values con el id: ' + id
        });
    }
    
    //Eliminacion fisica borrando los datos desde la db
    await technicSpecValues.destroy();

    res.json( 'Technical Specification Values Eliminado' );
};

// -----------------   Update Technical Specification Values  ----------------------- 
export const updateTechnicalSpecValuesById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    
    try {

        const technicSpecValues = await TechnicalSpecificationValues.findByPk( id );
        if ( !technicSpecValues ) {
            return res.status(404).json({  //No existe
                msg: 'No existe Technical Specification Values con el id: ' + id
            });
        }

        // await bu.update( countrie ); //Forma directa de actualizar los datos

        await technicSpecValues.update( { //Tomamos solo los datos que deseamos actualizar
            Value: body.Value,
            Id_TechnicalSpecification: body.Id_TechnicalSpecification
        } );

        res.json( technicSpecValues ); 
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}



































// // Obtener listado de Technical Specification Values  ----  Consulta  ----------------
// export const getTechnicalSpecValues = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getAllTechnicalSpecValu) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------   ADD Technical Specification Values   ----- Insertar --------------------------
// export const createNewTechnicalSpecValues = async (req, res) => {
//     const { id_TechnicalSpecification, value } = req.body;
//     // Calidar campos vacias
//     if (id_TechnicalSpecification == null || value == null) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     try {
//         const pool = await getConnection(); // instanciamos la conexion

//         await pool
//             .request()
//             .input("id_TechnicalSpecification", sql.Int, id_TechnicalSpecification) // Creamos un input con el valor que envia el cliente
//             .input("value", sql.VarChar, value) 
//             .query( queries.AddNewTechnicalSpecValu )  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New Technical Specification Values')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------------   Get a Technical Specification Values by Id ---------------------
// export const getTechnicalSpecValuesById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getTechnicalSpec_ByIdValu )

//     res.send(result.recordset[0])
// };

// // --------------------   Delete   ------------------------
// export const deleteTechnicalSpecValuesById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_TechnicalSpecValu)

//     res.sendStatus(204) //Envia respuesta vacia
// };

// // -----------------   Update Technical Specification Values  ----------------------- 
// export const updateTechnicalSpecValuesById = async (req, res) => {
//     const {id_TechnicSpecValu, value} = req.body;
//     const { id } = req.params;

//     if ((id_TechnicSpecValu == null || value == null)) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     const pool = await getConnection();
//     await pool
//         .request()
//         .input('id_TechnicSpecValu', sql.Int, id_TechnicSpecValu)
//         .input('value', sql.VarChar, value)
//         .input('Id', sql.Int, id)
//         .query(queries.updateTechnicalSpecByIDValu);

//     res.json({ id_TechnicSpecValu, value });
// }
