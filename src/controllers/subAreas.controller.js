// CONSULTAS A LA BASE DE DATOS

// import { getConnection, sql, queries } from "../database";
import SubAreas from "../Model/subareas.js";

// Obtener listado de Area  ----  Consulta  ----------------
export const getSubArea = async (req, res) => {

    const subarea = await SubAreas.findAll();

    res.json({ subarea });

};

// ------------   Get a Area by Id ---------------------
export const getSubAreaById = async (req, res) => {
    const { id } = req.params;
    const subarea = await SubAreas.findByPk(id);

    if (subarea) {

        res.json(subarea);

    } else {

        res.status(404).json({
            msg: `No existe la subarea con el id ${id}`
        })

    }
};

// ------   ADD Area   ----- Insertar --------------------------
export const createNewSubArea = async (req, res) => {
    const { body } = req;

    try {

        // const existeSubarea = await SubAreas.findOne({
        //     where: {
        //         Name: body.Name
        //     }
        // });

        // if (existeSubarea) {
        //     return res.status(400).json({  // 400 Bad request
        //         msg: 'Ya existe una subarea con el nombre: ' + body.Name
        //     });
        // }

        const subarea = new SubAreas(body);
        await subarea.save();

        res.json(subarea);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
};

// -----------------   Update Area  ----------------------- 
export const updateSubAreaById = async (req, res) => {
    
    const { id } = req.params;
    const { body } = req;

    try {

        const subarea = await SubAreas.findByPk(id);
        if (!subarea) {
            return res.status(404).json({  //No existe
                msg: 'No existe una subarea con el id: ' + id
            });
        }

        // await bu.update( subarea ); //Forma directa de actualizar los datos

        await subarea.update({ //Tomamos solo los datos que deseamos actualizar
            Name: body.Name,
            Id_Areas: body.Id_Areas
        });

        res.json(subarea);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}

// --------------------   Delete   ------------------------
export const deleteSubAreaById = async (req, res) => {
    
    const { id } = req.params;

    const subarea = await SubAreas.findByPk(id);
    if (!subarea) {
        return res.status(404).json({  //No existe
            msg: 'No existe una subarea con el id: ' + id
        });
    }

    //Eliminacion fisica borrando los datos desde la db
    await subarea.destroy();

    res.json('Subarea Eliminada');
};

























































// // Obtener listado de Area  ----  Consulta  ----------------
// export const getSubArea = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getAllSubArea) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------   ADD Area   ----- Insertar --------------------------
// export const createNewSubArea = async (req, res) => {
//     const { name, id_Area } = req.body;
//     // Calidar campos vacias
//     if (name == null || id_Area == null) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     try {
//         const pool = await getConnection(); // instanciamos la conexion

//         await pool
//             .request()
//             .input("Name", sql.VarChar, name) // Creamos un input con el valor que envia el cliente
//             .input("id_Area", sql.Int, id_Area) 
//             .query( queries.AddNewSubArea )  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New Subarea')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------------   Get a Area by Id ---------------------
// export const getSubAreaById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getSubArea_ById )

//     res.send(result.recordset[0])
// };

// // --------------------   Delete   ------------------------
// export const deleteSubAreaById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_SubArea)

//     res.sendStatus(204) //Envia respuesta vacia
// };

// // -----------------   Update Area  ----------------------- 
// export const updateSubAreaById = async (req, res) => {
//     const {name, id_Area} = req.body;
//     const { id } = req.params;

//     if ((name == null || id_Area == null)) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     const pool = await getConnection();
//     await pool
//         .request()
//         .input('Name', sql.VarChar, name)
//         .input('id_Area', sql.Int, id_Area)
//         .input('Id', sql.Int, id)
//         .query(queries.updateSubAreaByID);

//     res.json({ name, id_Area });
// }
