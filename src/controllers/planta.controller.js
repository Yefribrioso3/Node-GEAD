// CONSULTAS A LA BASE DE DATOS

// import { getConnection, sql, queries } from "../database";
import Operations from "../Model/operations.js";

// ----------     GET ALL PLANTAS      ----------
export const getPlanta = async ( req  = Request , res = Responsees ) => {
   
    const planta = await Operations.findAll();

     res.json({ planta });
}

    // ----------     GET PLANTA BY ID      ----------
export const getPlantaById = async ( req = Request , res = Response ) => {
   
    const { id } = req.params;
    const planta = await Operations.findByPk( id );
    
    if( planta ) {

        res.json( planta );

    } else {

        res.status(404).json({
            msg: `No existe el BU con el id ${id}`
        })

    }

}

    // ----------     CREATE NEW PLANTA      ----------
export const postPlanta = async ( req = Request , res = Response ) => {
   
    const { body } = req;

    try {

        // const existePlanta = await Operations.findOne({
        //     where: {
        //         Name: body.Name
        //     }
        // });

        // if (existePlanta) {
        //     return res.status(400).json({  // 400 Bad request
        //         msg: 'Ya existe una planta con el nombre: ' + body.Name
        //     });
        // }

        const planta = new Operations(body);
        await planta.save();

        res.json( planta );
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}


// ----------     UPDATE PLANTA      ----------
export const putPlanta = async ( req = Request , res = Response ) => {

    const { id } = req.params;
    const { body } = req;
    
    try {

        const planta = await Operations.findByPk( id );
        if ( !planta ) {
            return res.status(404).json({  //No existe
                msg: 'No existe una planta con el id: ' + id
            });
        }

        // await bu.update( countrie ); //Forma directa de actualizar los datos

        await planta.update( { //Tomamos solo los datos que deseamos actualizar
            Name: body.Name,
            Id_Countries: body.Id_Countries
        } );

        res.json( planta ); 
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}

    // ----------     DELETE PLANTA      ----------
export const deletePlanta = async ( req = Request , res = Response ) => {
   
    const { id } = req.params;
    
    const planta = await Operations.findByPk( id );
    if ( !planta ) {
        return res.status(404).json({  //No existe
            msg: 'No existe una planta con el id: ' + id
        });
    }
    
    //Eliminacion fisica borrando los datos desde la db
    await planta.destroy();

    res.json( 'Planta Eliminada' );
}




































// // Obtener listado de Planta - Operations   ---- consulta ----------------
// export const getPlanta = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getAllPlanta) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------   ADD Planta   ----- Insertar --------------------------
// export const createNewPlanta = async (req, res) => {
//     const { name, id_Countries } = req.body;
//     // Calidar campos vacias
//     if (name == null || id_Countries == null) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     try {
//         const pool = await getConnection(); // instanciamos la conexion

//         await pool
//             .request()
//             .input("Name", sql.VarChar, name) // Creamos un input con el valor que envia el cliente
//             .input("id_Countries", sql.Int, id_Countries) 
//             .query( queries.AddNewPlanta )  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New Plant')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------------   Get a Planta by Id   ---------------------
// export const getPlantaById = async (req, res) =>{
//     const { id } = req.params;
    
//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getPlanta_ById )
    
//     res.send(result.recordset[0])
// };

// // --------------------   Delete   ------------------------
// export const deletePlantaById = async (req, res) =>{
//     const { id } = req.params;
    
//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_Planta)
    
//     res.sendStatus(204) //Envia respuesta vacia
// };

// // -----------------   Update Planta  ----------------------- 
// export const updatePlantaById = async (req, res) => {
//     const {name, id_Countries} = req.body;
//     const { id } = req.params;

//     if ((name == null || id_Countries == null)) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     const pool = await getConnection();
//     await pool
//         .request()
//         .input('Name', sql.VarChar, name)
//         .input('id_Countries', sql.Int, id_Countries)
//         .input('Id', sql.Int, id)
//         .query(queries.updatePlantaByID);

//     res.json({ name, id_Countries });
// }
