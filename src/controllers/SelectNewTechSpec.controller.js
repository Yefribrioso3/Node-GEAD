// CONSULTAS A LA BASE DE DATOS

// import { getConnection, sql, queries } from "../database";
import SelectNewTechSpec from "../Model/SelectNewTechSpec.js";

// Obtener listado de SelectNewServicesInformation  ----  Consulta  ----------------
export const getselectNewTechSpec = async (req, res) => {
    
    const selectNewTechSpec = await SelectNewTechSpec.findAll();

    res.json({ selectNewTechSpec });
};

export const getselectNewTechSpecById = async (req, res) => {

    const { id } = req.params;
    const selectNewTechSpec = await SelectNewTechSpec.findByPk(id);

    if (selectNewTechSpec) {

        res.json(selectNewTechSpec);

    } else {

        res.status(404).json({
            msg: `No existe selectNewTechSpec con el id ${id}`
        })

    }
};

// ------   ADD SelectNewServicesInformation   ----- Insertar --------------------------
export const createselectNewTechSpec = async (req, res) => {
    const { body } = req;

    try {

        const selectNewTechSpec = new SelectNewTechSpec(body);
        await selectNewTechSpec.save();

        res.json(selectNewTechSpec);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
};

// ------------   Get a SelectNewServicesInformation by Id ---------------------


// --------------------   Delete   ------------------------
export const deleteselectNewTechSpecById = async (req, res) => {
    const { id } = req.params;

    const selectNewTechSpec = await SelectNewTechSpec.findByPk(id);
    if (!selectNewTechSpec) {
        return res.status(404).json({  //No existe
            msg: 'No existe selectNewTechSpec con el id: ' + id
        });
    }

    //Eliminacion fisica borrando los datos desde la db
    await selectNewTechSpec.destroy();

    res.json('selectNewTechSpec Eliminado');
};

// -----------------   Update SelectNewServicesInformation  ----------------------- 
export const updateselectNewTechSpecById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const selectNewTechSpec = await SelectNewTechSpec.findByPk(id);
        if (!selectNewTechSpec) {
            return res.status(404).json({  //No existe
                msg: 'No existe selectNewTechSpec con el id: ' + id
            });
        }

        // await bu.update( countrie ); //Forma directa de actualizar los datos

        await selectNewTechSpec.update({ //Tomamos solo los datos que deseamos actualizar
            Id_TechnicalSpecification: body.Id_TechnicalSpecification,
            Id_NewTechSpec: body.Id_NewTechSpec
        });

        res.json(selectNewTechSpec);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}
