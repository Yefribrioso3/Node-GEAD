// CONSULTAS A LA BASE DE DATOS

// import { getConnection, sql, queries } from "../database";
import LineTypes from "../Model/linetype.js";

// Obtener listado de LineType   ---- consulta ----------------
export const getLineType = async (req, res) => {

    const lineTypes = await LineTypes.findAll();

    res.json({ lineTypes });
};

// Crear LineType   ----- Insertar --------------------------
export const createNewLineType = async (req, res) => {

    const { body } = req;

    try {

        // const existeLineType = await LineTypes.findOne({
        //     where: {
        //         Name: body.Name
        //     }
        // });

        // if (existeLineType) {
        //     return res.status(400).json({  // 400 Bad request
        //         msg: 'Ya existe line type con el nombre: ' + body.Name
        //     });
        // }


        const lineTypes = new LineTypes(body);
        await lineTypes.save();

        res.json(lineTypes);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador', error
        })
    }
};

export const getLineTypeById = async (req, res) => {

    const { id } = req.params;
    const lineTypes = await LineTypes.findByPk(id);

    if (lineTypes) {

        res.json(lineTypes);

    } else {

        res.status(404).json({
            msg: `No existe line type con el id ${id}`
        })

    }
};


export const deleteLineTypeById = async (req, res) => {

    const { id } = req.params;

    const lineTypes = await LineTypes.findByPk(id);
    if (!lineTypes) {
        return res.status(404).json({  //No existe
            msg: 'No existe line type con el id: ' + id
        });
    }

    //Eliminacion fisica borrando los datos desde la db
    await lineTypes.destroy();

    res.json('Line type Eliminada');
};


export const updateLineTypeById = async (req, res) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const lineTypes = await LineTypes.findByPk(id);
        if (!lineTypes) {
            return res.status(404).json({  //No existe
                msg: 'No existe line types con el id: ' + id
            });
        }

        // await bu.update( countrie ); //Forma directa de actualizar los datos

        await lineTypes.update({ //Tomamos solo los datos que deseamos actualizar
            Name: body.Name,
        });

        res.json(lineTypes);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}











































// // Obtener listado de LineType   ---- consulta ----------------
// export const getLineType = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getAllLineType) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // Crear LineType   ----- Insertar --------------------------
// export const createNewLineType = async (req, res) => {
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
//             .query( queries.AddNewLineType)  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New Line Type')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// export const getLineTypeById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getLineType_ById )

//     res.send(result.recordset[0])
// };


// export const deleteLineTypeById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_LineType)

//     res.sendStatus(204) //Envia respuesta vacia
// };


// export const updateLineTypeById = async (req, res) => {
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
//         .query(queries.updateLineTypeByID);

//     res.json({ name });
// }
