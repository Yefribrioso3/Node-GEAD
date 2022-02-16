// CONSULTAS A LA BASE DE DATOS
import Areas from "../Model/areas.js";
// import { getConnection, sql, queries } from "../database";



// ----------     GET ALL Areas      ----------
export const getAreas = async ( req  = Request , res = Responsees ) => {
   
    const area = await Areas.findAll();

     res.json({ area });
}

    // ----------     GET Area BY ID      ----------
export const getAreaById = async ( req = Request , res = Response ) => {
   
    const { id } = req.params;
    const area = await Areas.findByPk( id );
    
    if( area ) {

        res.json( area );

    } else {

        res.status(404).json({
            msg: `No existe Area con el id ${id}`
        })
    }
}

    // ----------     CREATE NEW Area      ----------
export const postArea = async ( req = Request , res = Response ) => {
   
    const { body } = req;

    try {
        // const existeArea = await Areas.findOne({
        //     where: {
        //         Name: body.Name
        //     }
        // });

        // if (existeArea) {
        //     return res.status(400).json({  // 400 Bad request
        //         msg: 'Ya existe una area con el nombre: ' + body.Name
        //     });
        // }
        const area = new Areas(body);
        await area.save();

        res.json( area );
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador', error
        })
    }
}


// ----------     UPDATE Area      ----------
export const putArea = async ( req = Request , res = Response ) => {

    const { id } = req.params;
    const { body } = req;
    
    try {

        const area = await Areas.findByPk( id );
        if ( !area ) {
            return res.status(404).json({  //No existe
                msg: 'No existe una area con el id: ' + id
            });
        }
        // await bu.update( countrie ); //Forma directa de actualizar los datos

        await area.update( { //Tomamos solo los datos que deseamos actualizar
            Name: body.Name,
            Id_Operations: body.Id_Operations
        } );

        res.json( area ); 
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}

    // ----------     DELETE Area      ----------
export const deleteArea = async ( req = Request , res = Response ) => {
   
    const { id } = req.params;
    
    const area = await Areas.findByPk( id );
    if ( !area ) {
        return res.status(404).json({  //No existe
            msg: 'No existe una Area con el id: ' + id
        });
    }
    
    //Eliminacion fisica borrando los datos desde la db
    await area.destroy();

    res.json( 'Area Eliminada' );
}



















































// // Obtener listado de Area  ----  Consulta  ----------------
// export const getArea = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getAllArea) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------   ADD Area   ----- Insertar --------------------------
// export const createNewArea = async (req, res) => {
//     const { name, id_Op } = req.body;
//     // Calidar campos vacias
//     if (name == null || id_Op == null) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     try {
//         const pool = await getConnection(); // instanciamos la conexion

//         await pool
//             .request()
//             .input("Name", sql.VarChar, name) // Creamos un input con el valor que envia el cliente
//             .input("id_Op", sql.Int, id_Op) 
//             .query( queries.AddNewArea )  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New Area')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------------   Get a Area by Id ---------------------
// export const getAreaById = async (req, res) =>{
//     const { id } = req.params;
    
//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getArea_ById )
    
//     res.send(result.recordset[0])
// };

// // --------------------   Delete   ------------------------
// export const deleteAreaById = async (req, res) =>{
//     const { id } = req.params;
    
//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_Area)
    
//     res.sendStatus(204) //Envia respuesta vacia
// };

// // -----------------   Update Area  ----------------------- 
// export const updateAreaById = async (req, res) => {
//     const {name, id_Op} = req.body;
//     const { id } = req.params;

//     if ((name == null || id_Op == null)) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     const pool = await getConnection();
//     await pool
//         .request()
//         .input('Name', sql.VarChar, name)
//         .input('id_Op', sql.Int, id_Op)
//         .input('Id', sql.Int, id)
//         .query(queries.updateAreaByID);

//     res.json({ name, id_Op });
// }
