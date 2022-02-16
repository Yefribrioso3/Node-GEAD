// CONSULTAS A LA BASE DE DATOS

// import { getConnection, sql, queries } from "../database";
import ServicesInformation from "../Model/servicesInformation.js";

// Obtener listado de ServicesInformation  ----  Consulta  ----------------
export const getServicesInformation = async (req, res) => {
    const servicesInformation = await ServicesInformation.findAll();

    res.json({ servicesInformation });
};

// ------   ADD ServicesInformation   ----- Insertar --------------------------
export const createServicesInformation = async (req, res) => {
    const { body } = req;

    try {

        const servicesInformation = new ServicesInformation(body);
        await servicesInformation.save();

        res.json(servicesInformation);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador', error
        })
    }
};

// ------------   Get a ServicesInformation by Id ---------------------
export const getServicesInformationById = async (req, res) => {

    const { id } = req.params;
    const servicesInformation = await ServicesInformation.findByPk(id);

    if (servicesInformation) {

        res.json(servicesInformation);

    } else {

        res.status(404).json({
            msg: `No existe Services Information con el id ${id}`
        })

    }
};



// --------------------   Delete   ------------------------
export const deleteServicesInformationById = async (req, res) => {
    
    const { id } = req.params;

    const servicesInformation = await ServicesInformation.findByPk(id);
    if (!servicesInformation) {
        return res.status(404).json({  //No existe
            msg: 'No existe services information con el id: ' + id
        });
    }

    //Eliminacion fisica borrando los datos desde la db
    await servicesInformation.destroy();

    res.json('Services information Eliminados');
};

// -----------------   Update ServicesInformation  ----------------------- 
export const updateServicesInformationById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const servicesInformation = await ServicesInformation.findByPk(id);
        if (!servicesInformation) {
            return res.status(404).json({  //No existe
                msg: 'No existe services information con el id: ' + id
            });
        }

        // await bu.update( countrie ); //Forma directa de actualizar los datos

        await servicesInformation.update({ //Tomamos solo los datos que deseamos actualizar
            DateOfInstallation: body.DateOfInstallation,
            DateOfDesintallation: body.DateOfDesintallation,
            DesuseReason: body.DesuseReason,
            DesinstallationReason: body.DesinstallationReason,
            ProcurementOrder: body.ProcurementOrder,
            Id_Equipment: body.Id_Equipment,
        });

        res.json(servicesInformation);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}














































// // Obtener listado de ServicesInformation  ----  Consulta  ----------------
// export const getServicesInformation = async (req, res) => {
//     try {

//         const pool = await getConnection() // Llamar conexion - Retorna un pool para conectarnos y consultas - Es asincrono
//         const result = await pool.request().query(queries.getAllServicesInformacion) // Hace peticion con request que hace un consulta con query
//         res.json(result.recordset)

//     } catch (error) {

//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------   ADD ServicesInformation   ----- Insertar --------------------------
// export const createServicesInformation = async (req, res) => {
//     const { DateOfInstallation, DateOfDesintallation, DesuseReason, DesinstallationReason, ProcurementOrder, Id_Equipment } = req.body;
//     // Calidar campos vacias
//     if ( Id_Equipment == null ) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     try {
//         const pool = await getConnection(); // instanciamos la conexion

//         await pool
//             .request()
//             .input("DateOfInstallation", sql.NVarChar, DateOfInstallation) // Creamos un input con el valor que envia el cliente
//             .input('DateOfDesintallation', sql.NVarChar, DateOfDesintallation)
//             .input('DesuseReason', sql.NVarChar, DesuseReason)
//             .input('DesinstallationReason', sql.NVarChar, DesinstallationReason)
//             .input('ProcurementOrder', sql.NVarChar, ProcurementOrder)
//             .input("Id_Equipment", sql.Int, Id_Equipment) 
//             .query( queries.AddNewServicesInformacion )  // Lo ejecutamos y agregamos con una consulta query

//         res.json('New Services Information')
//     } catch (error) {
//         res.status(500) // Error interno del servidor
//         res.send(error.message);
//     }
// };

// // ------------   Get a ServicesInformation by Id ---------------------
// export const getServicesInformationById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.getServicesInformacion_ById )

//     res.send(result.recordset[0])
// };



// // --------------------   Delete   ------------------------
// export const deleteServicesInformationById = async (req, res) =>{
//     const { id } = req.params;

//     const pool = await getConnection();
//     const result = await pool
//         .request()
//         .input('Id', id)
//         .query(queries.detele_ServicesInformacion)

//     res.sendStatus(204) //Envia respuesta vacia
// };

// // -----------------   Update ServicesInformation  ----------------------- 
// export const updateServicesInformationById = async (req, res) => {
//     const { DateOfInstallation, DateOfDesintallation, DesuseReason, DesinstallationReason, ProcurementOrder, Id_Equipment } = req.body;
//     const { id } = req.params;

//     if ((DateOfInstallation == null || DateOfDesintallation == null || DesuseReason == null || DesinstallationReason == null || ProcurementOrder == null || Id_Equipment == null)) {
//         return res.status(400).json({ msg: "Bad Request. Please Fill All Fields" });
//     }

//     const pool = await getConnection();
//     await pool
//         .request()
//         .input("DateOfInstallation", sql.VarChar, DateOfInstallation) // Creamos un input con el valor que envia el cliente
//         .input('DateOfDesintallation', sql.VarChar, DateOfDesintallation)
//         .input('DesuseReason', sql.VarChar, DesuseReason)
//         .input('DesinstallationReason', sql.VarChar, DesinstallationReason)
//         .input('ProcurementOrder', sql.VarChar, ProcurementOrder)
//         .input("Id_Equipment", sql.Int, Id_Equipment)
//         .input('Id', sql.Int, id) 
//         .query(queries.updateServicesInformacionByID);

//     res.json({ DateOfInstallation, DateOfDesintallation, DesuseReason, DesinstallationReason, ProcurementOrder, Id_Equipment });
// }