// CONSULTAS A LA BASE DE DATOS

import FinancialInformation from "../Model/financialInformation.js";

// Obtener listado de Bu   ---- consulta ----------------
export const getFinancialInformation = async (req, res) => {
    const financialInformation = await FinancialInformation.findAll();

    res.json({ financialInformation });
};

// Crear BU   ----- Insertar --------------------------

export const createNewFinancialInformation = async (req, res) => {

    const { body } = req;

    try {
        const financialInformation = new FinancialInformation(body);
        await financialInformation.save();

        res.json(financialInformation);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
};

export const getFinancialInformationById = async (req, res) => {

    const { id } = req.params;
    const financialInformation = await FinancialInformation.findByPk(id);

    if (financialInformation) {
        res.json(financialInformation);

    } else {
        res.status(404).json({
            msg: `No existe informacion financiera con el id ${id}`
        })
    }
};


export const deleteFinancialInformationById = async (req, res) => {

    const { id } = req.params;

    const financialInformation = await FinancialInformation.findByPk(id);
    if (!financialInformation) {
        return res.status(404).json({  //No existe
            msg: 'No existe informacion financiera con el id: ' + id
        });
    }

    //Eliminacion fisica borrando los datos desde la db
    await financialInformation.destroy();

    res.json('Informacion financiera Eliminada');
};


export const updateFinancialInformationById = async (req, res) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const financialInformation = await FinancialInformation.findByPk(id);
        if (!financialInformation) {
            return res.status(404).json({  //No existe
                msg: 'No existe informacion financiera con el id: ' + id
            });
        }

        await financialInformation.update( body ); //Forma directa de actualizar los datos

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

        res.json(financialInformation);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}