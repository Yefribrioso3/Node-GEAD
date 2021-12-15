// CONSULTAS A LA BASE DE DATOS

// import { getConnection, sql, queries } from "../database";
import Line from "../Model/line.js";

// Obtener listado de Line  ----  Consulta  ----------------
export const getLine = async (req, res) => {

    const line = await Line.findAll();

    res.json({ line });
};

// ------   ADD Line   ----- Insertar --------------------------
export const createNewLine = async (req, res) => {

    const { body } = req;

    try {

        const line = new Line(body);
        await line.save();

        res.json(line);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
};

// ------------   Get a Line by Id ---------------------
export const getLineById = async (req, res) => {

    const { id } = req.params;
    const line = await Line.findByPk(id);

    if (line) {

        res.json(line);

    } else {

        res.status(404).json({
            msg: `No existe Linea con el id ${id}`
        })

    }
};

// --------------------   Delete   ------------------------
export const deleteLineById = async (req, res) => {

    const { id } = req.params;

    const line = await Line.findByPk(id);
    if (!line) {
        return res.status(404).json({  //No existe
            msg: 'No existe linea con el id: ' + id
        });
    }

    //Eliminacion fisica borrando los datos desde la db
    await line.destroy();

    res.json('Linea Eliminada');
};

// -----------------   Update Line  ----------------------- 
export const updateLineById = async (req, res) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const line = await Line.findByPk(id);
        if (!line) {
            return res.status(404).json({  //No existe
                msg: 'No existe linea con el id: ' + id
            });
        }

        // await bu.update( countrie ); //Forma directa de actualizar los datos

        await line.update({ //Tomamos solo los datos que deseamos actualizar
            number: body.number,
            Id_LineTypes: body.Id_LineTypes
        });

        res.json(line);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}
































// // Obtener listado de Line  ----  Consulta  ----------------
// export const getLine = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getAllLine) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------   ADD Line   ----- Insertar --------------------------
// export const createNewLine = async (req, res) => {
//     const { name, number, id_LineTypes } = req.body;
//     // Calidar campos vacias
//     if (id_LineTypes == null) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     try {
//         const pool = await getConnection(); // instanciamos la conexion

//         await pool
//             .request()
//             .input("Name", sql.VarChar, name) // Creamos un input con el valor que envia el cliente
//             .input('number', sql.Int, number)
//             .input("id_LineTypes", sql.Int, id_LineTypes) 
//             .query( queries.AddNewLine )  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New Line')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------------   Get a Line by Id ---------------------
// export const getLineById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getLine_ById )

//     res.send(result.recordset[0])
// };

// // --------------------   Delete   ------------------------
// export const deleteLineById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_Line)

//     res.sendStatus(204) //Envia respuesta vacia
// };

// // -----------------   Update Line  ----------------------- 
// export const updateLineById = async (req, res) => {
//     const {name, number, id_LineTypes} = req.body;
//     const { id } = req.params;

//     if ((id_LineTypes == null)) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     const pool = await getConnection();
//     await pool
//         .request()
//         .input('Name', sql.VarChar, name)
//         .input('number', sql.Int, number)
//         .input('id_LineTypes', sql.Int, id_LineTypes)
//         .input('Id', sql.Int, id)
//         .query(queries.updateLineByID);

//     res.json({ name, number, id_LineTypes });
// }
