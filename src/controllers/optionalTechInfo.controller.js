// CONSULTAS A LA BASE DE DATOS

import OptionalTechInfo from "../Model/optionalTechInfo.js";


// Obtener listado de Finalcial Information   ---- consulta ----------------
export const getOptionalTechInfo = async (req, res) => {
    const optionalTechInfo = await OptionalTechInfo.findAll();

    res.json({ optionalTechInfo });
};

// Crear BU   ----- Insertar --------------------------

export const createNewOptionalTechInfo = async (req, res) => {

    const { body } = req;

    try {
        const optionalTechInfo = new OptionalTechInfo(body);
        await optionalTechInfo.save();

        res.json(optionalTechInfo);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: `Comuniquese con el administrador`, error
        })
    }
};

export const getOptionalTechInfoById = async (req, res) => {

    const { id } = req.params;
    const optionalTechInfo = await OptionalTechInfo.findByPk(id);

    if (optionalTechInfo) {
        res.json(optionalTechInfo);

    } else {
        res.status(404).json({
            msg: `No existe informacion tecnica con el id ${id}`
        })
    }
};

export const deleteOptionalTechInfoById = async (req, res) => {

    const { id } = req.params;

    const optionalTechInfo = await OptionalTechInfo.findByPk(id);
    if (!optionalTechInfo) {
        return res.status(404).json({  //No existe
            msg: 'No existe informacion tecnica con el id: ' + id
        });
    }

    //Eliminacion fisica borrando los datos desde la db
    await optionalTechInfo.destroy();

    res.json('Informacion tecnica Eliminada');
};

export const updateOptionalTechInfoById = async (req, res) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const optionalTechInfo = await OptionalTechInfo.findByPk(id);
        if (!optionalTechInfo) {
            return res.status(404).json({  //No existe
                msg: 'No existe informacion tecnica opcional con el id: ' + id
            });
        }

        await optionalTechInfo.update( body ); //Forma directa de actualizar los datos

        // await financialInformation.update({ //Tomamos solo los datos que deseamos actualizar
        //     EquipmentType: body.EquipmentType,
        //     CurrentConditions: body.CurrentConditions,
        //     Weight: body.Weight,
        //     OEM: body.OEM,
        //     Description: body.Description,
        //     ModelNumber: body.ModelNumber,
        //     SerialNumber: body.SerialNumber,
        //     vendor: body.vendor,
        //     currentWorking: body.currentWorking,
        //     Id_Equipment: body.Id_Equipment
        // });

        res.json(optionalTechInfo);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}