
// import { getConnection, sql, queries } from "../database";
import BU from "../Model/bu.js";


    // ----------     GET ALL BU      ----------
export const getBU = async ( req  = Request , res = Responsees ) => {
   
    const Bu = await BU.findAll();

     res.json({ Bu });
}

    // ----------     GET BU BY ID      ----------
export const getBuByID = async ( req = Request , res = Response ) => {
   
    const { id } = req.params;
    const Bu = await BU.findByPk( id );
    
    if( Bu ) {

        res.json( Bu );

    } else {

        res.status(404).json({
            msg: `No existe el BU con el id ${id}`
        })

    }

}

    // ----------     CREATE NEW BU      ----------
export const postBU = async ( req = Request , res = Response ) => {
   
    const { body } = req;

    try {

        // const existeBU = await BU.findOne({
        //     where: {
        //         Name: body.Name
        //     }
        // });

        // if (existeBU) {
        //     return res.status(400).json({  // 400 Bad request
        //         msg: 'Ya existe un BU con el nombre: ' + body.Name
        //     });
        // }


        const Bu = new BU(body); //Crear nuevo fila de datos
        await Bu.save(); //Guardarla

        res.json( Bu ); 
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador', error
        })
    }
}

    // ----------     UPDATE BU      ----------
export const putBU = async ( req = Request , res = Response ) => {
   
    const { id } = req.params;
    const { body } = req;
    
    try {

        const bu = await BU.findByPk( id );
        if ( !bu ) {
            return res.status(404).json({  //No existe
                msg: 'No existe el Bu con el id: ' + id
            });
        }

        // await bu.update( body ); //Forma directa de actualizar los datos

        await bu.update( { //Tomamos solo los datos que deseamos actualizar
            Name: body.Name   
        } );

        res.json( bu ); 
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}

    // ----------     DELETE BU      ----------
export const deleteBU = async ( req = Request , res = Response ) => {
    
    const { id } = req.params;
    
    const bu = await BU.findByPk( id );
    if ( !bu ) {
        return res.status(404).json({  //No existe
            msg: 'No existe el Bu con el id: ' + id
        });
    }
    
    //Eliminacion fisica borrando los datos desde la db

    await bu.destroy();

    //Eliminacion logica, actualizando el campo estado de 1 a 0

    // await bu.update({ Estado: false });
    
    res.json('BU Eliminado');
}













// Obtener listado de Bu   ---- consulta ----------------
// export const getBu = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getAllProductsBU) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };


// // Crear BU   ----- Insertar --------------------------
// export const createNewBU = async (req, res) => {
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
//             .query( queries.AddNewBU)  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New BU')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// export const getBuById = async (req, res) =>{
//     const { id } = req.params;
    
//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getBu_ById )
    
//     res.send(result.recordset[0])
// };


// export const deleteBuById = async (req, res) =>{
//     const { id } = req.params;
    
//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_BU)
    
//     res.sendStatus(204) //Envia respuesta vacia
// };


// export const updateBuById = async (req, res) => {
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
//         .query(queries.updateBuByID);

//     res.json({ name });
// }
