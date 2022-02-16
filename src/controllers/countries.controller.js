// CONSULTAS A LA BASE DE DATOS

// import { getConnection, sql, queries } from "../database";
import Countries from "../Model/countries.js";


    // ----------     GET ALL Countrie      ----------
    export const getCountries = async ( req  = Request , res = Responsees ) => {
   
        const countries = await Countries.findAll();
    
        res.json({ countries });
    }
    
        // ----------     GET Countrie BY ID      ----------
    export const getCountrieById = async ( req = Request , res = Response ) => {
       
        const { id } = req.params;
        const countries = await Countries.findByPk( id );
        
        if( countries ) {
    
            res.json( countries );
    
        } else {
    
            res.status(404).json({
                msg: `No existe el BU con el id ${id}`
            })
    
        }
    
    }
    
        // ----------     CREATE NEW Countrie      ----------
    export const postCountrie = async ( req = Request , res = Response ) => {
       
        const { body } = req;
    
        try {

            // const existeCountrie = await Countries.findOne({
            //     where: {
            //         Name: body.Name
            //     }
            // });
    
            // if (existeCountrie) {
            //     return res.status(400).json({  // 400 Bad request
            //         msg: 'Ya existe un país con el nombre: ' + body.Name
            //     });
            // }

    
            const countries = new Countries(body);
            await countries.save();
    
            res.json( countries );
            
        } catch (error) {
            console.log(error)
            res.status(500).json({
                msg: 'Comuniquese con el administrador', error
            })
        }
    }


    // ----------     UPDATE Countrie      ----------
    export const putCountrie = async ( req = Request , res = Response ) => {
   
        const { id } = req.params;
        const { body } = req;
        
        try {

            const countrie = await Countries.findByPk( id );
            if ( !countrie ) {
                return res.status(404).json({  //No existe
                    msg: 'No existe el país con el id: ' + id
                });
            }
    
            // await bu.update( countrie ); //Forma directa de actualizar los datos
    
            await countrie.update( { //Tomamos solo los datos que deseamos actualizar
                Name: body.Name,
                Id_BU: body.Id_BU
            } );
    
            res.json( countrie ); 
            
        } catch (error) {
            console.log(error)
            res.status(500).json({
                msg: 'Comuniquese con el administrador'
            })
        }
    }
    
        // ----------     DELETE Countrie      ----------
    export const deleteCountrie = async ( req = Request , res = Response ) => {
       
        const { id } = req.params;
        
        const countrie = await Countries.findByPk( id );
        if ( !countrie ) {
            return res.status(404).json({  //No existe
                msg: 'No existe el país con el id: ' + id
            });
        }
        
        //Eliminacion fisica borrando los datos desde la db
        await countrie.destroy();

        res.json( 'País Eliminado' );
    }


























// // Obtener listado de Bu   ---- consulta ----------------
// export const getCountries = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getAllCountries) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------   ADD BU   ----- Insertar --------------------------
// export const createNewCountrie = async (req, res) => {
//     const { name, id_Bu } = req.body;
//     // Calidar campos vacias
//     if (name == null || id_Bu == null) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     try {
//         const pool = await getConnection(); // instanciamos la conexion

//         await pool
//             .request()
//             .input("Name", sql.VarChar, name) // Creamos un input con el valor que envia el cliente
//             .input("id_Bu", sql.Int, id_Bu) 
//             .query( queries.AddNewCountrie )  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New Countrie')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------------   Get a Countrie by Id ---------------------
// export const getCountrieById = async (req, res) =>{
//     const { id } = req.params;
    
//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getCountrie_ById )
    
//     res.send(result.recordset[0])
// };

// // --------------------   Delete   ------------------------
// export const deleteCountrieById = async (req, res) =>{
//     const { id } = req.params;
    
//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_Countrie)
    
//     res.sendStatus(204) //Envia respuesta vacia
// };

// // -----------------   Update Countrie  ----------------------- 
// export const updateCountrieById = async (req, res) => {
//     const {name, id_Bu} = req.body;
//     const { id } = req.params;

//     if ((name == null || id_Bu == null)) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     const pool = await getConnection();
//     await pool
//         .request()
//         .input('Name', sql.VarChar, name)
//         .input('id_Bu', sql.Int, id_Bu)
//         .input('Id', sql.Int, id)
//         .query(queries.updateCountrieByID);

//     res.json({ name, id_Bu });
// }
